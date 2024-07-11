const Nodo = require('./nodo');

class ListaDeEstudiantes{
    constructor(){
        this.head = null;
    }

    // Agregar al final de la lista
    agregarAlFinal(nuevoNodo){
        // Lista vacía
        if(this.head === null){
            this.head = nuevoNodo;
        }
        else{
            let aux = this.head;
            while(aux.next != null){
                aux = aux.next;
            }
            aux.next = nuevoNodo;
        }
    }

    // Agregar al frente de la lista
    agregarAlFrente(nuevoNodo){

    }

    // Agregar en una posición dada
    agregarEnPosicion(nuevoNodo, posicion){
        
    }

    imprime(){
        let aux = this.head;
        let listaCompleta = "";

        while(aux != null){
            listaCompleta += aux.nombre + " " + aux.apellido + " -> ";
            aux = aux.next;
        }

        listaCompleta += null;
        return listaCompleta;
    }
}

const Alex = new Nodo('Alex', 'Miller', 24, 'MERN');
const Martha = new Nodo('Martha', 'Gómez', 25, 'MERN');
const Roger = new Nodo('Roger', 'Anderson', 22, 'MERN');
const Julieta = new Nodo('Julieta', 'Vargas', 24, 'MERN');
const Alan = new Nodo('Alan', 'Morales', 26, 'MERN');

const CursoMERN = new ListaDeEstudiantes();
CursoMERN.agregarAlFinal(Alex);
CursoMERN.agregarAlFinal(Martha);
CursoMERN.agregarAlFinal(Roger);
CursoMERN.agregarAlFinal(Julieta);
CursoMERN.agregarAlFinal(Alan);
console.log(CursoMERN.imprime());