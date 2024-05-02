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

class Estudiante extends Persona{
    constructor(nombre, apellido, edad, matricula, cursos){
        super(nombre, apellido, edad);
        this.matricula = matricula;
        this.cursos = cursos;
    }
    imprimeInformacionEstudiante(){
        super.imprimeInformacion();
        console.log("Matrícula", this.matricula);
        console.log("Cursos", this.cursos);
    }

    // Sobre-escritura
    imprimeInformacion(){
        console.log("Los cursos que esta tomando " + this.nombre + " " + this.apellido);
        console.log(this.cursos);
        // super.imprimeInformacion();
    }
}

class Escritor extends Persona{
    constructor(nombre, apellido, edad, libros, articulos, genero){
        super(nombre, apellido, edad);
        this.libros = libros;
        this.articulos = articulos;
        this.genero = genero;
    }
}

const alex = new Persona("Alejandro", "Miller", 28);
const julieta = new Estudiante("Julieta", "Vargas", 25, 12345, ['MERN', 'Python']);
const alan = new Escritor("Alan", "Morales", 30, ["Libro 1", "Libro 2"], ["Articulo 1", "Articulo 2"], "Aventura");

console.log(julieta);
julieta.actualizaEdad(28);
julieta.imprimeInformacion();
console.log("----------");
alex.imprimeInformacion();
console.log(alan);