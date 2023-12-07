// let letra = 1;
// switch (letra) {
//   case "A":
//     console.log("Vocal correcta");
//     break;
//   case "B":
//     console.log("Letra incorrecta");
//     break;
//   case "C":
//     console.log("Letra incorrecta");
//     break;
//   default:
//     console.log(letra + " solo colocar letras");
// }

// let age = -2;
// if (age>=30 || age >0){
//   console.log("Estas en el rango");
// }else{
//   console.log("Edad incorrecta");
// }

// let temp = 18;
// let sunny = true;

// if (!(temp < 0)) {
//   console.log("No hace mucho calor");
// } else {
//   console.log("Hace mucho calor");
// }

// if (!sunny) {
//   console.log("El sol esta presente");
// } else {
//   console.log("Es de noche");
// }

// let name = "";
// do {
//     name = window.prompt("Digita un nombre");
// } while (name == "" || name == null);

// console.log(name);

// for ( i = 10; i > 0; -=i) {
//   console.log(i);
// }

// let number= 10;
// while (number<=30){
//   document.write("El valor de recorrido" + number +"<br>");
//   if(number == 20){
//     document.write("Se ha finalizado el bucle");
//     break;
//   }
//   number+2;

// }

// let number = Number(prompt("Ingresa un numero: "));
// let suma = 0;

// while(number > 0){
//   suma += number;
//   number = Number(prompt("Ingresa un numero: "));
// }
// console.log("La suma es : " + suma);

let number = Number(prompt("Ingresa un numero: "));
let n;
let intentos = 1;

n = Math.ceil(Math.random() * 20);

while (number !== n) {
  if (number > n) {
    number = Number(prompt("Ingresa un numero menor: "));
    intentos++;
  } else {
    number = Number(prompt("Ingresa un numero mayor: "));
    intentos++;
  }
}
console.log("Has acertado en : " + intentos);
