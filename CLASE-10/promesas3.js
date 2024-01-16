let promesa1 = new Promise((resolve) => setTimeout(() => resolve(`Mi promesa 1`), 3000));
let promesa2 = new Promise((resolve) => setTimeout(() => resolve(`Mi promesa 2`), 1000));

Promise.all([promesa1, promesa2])
  .then((resultado) => {
    console.log("Se han completado las promesas " + resultado);
  })
  .catch((err) => {
    console.error(err);
  });
