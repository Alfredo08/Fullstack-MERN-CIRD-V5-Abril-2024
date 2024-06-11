const express = require('express');
const cors = require('cors');
const RutasUsuario = require('./rutas/rutasUsuario');
const RutasHobby = require('./rutas/rutasHobby');
const app = express();

require('./configuracion/baseDatos');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
    origin: "http://localhost:3000"
}));

RutasUsuario(app);
RutasHobby(app);

// http://localhost:8080/
app.listen(8080, () => {
    console.log("Este servidor está encendido en el puerto 8080.");
});