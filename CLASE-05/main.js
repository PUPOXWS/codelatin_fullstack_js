// let btn = document.querySelector("button");

// function clicked() {
//   alert("Button clicked");
// }

// btn.onclick=clicked;

// let btn = document.querySelector("button");

// btn.onclick= function() {
//     alert("Button pressed");
// }

// let btn = document.querySelector("button");

// btn.addEventListener("click",function() {alert("Clicked"); });

// btn.addEventListener("click", function (event) {
//   event.target.style.background = "green";
//   alert("Clicked");
// });

// let enlace = document.querySelector("a");

// enlace.addEventListener("click", function (event) {
//     // event.preventDefault();
//     alert("Clicked pressed");
// });

let formulario = document.querySelector("form");

formulario.addEventListener("submit", function (event) {
    // event.preventDefault();
    let datosin = document.querySelector("input").value;
    alert(datosin);
});







