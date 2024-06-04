const mongoose = require('mongoose');
const {ColeccionHobbies} = require('./modeloHobbies');

const ColeccionUsuario = mongoose.Schema({
    nombre: {
        type: String,
        required: [true, "Por favor proporciona tu nombre."]
    },
    apellido: {
        type: String,
        required: true
    },
    edad: {
        type: Number,
        default: 0
    },
    correo: {
        type: String,
        required: true,
        unique: true
    },
    contraseña: {
        type: String,
        required: true
    },
    listaHobbies: [ColeccionHobbies]
});

const Usuario = mongoose.model('usuarios', ColeccionUsuario);

module.exports = Usuario;
