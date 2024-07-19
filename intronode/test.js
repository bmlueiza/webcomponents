//Pregunta 1
console.log("- Pregunta 1");
//En el siguiente código encontrarás una función llamada "calcularFactorial" que toma como parámetro un número para después calcular su factorial. Por ejemplo, si el número es 4, el factorial es 1*2*3*4=24. ¿Cuál de las siguientes opciones representa la  refactorización de dicha función?
function calcularFactorial(numero) {
  let factorial = 1;
  for (let i = 1; i <= numero; i++) {
    factorial *= i;
  }
  return factorial;
}
//Respuesta: return(num === 0) ? 1 : num * calcularFactorial(num - 1);

//Pregunta 2
console.log("");
console.log("- Pregunta 2");
//¿Cuál es la salida en consola del siguiente código?
const myNumbers = [1, 2, 3, 4, 5, 6, 7];
const myFunction = (arr) => {
  return arr.map((x) => x + 3).filter((x) => x < 7);
};
console.log(myFunction(myNumbers));
//Resultado: [4, 5, 6]

//Pregunta 3
console.log("");
console.log("- Pregunta 3");
//¿Cuál es la salida en consola del siguiente código?
let x = 6 + 3 + "3";
console.log(x);
//Resultado: '93'
//typeof x: string

// Pregunta 4
console.log("");
console.log("- Pregunta 4");
//¿Qué JSON devuelve el siguiente código?
var miUsuario = {
  nombre: "Laura",
  edad: 27,
  ciudad: "Madrid",
};
var miJson = JSON.stringify(miUsuario);
console.log(miJson);
//Resultado: {"nombre":"Laura","edad":27,"ciudad":"Madrid"}
//Explicación: JSON.stringify convierte un objeto en un string JSON
console.log("typeof miJson:", typeof miJson);

//Pregunta 5
console.log("");
console.log("- Pregunta 5");
//¿Cuál es la salida del siguiente código?
const ejemploPromesa = () => Promise.resolve("A");

//Primera función que imprime "B" y luego el resultado de la promesa, que es "A"
function primeraFuncion() {
  ejemploPromesa().then((resultado) => console.log(resultado));
  console.log("B");
}

//Segunda función que imprime el resultado de la promesa, que es "A" y luego "B"
async function segundaFuncion() {
  console.log(await ejemploPromesa());
  console.log("B");
}
primeraFuncion();
segundaFuncion();

//Pregunta 6
console.log("");
console.log("- Pregunta 6");
//Elige la explicación más adecuada de la siguiente función para saber si una palabra es o no un palíndromo (una palabra que se puede leer igual de izquierda a derecha que de derecha a izquierda):
function palindromo(string) {
  const stringReversed = string.split("").reverse().join("");
  return stringReversed === string ? "Es palíndromo" : "No es palíndromo";
}
console.log(palindromo("radar")); //Es palíndromo
console.log(palindromo("Generation")); //No es palíndromo
console.log(palindromo("12345")); //No es palíndromo
//Respuesta: Separamos la cadena que pasamos por parámetro con un método "split", para después revertirlo con el método "reverse" y convertirlo nuevamente en un string con el método "join". Todo esto se almacena en una constante llamada "stringReversed

//Pregunta 7
console.log("");
console.log("- Pregunta 7");
//El siguiente código está incompleto, elige la opción correcta para mostrar en consola el resultado "true":
var comparar = function (test1, test2) {
  //código faltante
};
console.log(comparar(1078, "1078")); //muestra true
//Respuesta: return test1 == test2;

//Pregunta 8
console.log("");
console.log("- Pregunta 8");
//Explica el funcionamiento de animales.unshift("lagarto"); del siguiente código:
const animales = ["conejo", "perro", "gato"];
animales.unshift("lagarto");
//Respuesta: unshift añade un elemento al principio del array, por lo que el array animales quedará ["lagarto", "conejo", "perro", "gato"]
console.log(animales); //["lagarto", "conejo", "perro", "gato"]

//Pregunta 9
console.log("");
console.log("- Pregunta 9");
//La siguiente función permite calcular la cantidad de caracteres que se repiten en una cadena de texto. Para este ejemplo, en la palabra "parangaricutirimicuaro" la letra "i" se repite 4 veces. ¿Cuál de las siguientes opciones representa la refactorización de dicha función?
let cadena = "parangaricutirimicuaro";
let caracter = "i";

function enumerar(cadena, caracter) {
  let contador = 0;
  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] === caracter) {
      contador++;
    }
  }
  return contador;
}
console.log(enumerar(cadena, caracter));
//Respuesta enumerar = (cadena, caracter) => cadena.split(caracter).length - 1;

//Pregunta 10
console.log("");
console.log("- Pregunta 10");
//¿Qué devolvería la sentencia "typeof libro"?
var libro = {
  titulo: "El señor de los anillos",
  autor: "J.R.R. Tolkien",
  informacion: function () {
    return this.titulo + " fue escrito por " + this.autor;
  },
};
console.log(libro.informacion());
//Resultado: El señor de los anillos fue escrito por J.R.R. Tolkien
console.log("typeof libro:", typeof libro);
//Respuesta: typeof libro: object
