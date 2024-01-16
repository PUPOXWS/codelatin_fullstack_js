let promesa = new Promise((solucionar, fracasar) => {
  setTimeout(() => {
    let resolver = true;
    if (resolver) {
      solucionar("Se ha cumplido la promesa");
    } else {
      fracasar("No se cumplido la promesa");
    }
  }, 4000);
});
promesa
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((err) => {
    console.error(err);
  });
