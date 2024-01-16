async function datos() {
  try {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos/9');
    const misdatos = await respuesta.json();
    console.log(misdatos);
  } catch (e) {
    console.error("Error de conexion ", e);
  }
}
datos();
