#pragma strict

var equip_distance = 1;
private var equipped : GameObject;

function equip(target : GameObject) {
  Debug.Log('equip');
  equipped = target;
}

// TODO how to drop and pickup at the same time?
function Update() {
  if (Input.GetKeyUp(KeyCode.E)) {
    Debug.Log('pressed');

    if (!equipped) {
        var hits = Physics.OverlapSphere(gameObject.transform.position, equip_distance);

        for (var i = 0; i < hits.length; i++) {
          var hit = hits[i].gameObject;
          var equippable = hit.GetComponent(equippable);

          if (equippable) {
            Debug.Log(equippable.equip_name);
            hit.transform.parent = transform;
            equipped = hit;
            hit.SendMessage('equipped');
          }
        }
    } else {
      equipped.transform.parent = null;
      equipped.SendMessage('unequipped');
      equipped = null;
    }
  }
}

function OnDrawGizmosSelected () {
		// Draw a yellow sphere at the transform's position
		Gizmos.color = Color.yellow;
		Gizmos.DrawWireSphere(transform.position, equip_distance);
}
