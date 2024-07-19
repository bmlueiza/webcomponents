//Guía javascript
//https://righteous-baron-17e.notion.site/Gu-a-repaso-JS-022a248f68e44a509e55215c125c6be4

//Ejercicio 1
console.log("- Ejercicio 1");
let x = 2 + 2 + "2";
console.log(`x=${x}`);
console.log(typeof x);
//Resultado: x=42
//Explicación: primero se suman los números, luego se concatena el resultado con el string "2"

//Ejercicio 2
console.log("- Ejercicio 2");
let suma = 5 + 3;
let resta = 10 - 4;
let multiplicacion = 6 * 7;
let divisor = 30 / 5;
console.log(
  `suma=${suma}`,
  `resta=${resta}`,
  `multiplicacion=${multiplicacion}`,
  `divisor=${divisor}`
);
//Resultado: suma=8 resta=6 multiplicacion=42 divisor=6

//Ejercicio 3
console.log("- Ejercicio 3");
let nombre = "Juan";
let apellido = "Pérez";
let nombreCompleto = nombre + " " + apellido;
console.log(`nombreCompleto=${nombreCompleto}`);
//Resultado: nombreCompleto=Juan Pérez
//Explicación: se concatenan las variables nombre y apellido con un espacio en blanco

//Ejercicio 4
console.log("- Ejercicio 4");
let esMayor = 10 > 5;
let esIgual = "ABC" === "abc";
let esDiferente = 5 !== 7;
console.log(
  `esMayor=${esMayor}`,
  `esIgual=${esIgual}`,
  `esDiferente=${esDiferente}`
);
//Resultado: esMayor=true esIgual=false esDiferente=true

//Ejercicio 5 par o impar
console.log("- Ejercicio 5");
let numero = 8;
if (numero % 2 === 0) {
  console.log("El número es par");
} else {
  console.log("El número es impar");
}
//Resultado: El número es par

//Ejercicio 6
console.log("- Ejercicio 6");
let persona = {
  nombre: "Maria",
  edad: 25,
  ciudad: "Madrid",
};
//persona es un objeto con tres propiedades: nombre, edad y ciudad
//typeof devuelve el tipo de dato de una variable
console.log("typeof libro:", typeof libro);
//Esto retorna "undefined" porque la libro no está definido

//Ejercicio 7
console.log("- Ejercicio 7");
function calcularAreaTriangulo(base, altura) {
  return (base * altura) / 2;
}
let areaTriangulo = calcularAreaTriangulo(6, 4);
console.log(`areaTriangulo=${areaTriangulo}`);
//Resultado: areaTriangulo=12

//Ejercicio 8
console.log("- Ejercicio 8");
function comparar(test1, test2) {
  return test1 == test2;
}
console.log("comparacion:", comparar(2020, "2020"));

//Ejercicio 9
console.log("- Ejercicio 9");
let frase = "Hola, mundo!";
let longitud = frase.length;
let mayuculas = frase.toUpperCase();
console.log("Longitud:", longitud, "Mayúscula:", mayuculas);
//Resultado: Longitud: 11 Mayúscula: HOLA, MUNDO!
//length devuelve la longitud de una cadena de texto
//toUpperCase convierte una cadena de texto a mayúsculas

//Ejercicio 10
console.log("- Ejercicio 10");
let colores = ["verde", "azul", "rojo"];
colores.unshift("amarillo", "naranja");
//unshift() añade uno o más elementos al inicio de un array y devuelve la nueva longitud del array.
//En este caso se añaden los elementos "amarillo" y "naranja" al inicio del array colores
//colores.unshift("amarillo", "naranja") => modifica el array colores y retorna 5
console.log(colores);
//Resultado: ["amarillo", "naranja", "verde", "azul", "rojo"]

//Ejercicio 11
console.log("- Ejercicio 11");
const numeros = [1, 2, 3, 4, 5, 6, 7];
const myFunction = (arr) => {
  return arr.map((x) => x + 2).filter((x) => x < 5);
  //map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
  //filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
  //arr.map((x) => x + 2) => [3, 4, 5, 6, 7, 8, 9]
  //arr.filter((x) => x < 5) => [3, 4]
};
console.log(myFunction(numeros));

//Ejercicio 12 refactorizar código
console.log("- Ejercicio 12");
let cadena = "Hola Cohorte Java";
let caracter = "v";
//Código original. Cuenta cuántas veces aparece el caracter en la cadena
function enumerar(cadena, caracter) {
  let contador = 0;
  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] === caracter) {
      contador++;
    }
  }
  return contador;
}
console.log("resultado código original:", enumerar(cadena, caracter));
//Refactorizado
function enumerar2(cadena, caracter) {
  console.log(cadena.split(caracter));
  return cadena.split(caracter).length - 1; //el -1 es para que no cuente el último caracter
}
console.log("resultado código refactorizado:", enumerar2(cadena, caracter));
//Ejemplo con "Hola Cohorte Java" y "a"
//"Hola Cohorte Java".split("a") => ["Hol", " Cohorte J", "v", ""]
//"Hola Cohorte Java".split("a").length => 4
//"Hola Cohorte Java".split("a").length - 1 => 3

//Ejemplo con "Hola Cohorte Java" y "v"
//"Hola Cohorte Java".split("v") => ["Hola Cohorte Ja", "a"]
//"Hola Cohorte Java".split("v").length => 2
//"Hola Cohorte Java".split("v").length - 1 => 1

//Ejercicio 13
console.log("- Ejercicio 13");
function esPalindromo(palabra) {
  const palabraAlReves = palabra.split("").reverse().join("");
  return palabra === palabraAlReves ? true : false;
}
//split() divide un objeto de tipo String en un array (vector) de cadenas mediante la separación de la cadena en subcadenas.
//reverse() invierte el orden de los elementos de un array.
//join() une todos los elementos de una matriz (o un objeto similar a una matriz) en una cadena y devuelve esta cadena.
//split("").reverse().join("") explicación: se divide la palabra en letras, se invierte el orden de las letras y se unen nuevamente.
console.log("esPalindromo('reconocer'):", esPalindromo("reconocer")); //true
console.log("esPalindromo('oso'):", esPalindromo("oso")); //true
console.log(
  "esPalindromo('anita lava la tina'):",
  esPalindromo("anita lava la tina")
); //false
console.log("esPalindromo('hola'):", esPalindromo("hola")); //false
//hola.split("") => ["h", "o", "l", "a"]
//hola.split("").reverse() => ["a", "l", "o", "h"]
//hola.split("").reverse().join("") => "aloh"
