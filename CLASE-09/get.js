class account {
  constructor(saldoinicial) {
    let saldo = saldoinicial;
    this.getSaldo = () => saldo;
    this.setSaldo = (nuevosaldo) => {
      if (nuevosaldo >= 0) {
        saldo = nuevosaldo;
      } else {
        console.log("El saldo no pude ser negativo");
      }
    };
  }
  consignar(cantidad) {
    this.setSaldo(this.getSaldo() + cantidad);
    console.log(`Has depositado ${cantidad} nuevo saldo ${this.getSaldo()}`);
  }
  retirar(cantidad) {
    const saldoactual = this.getSaldo();
    if (saldoactual >= cantidad) {
      this.setSaldo(saldoactual - cantidad);
      console.log(`Has retirado ${cantidad} nuevo saldo ${this.getSaldo()}`);
    } else {
      console.log("Saldo insuficiente");
    }
  }
}

const account1 = new account(0);
account1.consignar(10000);
account1.retirar(500);
