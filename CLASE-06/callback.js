//Se llama una funcion dentro de otro elemento
suma(10,50,20,web);

// web(totalSuma);

function suma(n1,n2,n3,miresultado){
    let result = n1+n2+n3;
    miresultado (result);
}

function display(salida){
    console.log(salida);
}

function web(salida){
    document.getElementById("resultado").innerHTML = salida;
}
