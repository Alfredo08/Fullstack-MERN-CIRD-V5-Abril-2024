
const miPrimeraPromesa = new Promise((resolucion, rechazo) => {
    const numeroRandom = Math.random();
    if(numeroRandom >= 0.7){
        resolucion("Tuviste exito y aprobaste " + numeroRandom);
    }
    else{
        rechazo("No aprobaste esta vez " + numeroRandom);
    }
});

miPrimeraPromesa
    .then((exito) => {
        console.log(exito);
    })
    .catch((error) => {
        console.log(error);
    });

const numero = 20;
console.log(20);

