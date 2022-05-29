const express = require("express");
require("dotenv").config();

//Crear el servidor de express
const app = express();


//Directorio público
app.use( express.static('public') );

//Lectura y parseo del body
app.use( express.json() ); //Las peticiones JSON se van a procesar aquí y extraer su contenido


//Rutas
//Todo lo que la ruta especificada vaya a exportar va a ser habilitada en esa URL.
app.use('/api/auth', require("./routes/auth"));


//Escuchar las peticiones
app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
});