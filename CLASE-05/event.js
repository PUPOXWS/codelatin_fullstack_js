let text = document.querySelector("h1");
let caja = document.querySelector("div");

caja.addEventListener("mouseover", function() {
    text.innerHTML = "Mouse over of size";
    caja.style.background="blue";
});

caja.addEventListener("mouseout", function() {
    text.innerHTML = "Mouse out of size";
    caja.style.background="yellow";
});

text.addEventListener("mouseover", function() {
    text.innerHTML = "Mouse over text";
});