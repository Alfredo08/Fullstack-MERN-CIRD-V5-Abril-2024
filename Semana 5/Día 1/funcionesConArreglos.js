
let numeros = [10, 50, 30, 40, 60, 20, 70];

/*
const despliegaNumero = (num) => console.log(num);
numeros.forEach(despliegaNumero);

numeros.forEach((num) => console.log(num));


let numerosMenoresA50 = numeros.filter((num) => num < 50);

console.log(numerosMenoresA50);
*/

let estudiantes = [{
    nombre: "Alex",
    apellido: "Miller",
    edad: 21,
    id: 12345
},
{
    nombre: "Martha",
    apellido: "Gómez",
    edad: 25,
    id: 44444
},
{
    nombre: "Julieta",
    apellido: "Vargas",
    edad: 18,
    id: 98765
},
{
    nombre: "Alan",
    apellido: "Morales",
    edad: 23,
    id: 76767
}];

/*
let aptoParaBeber = estudiantes.filter((estudiante) => estudiante.edad >= 21);
console.log(aptoParaBeber);
console.log(estudiantes);
*/

let nombresEstudiantes = estudiantes.map((estudiante, indice) => estudiante.nombre + " " + estudiante.apellido + " " + indice);
console.log(nombresEstudiantes);

let encontrarAlumno = estudiantes.find((estudiante) => estudiante.id === 4444);
console.log(encontrarAlumno);
