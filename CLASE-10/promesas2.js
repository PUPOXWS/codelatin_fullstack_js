function procedimiento1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Procedimiento completado");
      resolve(1);
    }, 2000);
  });
}

function procedimiento2(resultadoproced1) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Procedimiento 2 completado", resultadoproced1);
      resolve(5);
    }, 2000);
  });
}
procedimiento1()
  .then((resultado) => procedimiento2(resultado))
  .then((resultadofinal) => {
    console.log(`El resultado final es : ${resultadofinal}`);
  });
