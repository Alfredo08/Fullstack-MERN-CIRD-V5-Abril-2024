
let calificacion = 7.9;
let intentos = 3;

if(calificacion >= 8.0){
    console.log("¡Felicidades, aprobaste tu examen!");
}
else{
    if(intentos < 3){
        console.log("Fue un buen intento pero necesitamos rendirlo de nuevo.");  
    }
    else{
        console.log("Este fue tu último intento.");
    }
}

let dia = 2;

switch(dia){
    case 1: console.log("Lunes");     // dia === 1
            break;
    case 2: console.log("Martes");    // dia === 2
            break; 
    case 3: console.log("Miércoles"); // dia === 3
            break;
    case "hola": console.log("Hola a todos");
            break;
    default: console.log("Opción inválida");
}