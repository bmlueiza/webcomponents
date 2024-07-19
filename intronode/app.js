//Introductión a Node.js
//https://righteous-baron-17e.notion.site/Introducci-n-a-Node-js-bc1e941d047445be882aefbadfa0293e
//Node.js es un entorno de ejecución para JavaScript del lado del servidor.
//Permite ejecutar JavaScript en el servidor.

console.log("Hello World!");
//ejecutar con node app.js

//para que se ejecute automaticamente al guardar
//node --watch app.js

//Asincronía

//() => {} es una función flecha que no recibe argumentos y no hace nada.
//Promise.resolve() crea una promesa que se resuelve con el valor que le pasemos.
//() => Promise.resolve("Promesa resuelta") es una función flecha que no recibe argumentos y devuelve una promesa resuelta con el string "Promesa resuelta".
const promesa = () => Promise.resolve("Promesa resuelta");

function primeraPromesaFuncion() {
  promesa().then((res) => console.log(res));
}

//async function es una función asíncrona.
//await es un operador que espera a que una promesa se resuelva.
//async function segundaPromesaFuncion() es una función asíncrona que espera a que la promesa se resuelva y luego imprime un mensaje.
async function segundaPromesaFuncion() {
  console.log(await promesa());
  console.log("Segunda promesa resuelta");
}

segundaPromesaFuncion();
primeraPromesaFuncion();
