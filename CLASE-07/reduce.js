let prices = [200,500,1000,5000];
let total = prices.reduce(totalPrice);

function totalPrice(price,total) {
    return price + total;
}

console.log(total);

const numbers = [1,2,3,4,5,6,7];

const suma = numbers.reduce(function (acumulate,number){
    return acumulate + number;
})

console.log(suma);