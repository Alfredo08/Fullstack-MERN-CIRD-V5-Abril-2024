
let numero = 10;

const actualizaNumero = (num) => {
    num ++;
    console.log(num);
}

actualizaNumero(numero);
console.log(numero);

const alex = {
    nombre: "Alex",
    apellido: "Miller",
    edad: 21,
    id: 12345
};

const actualizaNombre = (estudiante) => {
    estudiante.nombre = "Alejandro";
}

actualizaNombre(alex);
console.log(alex);