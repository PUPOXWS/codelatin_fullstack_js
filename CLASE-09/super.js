class vehicle {
  constructor(mark, price) {
    this.mark = mark;
    this.price = price;
  }
  showinfo() {
    console.log(`La marca del vehiculo es: ${this.mark}, el precio es 
        ${this.price}`);
  }
}
class auto extends vehicle {
  constructor(mark, price, color) {
    super(mark, price);
    this.color = color;
  }
  showinfo() {
    super.showinfo();
    console.log(`El color del vehiculo: ${this.color}`);
  }
}
const vehicle1 = new vehicle("Lamborgini",15000,"red");
vehicle1.showinfo();
