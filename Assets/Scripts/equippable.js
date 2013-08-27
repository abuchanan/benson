var equip_name = 'default';

function equipped() {
  gameObject.GetComponent(BoxCollider).enabled = false;
}

function unequipped() {
  gameObject.GetComponent(BoxCollider).enabled = true;
}
