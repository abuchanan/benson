#pragma strict

var dog : GameObject;

function Start() {
	dog = GameObject.Find("Dog");
	dog.renderer.material.color = Color.green;
}

function OnTriggerEnter(other : Collider) {
	Debug.Log("foo");
	dog.renderer.material.color = Color.red;
    dog.audio.Play();	
}

function OnTriggerExit(other : Collider) {
	dog.renderer.material.color = Color.green;
	dog.audio.Stop();
}