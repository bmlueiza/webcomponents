//Paso 1: Crear archivo server.js

//Paso 2: Importar módulo http

//una solicitud HTTP es un mensaje que se envía desde el cliente al servidor para solicitar algún recurso.
//las solicitudes HTTP se manejan a través de eventos, por lo que podemos escuchar eventos en el servidor y responder en consecuencia.

//existen 2 formas de crear un servidor HTTP en Node.js: utilizando el módulo http o utilizando el módulo express.

//require("http") es un módulo de Node.js que nos permite crear un servidor web.
const http = require("http");

//Paso 3: Crear un controlador de eventos para manejar las solicitudes HTTP

//handleRequest es una función que se ejecutará cada vez que se reciba una solicitud HTTP.
//handleRequest sirve como un controlador de eventos para el evento "request".
//handleRequest toma dos argumentos: req y res. req es un objeto que contiene información sobre la solicitud HTTP y res es un objeto que se utiliza para enviar una respuesta HTTP.
function handleRequest(req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" }); //escribe la cabecera de la respuesta HTTP con el código de estado 200 y el tipo de contenido "text/plain". Esto indica que la respuesta es exitosa y que el contenido es texto plano.
  res.end("Hello World! From Node.js"); //envía la respuesta HTTP con el contenido "Hello World!". Esto finaliza la respuesta y envía la respuesta al cliente.
}

//Paso 4: Crear un servidor HTTP

//createServer es una función que crea un servidor HTTP.
//createServer toma un argumento: un controlador de eventos que se ejecutará cada vez que se reciba una solicitud HTTP.
const server = http.createServer(handleRequest);

//Paso 5: Iniciar el servidor

//listen es una función que inicia el servidor y lo hace escuchar en un puerto específico.
//listen toma dos argumentos: el número de puerto en el que se escuchará y una función de devolución de llamada que se ejecutará una vez que el servidor esté escuchando.
server.listen(3000, () => {
  console.log("Server is running on port 3000");
});

//Paso 6: Ejecutar la aplicación
//node server.js
