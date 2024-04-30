let args = process.argv;

console.log(args);

const sumarNumeros = (num1 = 0, num2 = 0, num3 = 0, num4 = 0, num5 = 0) => {
    return num1 + num2 + num3 + num4 + num5;
}

console.log(sumarNumeros(10, 20, 30, 40));