// let age = window.prompt("Cual es tu edad?");
// age = Number(age);
// age+=1;
// console.log(age);

//Devolver radio de un circulo
//usar las variables con valores fijos como PI en const
// let PI = 3.1416;
// let radius;
// let circle;

// radius = Number(prompt("Ingrese el radio"));
// circle = 2*PI*radius;
// console.log(circle);

//Calcular valor con Iva
// const iva= 1.16;
// let price= Number(prompt("Ingrese el precio"));

// let result = price*iva;
// console.log("El total es : " + result);

// let number = 4.15;
// let numberOne = 5;
// let numberTwo = 10;
// // number = Math.round(number); //Redondea
// // number = Math.floor(number); //Redonde hacia abajo
// // number = Math.ceil(number);     //Redondea hacia arriba
// // number = Math.pow(number, 2); //Potencia
// // number = Math.abs(number);      //Valor absoluto
// let minNumber = Math.min(numberOne, numberTwo); //
// let maxNumber = Math.max(numberOne, numberTwo); //

// console.log("Number : " + number + " Minimo : " + minNumber + ", Max : " + maxNumber);

// const cateto1 = Number(prompt("Ingrese el numero de cateto 1 :"));
// const cateto2 = Number(prompt("Ingrese el numero de cateto 2 :"));


document.getElementById("enviar").onclick = function() {
    const a = Number(document.getElementById("textCatetoa").value);
    const b = Number(document.getElementById("textCatetob").value);
    const resultado = Math.hypot(a, b);
    console.log(resultado);
    document.getElementById("resultado").innerHTML= resultado;
};









