//Estaciones
// let select = document.querySelector("select");
// let text = document.querySelector("h1");

// select.addEventListener("change", weather);

// function weather(){
//     let selected = select.value;

//     if(selected === "verano"){
//         text.textContent = "Dia soleado";
//     }else if(selected === "otonio"){
//         text.textContent = "Dia nublado";
//     }else if(selected === "invierno"){
//         text.textContent = "Dia frio";
//     }else if(selected === "primavera"){
//         text.textContent = "Dia caluroso";
//     }
// }

//Color fondo
let select = document.querySelector("select");
let body = document.querySelector("body");

select.addEventListener("change", color);

function color() {
  let selected = select.value;
  body.style.backgroundColor = selected;
}
