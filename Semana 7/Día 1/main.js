const informacion = (nombre, apellido) => {
    return [nombre, apellido];
}

const [nombre, apellido] = informacion("Alejandro", "Miller");
// console.log(nombre, apellido);


const estudiante = {
    nombre: "Alex",
    ['edad']: 25
}

estudiante["apellido"] = "Miller";

console.log(estudiante);