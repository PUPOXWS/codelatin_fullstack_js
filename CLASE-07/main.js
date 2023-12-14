let numbers = [1, 2, 3, 4, 5];
let cuadrado= numbers.map(potencia);
cuadrado.forEach(mostrar);
function potencia(elements) {
    return Math.pow(elements,3);    
}

function mostrar(elements) {
    console.log(elements);
}


