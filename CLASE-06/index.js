let paises = ["Colombia","Argentina","Peru","Ecuador"];
paises[2] = "Chile";
paises.push("Brasil");//Agregar elemento en la ultima posicion
paises.pop();//Elimina el ultimo elemento
paises.push("Brasil");
paises.unshift("Bolivia");//Agregar un elemento como primero
// paises.shift();//Elimina el primer elemento
console.log(paises);

let longth = paises.length;
console.log(longth);
let indice = paises.indexOf("Bolivia");
console.log(indice);

