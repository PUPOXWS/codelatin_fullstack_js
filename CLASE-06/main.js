let numbers = [1, 2, 3, 4, 5, 6, 7];

for (let i = numbers.length-1; i>=0 ; i-=1) {
  console.log(numbers[i]);
}

for (let numero of numbers) {
    console.log(numero);
}

let colors = ["amarillo","azul","rojo","blue"];
// colors = colors.sort().reverse();//Ordenar arrays

let ciudades = ["Bucaramanga","Medellin","Boyaca"];
let equipos = ["Nacional","Millonarios","America"];

let colombia = [colors,ciudades,equipos];

for (let col of colombia) {
    for(let ciudad of col){
        console.log(ciudad);
    }
}

for (let color of colors){
    console.log(color);
}



