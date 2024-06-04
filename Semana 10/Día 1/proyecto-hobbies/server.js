const express = require('express');
const RutasUsuario = require('./rutas/rutasUsuario');
const RutasHobby = require('./rutas/rutasHobby');
const app = express();

require('./configuracion/baseDatos');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

RutasUsuario(app);
RutasHobby(app);

// http://localhost:8080/
app.listen(8080, () => {
    console.log("Este servidor está encendido en el puerto 8080.");
});