const ControladorUsuario = require('./../controladores/controladorUsuario');

module.exports = (app) => {
    app.get('/api/usuarios', ControladorUsuario.todosLosUsuarios);
    app.post('/api/agregar/usuario', ControladorUsuario.agregarUsuario);
    app.delete('/api/remover/usuario', ControladorUsuario.removerUsuario);
    app.put('/api/actualizar/usuario/:correo', ControladorUsuario.actualizarUsuario);
    app.put('/api/usuario/agregarHobby/:nombreHobby', ControladorUsuario.agregarHobby);
    app.post('/api/usuario/login', ControladorUsuario.login);
}