#pragma strict

private var dog : GameObject;
private var wall : GameObject;
private var vacuum : GameObject;
private var oldman : Oldman;

function Start() {
	dog = GameObject.Find("Dog");
  wall = GameObject.Find("DogInvisibleWall");
  vacuum = GameObject.Find("vacuum");
  oldman = GameObject.Find("oldman").GetComponent(Oldman);
	dog.renderer.material.color = Color.green;
}

function has_vacuum(other : GameObject) {
  var equip : Equip = other.GetComponent(Equip);
  return equip && equip.is_equipped(vacuum);
}

function OnTriggerStay(other : Collider) {
  // TODO should i be using OnTriggerStay? or OnTriggerEnter?
  //      Stay is called every frame, which seems unnecessary, but then again,
  //      I'm not really worried about performance.

  if (oldman.defeated && has_vacuum(other.gameObject)) {
    Debug.Log('defeated');
    wall.SetActive(false);

  } else {
    wall.SetActive(true);
    dog.renderer.material.color = Color.red;
    dog.audio.loop = true;
    dog.audio.Play();	
  }

  // TODO if you drop the vacuum while in the dog trigger,
  //      benson should be forced to leave the trigger.
}

function OnTriggerExit(other : Collider) {
	dog.renderer.material.color = Color.green;
  dog.audio.loop = false;
  wall.SetActive(true);
}
