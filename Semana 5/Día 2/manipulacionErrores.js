
const persona = {
    nombre: "Alejandro",
    apellido: "Miller"
};

try{
    console.log(persona.nombre.inicial.inicial2);
}
catch(error){
    console.log("Hubo un problema al tratar de acceder el objeto");
}
finally{
    console.log("Hola");
}

