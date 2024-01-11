class calculadora {
  static version = "2.0";
  static sumar(num1,num2){
    return num1 + num2;
  }
  static multiplicacion(num1,num2){
    return num1 * num2;
  } 

}
console.log(calculadora.version);
console.log(calculadora.sumar(20,2));
console.log(calculadora.multiplicacion(3,8));
