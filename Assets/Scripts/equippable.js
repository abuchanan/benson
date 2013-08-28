function equip_to(other : GameObject) {
  Debug.Log('equipped');
  transform.parent = other.transform;
  GetComponent(BoxCollider).enabled = false;
}

function unequip() {
  Debug.Log('unequipped');
  transform.parent = null;
  GetComponent(BoxCollider).enabled = true;
}

function highlight() {
  renderer.material.color = Color.red;
}

function clear_highlight() {
  renderer.material.color = Color.blue;
}
