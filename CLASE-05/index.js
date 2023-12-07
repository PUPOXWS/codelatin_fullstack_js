let filas = window.prompt("Ingrese las filas");
let columnas = window.prompt("Ingrese las columnas");
let simbolo = window.prompt("Ingrese el simbolo");

for (let i = 0; i <= filas; i += 1) {
  for (let j = 0; j <= columnas; j += 1) {
    document.getElementById("figura").innerHTML += simbolo;
  }
  document.getElementById("figura").innerHTML += "<br/>";
}
