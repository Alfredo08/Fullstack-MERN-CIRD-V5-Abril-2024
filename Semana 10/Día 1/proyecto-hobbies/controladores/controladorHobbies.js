const {Hobby} = require('./../modelos/modeloHobbies');

module.exports.agregarHobby = (req, res) => {
    const nombre = req.body.nombre;
    
    if(!nombre || nombre === ""){
        return res.status(406).json({mensaje: "El campo de 'nombre' es mandatorio."});
    } 
    
    const hobbyNuevo = {
        nombre: req.body.nombre
    };

    return Hobby.create(hobbyNuevo)
        .then((hobbyConId) => {
            return res.status(201).json(hobbyConId);
        })
        .catch((error) => {
            return res.status(406).json(error);
        });
} 
