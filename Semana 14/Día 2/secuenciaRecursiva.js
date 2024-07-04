
const imprimeSecuencia = (num) => {
    for(let i = 1; i <= num; i ++){
        console.log(i);
    }
}

const imprimeSecuenciaRecursiva = (num) => {
    if(num === 1){
        console.log(num);
    }
    else{
        imprimeSecuenciaRecursiva(num - 1);
        console.log(num);
    }
}

imprimeSecuenciaRecursiva(3);
