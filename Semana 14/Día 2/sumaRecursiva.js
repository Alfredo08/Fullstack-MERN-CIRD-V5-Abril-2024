
const sumaNumeros = (num) => {
    let suma = 0;
    for(let i = 1; i <= num; i ++){
        suma += i;
    }
    return suma;
}


const sumaNumerosRecursivo = (num) => {
    if(num === 1){
        return num;
    }
    return num + sumaNumerosRecursivo(num - 1);
}

console.log(sumaNumerosRecursivo(3));