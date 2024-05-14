
let mensaje;
let edad = 30;

if(edad >= 18){
    mensaje = "Ya puedes manejar en latinoamérica.";
}
else{
    mensaje = "Aún no puedes tramitar tu licencia.";
}

mensaje = (edad >= 18) ? "Ya puedes manejar en latinoamérica." : "Aún no puedes tramitar tu licencia.";
console.log(mensaje);