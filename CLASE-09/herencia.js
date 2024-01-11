class vehicle {
  constructor(mark,price,model) {
    this.mark = mark;
    this.price = price;
    this.model = model;
  }
  cargar() {
    console.log("Vehiculo cargando ");
  }
  mostrar() {
    console.log(`La marca de los vehiculo es ${this.mark}
    su precio es ${this.price}, su modelo es ${this.model}`);    
  }
}
class automovil extends vehicle {
  cargar() {
    console.log("Vehiculo cargando familia");
  }
  mostrar() {
    console.log(`La marca del auto es ${this.mark}
    su precio es ${this.price}, su modelo es ${this.model}`);    
  }  
}

const vehicle1 = new vehicle("Audi", 5000, 2024);
const auto1 = new automovil("Ferrari", 10000, 2025);
vehicle1.cargar();
auto1.cargar();
vehicle1.mostrar();
auto1.mostrar();




