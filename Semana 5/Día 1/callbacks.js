const alex = {
    nombre: "Alex",
    apellido: "Miller",
    edad: 21,
    id: 12345
};

const imprimeHola = (nombre) => console.log(`Hola como estás ${nombre}`);

const imprimeInformacion = (estudiante, callback) => {
    callback(estudiante.nombre);
    console.log("Información del estudiante");
    console.log(estudiante.nombre);
    console.log(estudiante.apellido);
    console.log(estudiante.edad);
    console.log(estudiante.id);
}

imprimeInformacion(alex, imprimeHola);
imprimeInformacion(alex, () => console.log("Función anónima"));