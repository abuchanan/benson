#pragma strict
private var vacuum_geo : GameObject;
private var vacuum : GameObject;
private var equipped = false;
private var equip_to : Collider = null;

function Start() {
    vacuum = GameObject.Find("vacuum");
	vacuum_geo = GameObject.Find("vacuum/vacuum_geo");
	vacuum_geo.renderer.material.color = Color.red;
}

function OnTriggerEnter(other : Collider) {
    if (!equipped) {
	    vacuum_geo.renderer.material.color = Color.green;
	}
}

function OnTriggerStay(other : Collider) {
	equip_to = null;
	
    if (!equipped && Input.GetKeyDown(KeyCode.E)) {
        equip_to = other;
    }
}

function Update() {
    if (equipped && Input.GetKeyDown(KeyCode.E)) {
        equipped = false;
        vacuum.transform.parent = null;
    } else if (equip_to) {
    	vacuum.transform.parent = equip_to.transform;
        equipped = true;
    }
    
}

function OnTriggerExit(other : Collider) {
	if (!equipped) {
	    vacuum_geo.renderer.material.color = Color.red;
	}
}