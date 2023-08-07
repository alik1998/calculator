function dis(val) {
  document.getElementById("Result").value += val;
}

function solve() {
  let x = document.getElementById("Result").value;
  let y = math.evaluate(x);
  document.getElementById("Result").value = y;
}
function clr() {
  document.getElementById("Result").value = " ";
}


