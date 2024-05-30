const { request } = require('express');
const Usuario = require('./../modelos/modeloUsuario');

module.exports.todosLosUsuarios = (req, res) => {
    return Usuario.find()
        .then((usuarios) => {
            return res.status(200).json(usuarios);
        })
        .catch((error) => {
            return res.status(500).json({mensaje: 'Algo salió mal', error})
        });
}

module.exports.agregarUsuario = (req, res) => {
    const usuarioNuevo = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        edad: req.body.edad,
        correo: req.body.correo,
        contraseña: req.body.contraseña
    };

    // Falta validar los campos a agregar

    return Usuario.create(usuarioNuevo)
        .then((usuarioConId) => {
            return res.status(201).json(usuarioConId);
        })
        .catch((error) => {
            return res.status(500).json({mensaje: 'Algo salió mal', error})
        });
}

module.exports.removerUsuario = (req, res) => {
    return Usuario.deleteOne({correo: req.body.correo})
        .then((usuarioRemovido) => {
            console.log(usuarioRemovido);
            return res.status(204).end();
        })
        .catch((error) => {
            return res.status(500).json({mensaje: 'Algo salió mal', error})
        });
}

module.exports.actualizarUsuario = (req, res) => {
    const camposParaActualizar = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        edad: req.body.edad,
        constraseña: req.body.contraseña
    }

    // Falta agregar validaciones para actualizar

    return Usuario.updateOne({correo: req.params.correo}, camposParaActualizar, {new: true})
        .then((usuarioActualizado) => {
            return res.status(200).json(usuarioActualizado);
        });
}