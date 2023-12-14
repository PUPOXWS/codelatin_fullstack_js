// const saludo = function (name){
//     console.log(name);
// }


const saludo = (name) => console.log(`Bienvenido ${name}`);
saludo("Codelatin");

const porcentaje = function (num1,num2) {
    return num1 /num2*100;
}

const porcent = (num1,num2) => num1 / num2 * 100; 
console.log(`El porcentaje es ${porcentaje(80,100)} %`);

let numbers = [100,200,300,80,60,13];

// numbers.sort((n1,n2)=>n2-n1);
// numbers.forEach((numero)=>console.log(numero));

const ordenar = numbers.sort(function (n1,n2){
    return n1-n2;
});

console.log(`Con funcion tradicional: ${ordenar}`);

