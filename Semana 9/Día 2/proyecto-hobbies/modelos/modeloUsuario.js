const mongoose = require('mongoose');

const ColeccionUsuario = mongoose.Schema({
    nombre: {
        type: String
    },
    apellido: {
        type: String
    },
    edad: {
        type: Number
    },
    correo: {
        type: String
    },
    contraseña: {
        type: String
    }
});

const Usuario = mongoose.model('usuarios', ColeccionUsuario);

module.exports = Usuario;
