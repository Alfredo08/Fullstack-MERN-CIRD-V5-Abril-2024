const ControladorHobby = require('./../controladores/controladorHobbies');
const validarToken = require('./../middlewares/validarToken');

module.exports = (app) => {
    app.post('/api/agregar/hobby', validarToken, ControladorHobby.agregarHobby);
    app.get('/api/hobbies', validarToken, ControladorHobby.todosLosHobbies);
    app.delete('/api/eliminar/hobby/:nombre', validarToken, ControladorHobby.eliminarHobby);
    app.put('/api/actualizar/hobby', validarToken, ControladorHobby.actualizarHobby);
}