const ControladorHobby = require('./../controladores/controladorHobbies');

module.exports = (app) => {
    app.post('/api/agregar/hobby', ControladorHobby.agregarHobby);
}