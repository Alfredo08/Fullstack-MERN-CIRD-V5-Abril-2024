const { request } = require('express');
const bcrypt = require('bcrypt');
const HASH_SALT = 10;
const saltGenerado = bcrypt.genSaltSync(HASH_SALT);
const Usuario = require('./../modelos/modeloUsuario');
const {Hobby} = require('./../modelos/modeloHobbies');
const jwt = require('jsonwebtoken');

const SECRETO = "secreto";

module.exports.todosLosUsuarios = (req, res) => {
    console.log(req.infoUsuario);
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
        contraseña: bcrypt.hashSync(req.body.contraseña, saltGenerado)
    };

    // Falta validar los campos a agregar

    return Usuario.create(usuarioNuevo)
        .then((usuarioConId) => {
            
            const infoEnToken = {
                nombre: usuarioConId.nombre,
                apellido: usuarioConId.apellido,
                correo: usuarioConId.correo
            }

            jwt.sign(infoEnToken, SECRETO, {expiresIn: "15m"}, (error, token) => {
                if(error){
                    return res.status(400).json({mensaje: "Algo falló al generar el token"});
                }
                return res.status(201).json({token});
            });
        })
        .catch((error) => {
            return res.status(500).json({mensaje: 'Algo salió mal', error})
        });
}

module.exports.removerUsuario = (req, res) => {
    return Usuario.deleteOne({correo: req.infoUsuario.correo})
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

    return Usuario.updateOne({correo: req.infoUsuario.correo}, camposParaActualizar, {new: true})
        .then((usuarioActualizado) => {
            return res.status(200).json(usuarioActualizado);
        });
}

module.exports.agregarHobby = (req, res) => {
    const nombreHobby = req.params.nombreHobby;

    Hobby.findOne({nombre: nombreHobby})
        .then((hobbyEncontrado) => {
            Usuario.findOneAndUpdate({correo: req.body.correo}, {$push: {listaHobbies: hobbyEncontrado}}, {new: true})
                .then((usuarioActualizado) => {
                        return res.status(200).json(usuarioActualizado);
                });
        });
}

module.exports.login = (req, res) => {
    const {correo, contraseña} = req.body;

    Usuario.findOne({correo})
        .then((usuarioEncontrado) => {
            if(!usuarioEncontrado){
                return res.status(404).json({mensaje: "Usuario no encontrado."});
            }
            if(!bcrypt.compareSync(contraseña, usuarioEncontrado.contraseña)){
                return res.status(404).json({mensaje: "Credenciales inválidas."});
            }

            const infoEnToken = {
                nombre: usuarioEncontrado.nombre,
                apellido: usuarioEncontrado.apellido,
                correo: usuarioEncontrado.correo
            }

            jwt.sign(infoEnToken, SECRETO, {expiresIn: "15m"}, (error, token) => {
                if(error){
                    return res.status(400).json({mensaje: "Algo falló al generar el token"});
                }
                return res.status(200).json({token});
            });
        });
}