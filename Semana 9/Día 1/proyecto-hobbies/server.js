const express = require('express');
const hobbies = require('./hobbies');
const app = express();

/*
// Middleware
const despliegaHola = (req, res, next) => {
    console.log("Hola desde el primer 'middleware'.");
    next();
}

app.use(despliegaHola);
*/

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// http://localhost:8080/api/hobbies
app.get('/api/hobbies', (req, res) => {
    return res.status(200).json(hobbies);
});

// http://localhost:8080/api/hobby?id=123
app.get('/api/hobby', (req, res) => {
    const id = Number(req.query.id);

    const hobbyEncontrado = hobbies.find((hobby) => hobby.id === id);

    if(hobbyEncontrado){
        return res.status(200).json(hobbyEncontrado);
    }
    res.statusMessage = 'Este id no existe en nuestra lista de hobbies';
    return res.status(404).json({mensaje: 'Este id no existe en nuestra lista de hobbies'});
});

// http://localhost:8080/api/hobby/123
app.get('/api/hobby/:id', (req, res) => {
    const id = Number(req.params.id);

    const hobbyEncontrado = hobbies.find((hobby) => hobby.id === id);

    if(hobbyEncontrado){ 
        return res.status(200).json(hobbyEncontrado);
    }
    res.statusMessage = 'Este id no existe en nuestra lista de hobbies';
    return res.status(404).json({mensaje: 'Este id no existe en nuestra lista de hobbies'});
});

// http://localhost:8080/api/crear/hobby
app.post('/api/crear/hobby', (req, res) => {
    const {id, nombre} = req.body;

    const nuevoHobby = {
        id, nombre
    };

    // Validar que los datos existan 
    if(! id || ! nombre){  // id === undefined || nombre === undefined
        res.statusMessage = "Por favor proporciona ambos 'id' y 'nombre'";
        return res.status(406).json({mensaje: "Por favor proporciona ambos 'id' y 'nombre'"});
    }

    // Validar que el 'id' sea único
    const hobbyEncontrado = hobbies.find((hobby) => hobby.id === id);
    if(hobbyEncontrado){
        res.statusMessage = "El 'id' ya se encuentra en nuestra lista, seleccionar otro.";
        return res.status(406).json({mensaje: "El 'id' ya se encuentra en nuestra lista, seleccionar otro."});
    }

    hobbies.push(nuevoHobby);

    return res.status(201).json(nuevoHobby);
});

// http://localhost:8080/api/actualizar/hobby/123
app.put('/api/actualizar/hobby/:id', (req, res) => {
    const id = Number(req.params.id);
    const nombre = req.body.nombre;

    const indice = hobbies.findIndex((hobby) => hobby.id === id);

    if(indice === -1){
        res.statusMessage = 'Este id no existe en nuestra lista de hobbies';
        return res.status(404).json({mensaje: 'Este id no existe en nuestra lista de hobbies'});
    }

    if(! nombre){
        res.statusMessage = 'Por favor proporciona el nuevo nombre.';
        return res.status(406).json({mensaje: 'Por favor proporciona el nuevo nombre.'});
    }

    hobbies[indice].nombre = nombre;

    return res.status(200).json(hobbies[indice]);
});

// http://localhost:8080/api/eliminar/hobby/123
app.delete('/api/eliminar/hobby/:id', (req, res) => {
    const id = Number(req.params.id);

    const indice = hobbies.findIndex((hobby) => hobby.id === id);

    if(indice === -1){
        res.statusMessage = 'Este id no existe en nuestra lista de hobbies';
        return res.status(404).json({mensaje: 'Este id no existe en nuestra lista de hobbies'});
    }

    hobbies.splice(indice, 1);

    return res.status(204).end();

});

// http://localhost:8080/
app.listen(8080, () => {
    console.log("Este servidor está encendido en el puerto 8080.");
});