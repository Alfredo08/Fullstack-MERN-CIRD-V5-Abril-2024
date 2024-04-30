
const alex = {
    nombre: "Alex",
    apellido: "Miller",
    edad: 21,
    id: 12345,
    imprimeInformacion: function(){
        console.log("La información cargará pronto.")
    }
};

/*
let nombre = alex.nombre;
const apellido = alex.apellido;
const edad = alex.edad;
const id = alex.id;
*/

const {nombre, apellido, edad, id} = alex;

console.log(nombre, apellido, edad, id);

const actualizarInformacion = ({nombre, apellido, edad, imprimeInformacion} = estudiante) => {
    nombre = "Alejandro";
    apellido = "Martínez";
    edad ++;
    imprimeInformacion();
}

actualizarInformacion(alex);
console.log(alex);

