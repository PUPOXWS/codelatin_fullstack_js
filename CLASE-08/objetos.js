const employee = {
  name: "John",
  ocupation: "Developer",
  age: 30,
  viajar: function () {
    console.log(`${this.name} Esta viajando por trabajo`);
  },
  trabajar: function () {
    console.log(`${employee.name} esta trabajando en oficina`);
  },
};
console.log(employee.name);
console.log(employee.ocupation);
console.log(employee.age);
employee.trabajar();
employee.viajar();
