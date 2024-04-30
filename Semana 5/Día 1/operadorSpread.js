const alex = {
    nombre: "Alex",
    apellido: "Miller",
    edad: 21,
    id: 12345
};

const alejandro = {
    ...alex,
    nombre: "Alejandro",
    especilidad: "MERN",
    lenguajesProgramacion: ['JavaScript', 'Python'],
};

/*
console.log(alex);
console.log(alejandro);
*/

const nombres = ['Alex', 'Alan', 'Roberto', 'Julieta'];

const nuevosNombres = ['Martha', 'Antonio', ...nombres];
console.log(nuevosNombres);