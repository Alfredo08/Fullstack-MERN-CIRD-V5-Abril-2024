const {Hobby} = require('./../modelos/modeloHobbies');

module.exports.agregarHobby = (req, res) => {
    const nombre = req.body.nombre;
    
    if(!nombre || nombre === ""){
        res.statusMessage = "El campo de 'nombre' es mandatorio.";
        return res.status(406).json({mensaje: "El campo de 'nombre' es mandatorio!!!!!!"});
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


module.exports.todosLosHobbies = (req, res) => {
    return Hobby.find()
            .then((listaHobbies) => {
                return res.status(200).json(listaHobbies);
            })
            .catch((error) => {
                return res.status(406).json(error);
            });
}