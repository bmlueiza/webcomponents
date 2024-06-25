//Paso 1: Crear archivo app.js

//Paso 2: Verificar tener instalado npm
//npm -v

//Paso 3: Instalar express
//npm install express

//node_modules es un directorio que contiene todas las dependencias del proyecto. Cuando instalamos un paquete npm, se descarga e instala en el directorio node_modules.
//package-lock.json es un archivo que contiene información sobre las versiones específicas de las dependencias del proyecto. Este archivo se utiliza para garantizar que las versiones de las dependencias sean consistentes en diferentes entornos.
//package.json es un archivo que contiene información sobre el proyecto y las dependencias del proyecto.

//Paso 4: Importar módulo express

//express es un marco de aplicación web para Node.js que simplifica el desarrollo de aplicaciones web.
//require("express") importa el módulo express en el archivo app.js.
const express = require("express");

//Paso 5: Crear una instancia de la aplicación express

//express() crea una instancia de la aplicación express.
//app es un objeto que representa la aplicación express y se utiliza para configurar la aplicación y definir rutas.
const app = express();

//Paso 6: Crear una ruta

//get es un método de la aplicación express que se utiliza para definir una ruta HTTP GET.
//"/" es la ruta raíz de la aplicación.
//req es un objeto que representa la solicitud HTTP y res es un objeto que se utiliza para enviar una respuesta HTTP.
//send envía una respuesta HTTP con el contenido "Hello World! From Express". Esto finaliza la respuesta y envía la respuesta al cliente.
app.get("/", (req, res) => {
  res.send("Hello World! From Express");
});

//Paso 7: Iniciar el servidor

//listen es un método de la aplicación express que inicia el servidor y lo hace escuchar en un puerto específico.
//listen toma dos argumentos: el número de puerto en el que se escuchará y una función de devolución de llamada que se ejecutará una vez que el servidor esté escuchando.
app.listen(3000, () => {
  console.log("Server is running on port 3000");
  console.log("http://localhost:3000}");
});

//Paso 8: Ejecutar la aplicación
//node app.js