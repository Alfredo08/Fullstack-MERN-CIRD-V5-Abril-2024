
class Persona{
    constructor(nombre, apellido, edad){
        // Atributos
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    // Métodos
    imprimeInformacion(){
        console.log("Nombre", this.nombre);
        console.log("Apellido", this.apellido);
        console.log("Edad", this.edad);
    }

    actualizaEdad(edadNueva){
        this.edad = edadNueva;
    }
}

const alex = new Persona("Alejandro", "Miller", 28);
const julieta = new Persona("Julieta", "Vargas", 25);
const alan = new Persona("Alan", "Morales", 30);

alex.imprimeInformacion();
// julieta.imprimeInformacion();
// alan.imprimeInformacion();
console.log("----------")

alex.actualizaEdad(30);
alex.imprimeInformacion();