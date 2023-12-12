document.getElementById("submitbtn").onclick = function () {
  let temperatura;
  if (document.getElementById("gc").checked) {
    temperatura = Number(document.getElementById("texto").value);
    // temperatura = Number(temperatura);
    temperatura = celcius(temperatura);
    document.getElementById("temperatura").innerHTML = temperatura + " Celcius";
  } else if (document.getElementById("gf").checked) {
    temperatura = Number(document.getElementById("texto").value);
    //temperatura = Number(temperatura);
    temperatura = farenheight(temperatura);
    document.getElementById("temperatura").innerHTML = temperatura + " Farenheight";
  } else {
    document.getElementById("temperatura").innerHTML = temperatura + " Selecciona una unidad";
  }
};

function celcius(temperatura) {
  return (temperatura - 32) * (5 / 9);
}

function farenheight(temperatura) {
  return (temperatura * 9) / 5 + 32;
}
