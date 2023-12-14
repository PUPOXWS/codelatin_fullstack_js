// const greet = function(){
//     console.log("Hello world!");
// }
// greet();

let contador = 0;

// function increment() {
//   contador += 1;
//   document.getElementById("milabel").innerHTML = contador;
// }

// function decrement() {
//   contador -= 1;
//   document.getElementById("milabel").innerHTML = contador;
// }

document.getElementById("btnincrementar").onclick = function(){
    contador += 1;
    document.getElementById("milabel").innerHTML = contador;
}

document.getElementById("btndecrementar").onclick = function(){
    contador -= 1;
    document.getElementById("milabel").innerHTML = contador;
}


