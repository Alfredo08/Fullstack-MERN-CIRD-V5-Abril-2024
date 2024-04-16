
let persona = {
    nombre: "Alejandro",
    apellido: "Miller",
    edad: 25,
    lenguajesProgramacion: ["HTML", "CSS", "JS"],
    certificaciones: {
        fundamentosWeb: "Cinturon amarillo",
        MERN: "Cinturon Rojo",
        Java: "Cinturon Negro"
    }
}

console.log("Edad:", persona.edad);
console.log("Edad:", persona["edad"]);

persona.edad = 26;

let clave = "edad";
console.log("Edad actualizada:", persona[clave]);

console.log(persona.certificaciones.MERN);
console.log("-----");

for(let clave in persona){
    console.log(clave, persona[clave]);
}