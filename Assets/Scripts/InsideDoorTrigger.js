#pragma strict

var door : GameObject;
var door_color : Color;
var door_active = false;

function Start() {
	door = GameObject.Find("Door");
	door_color = door.renderer.material.color;
}

function OnTriggerEnter(other : Collider) {
	
	door.renderer.material.color = Color.green;
	door_active = true;
}

function OnTriggerExit(other : Collider) {
	door.renderer.material.color = door_color;
	door_active = false;
}

function Update() {
	if (door_active && Input.GetKeyDown(KeyCode.E)) {
		Application.LoadLevel("outside");
	}
}