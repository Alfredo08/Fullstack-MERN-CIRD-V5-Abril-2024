const ControladorUsuario = require('./../controladores/controladorUsuario');
const validarToken = require('./../middlewares/validarToken');

module.exports = (app) => {
    app.get('/api/usuarios', validarToken, ControladorUsuario.todosLosUsuarios);
    app.post('/api/agregar/usuario', ControladorUsuario.agregarUsuario);
    app.delete('/api/remover/usuario', validarToken, ControladorUsuario.removerUsuario);
    app.put('/api/actualizar/usuario', validarToken, ControladorUsuario.actualizarUsuario);
    app.put('/api/usuario/agregarHobby/:nombreHobby', validarToken, ControladorUsuario.agregarHobby);
    app.post('/api/usuario/login', ControladorUsuario.login);
}