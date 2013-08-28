#pragma strict

var equip_distance = 1;
private var equipped : Equippable = null;
private var closest : Equippable = null;


// TODO support drop and pickup in the same button press?
function Update() {

  // TODO doesn't make sense to highlight items if you can't equip them?
  //      e.g. because you have something already equipped.
  if (closest) {
    closest.clear_highlight();
  }

  closest = null;

  var closest_d : float;
  var hits = Physics.OverlapSphere(gameObject.transform.position, equip_distance);

  for (var hit : Collider in hits) {
    var equippable = hit.GetComponent(Equippable);

    if (!equippable) {
      continue;
    }

    if (equipped && equippable == equipped) {
      continue;
    }

    var d = (hit.transform.position - transform.position).sqrMagnitude;

    if (!closest || d < closest_d) {
      closest = equippable;
      closest_d = d;
    }
  }

  if (closest) {
    closest.highlight();
  }

  if (Input.GetKeyUp(KeyCode.E)) {
    Debug.Log('pressed');

    if (!equipped && closest) {
      closest.equip_to(gameObject);
      equipped = closest;
    } else {
      equipped.unequip();
      equipped = null;
    }
  }
}

function OnDrawGizmosSelected () {
		// Draw a yellow sphere at the transform's position
		Gizmos.color = Color.yellow;
		Gizmos.DrawWireSphere(transform.position, equip_distance);
}
