#pragma strict

private var dog : GameObject;
private var wall : GameObject;

function Start() {
	dog = GameObject.Find("Dog");
  wall = GameObject.Find("DogInvisibleWall");
	dog.renderer.material.color = Color.green;
}

function OnTriggerEnter(other : Collider) {
  var defeater = other.GetComponent(DogDefeater);

  if (defeater && defeater.has_vacuum()) {
    Debug.Log('defeated');
    wall.SetActive(false);

  } else {
    dog.renderer.material.color = Color.red;
    dog.audio.loop = true;
    dog.audio.Play();	
  }
}

function OnTriggerExit(other : Collider) {
	dog.renderer.material.color = Color.green;
  dog.audio.loop = false;
}
