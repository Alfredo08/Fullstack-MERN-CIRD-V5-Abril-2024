
class Nodo{
    constructor(nombre, apellido, edad, curso){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.curso = curso;
        this.next = null;
    }
}

module.exports = Nodo;