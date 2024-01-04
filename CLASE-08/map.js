// const personas = [
//     { name: "Mafe", age: 23},
//     { name: "Natali", age: 30},
//     { name: "Antonella", age: 15},
//     { name: "David", age: 12},
// ];

// const adults = personas
//     .filter((person)=>person.age<18)
//     .map(({name})=>name);
// console.log(adults);

//validar fechas
const dates = ["2024-01-03", "2024-01-02", "2024-01-01"];
const formart = dates.map((datetostring) => {
    const date = new Date(datetostring);
    return `${date.toLocaleDateString("en-US")} 
    ${date.toLocaleTimeString()}`;
});
console.log(formart);
