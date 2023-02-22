// Triangle Perimeter Assignment Start Code
document.getElementById("buttonCalc").addEventListener("click", btnClicked);

function btnClicked() {
  // point inputs
  let XA = +document.getElementById("xA").value;
  let XB = +document.getElementById("xB").value;
  let XC = +document.getElementById("xC").value;

  let YA = +document.getElementById("yA").value;
  let YB = +document.getElementById("yB").value;
  let YC = +document.getElementById("yC").value;

  // Process
  let AB = dist(XA, XB, YA, YB);
  let AC = dist(XA, XB, YA, YB);
  let BC = dist(XB, XC, YB, YC);

  // Output
  document.getElementById("ABlength").innerHTML = AB;
  document.getElementById("AClength").innerHTML = AC;
  document.getElementById("BClength").innerHTML = BC;
  document.getElementById("perimeter").innerHTML = AB + AC + BC;
}

function dist(x1, x2, y1, y2) {
  return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}
