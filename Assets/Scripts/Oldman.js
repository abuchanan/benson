var defeated = false;

function Start() {
}

function Update() {
  if (defeated) {
    renderer.material.color = Color.green;
  } else {
    renderer.material.color = Color.gray;
  }
}
