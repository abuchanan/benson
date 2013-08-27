#pragma strict

function Start() {
}

function OnTriggerEnter(other : Collider) {
  gameObject.renderer.material.color = Color.red;
}

// TODO what if you collided with two equip-able objects?
//      what if you need to drop instead of equip?
function OnTriggerStay(other : Collider) {
  if (other.CompareTag('Player') && Input.GetKeyUp(KeyCode.E)) {
    gameObject.transform.parent = other.transform;
    gameObject.GetComponent(BoxCollider).enabled = false;

    other.GetComponent(Equip).equip(gameObject);
  }
}

function OnTriggerExit(other : Collider) {
  gameObject.renderer.material.color = Color.blue;
}
