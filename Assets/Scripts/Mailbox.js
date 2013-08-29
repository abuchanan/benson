private var oldman : Oldman;
private var honey : GameObject;
private var distance = 1;


function Start() {
  oldman = GameObject.Find("oldman").GetComponent(Oldman);
  honey = GameObject.Find('honey');
}

function Update() {
  var hits = Physics.OverlapSphere(transform.position, distance);

  for (var hit : Collider in hits) {
    if (hit.gameObject == honey) {
      oldman.defeated = true;
    } else {
      oldman.defeated = false;
    }
  }
}
