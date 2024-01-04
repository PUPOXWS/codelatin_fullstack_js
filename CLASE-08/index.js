// let name= "Jose";
// let salary= 1000;

// function getdata(){
//   viewName();
//   viewSalary();
// }

// function viewName(){
//   console.log(`Bienvenido ${name}`);
// }

// function viewSalary(){
//   console.log(`Your salary is: ${salary}`);
// }

// getdata();

// function numberEx(num1){
//   function numberIn(num2){
//     return num1 * num2;
//   }
//   return numberIn;
// }

// const result = numberEx(4);
// console.log(result(6));

// function contador() {
//   let contar = 0;
//   function increment() {
//     contar++;
//     console.log(`El contador: ${contar}`);
//   }
//   return increment;
// }

// const contador1 = contador();
// contador1();
// contador1();
// const contador2 = contador();
// contador2();

// const numbers = [2,4,6,8,10,12];
// const cuadrados = numbers.map(function(numero){
//   return numero * numero;
// });
// console.log(cuadrados);

// const names = ["jose","andres","natalia","daniela"];
// const namesmayusc = names.map(function(nmayus){
//   return nmayus.toUpperCase();
// });
// console.log(namesmayusc);

//Nombre producto y precio
const store = new Map([
  ["leche",3000],
  ["arroz",4000],
  ["fruta",5000],
  ["atun",6000],
]);
store.set("mantequilla", 4500);
let price = 0;
price+=store.get("mantequilla");
console.log(`El precio de la mantequilla es ${price}`);
store.forEach((val, key) => console.log(`${key} $${val}`));
console.log(store.get("arroz"));



