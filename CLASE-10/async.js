async function ejemplo() {
  console.log("Ejemplo asincronico");
  await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log("3 segundos despues");
}
ejemplo();
