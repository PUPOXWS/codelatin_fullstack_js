function multiplicar(num) {
  return new Promise((resolve, reject) => {
    if (typeof num === "number") {
      resolve(num * 3);
    } else {
      reject("El parametro no es un numero");
    }
  });
}
multiplicar(10)
  .then((resultado) => {
    console.log(`El resultado es : ${resultado}`);
  })
  .catch((err) => {
    console.error(err);
  });
