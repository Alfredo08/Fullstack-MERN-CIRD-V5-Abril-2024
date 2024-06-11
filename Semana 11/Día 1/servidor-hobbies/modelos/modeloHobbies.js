const mongoose = require('mongoose');

const ColeccionHobbies = mongoose.Schema({
    nombre: {
        type: String,
        required: [true, "Por favor proporciona tu nombre."]
    }
});

const Hobby = mongoose.model('hobbies', ColeccionHobbies);

module.exports = {
    Hobby,
    ColeccionHobbies
}