
let nombres = ['Alex', 'Alan', 'Martha', 'Julieta'];

console.log(nombres);
nombres[0] = "Roger";
console.log(nombres);

console.log("¿Cuántos nombres hay en el arreglo?", nombres.length);

nombres.push("Roberto");
nombres.unshift("Maria");
console.log(nombres);
console.log("¿Cuántos nombres hay en el arreglo?", nombres.length);

nombres.pop();
nombres.shift();
nombres.shift();
console.log(nombres);
console.log("¿Cuántos nombres hay en el arreglo?", nombres.length);

// arreglo.splice(indice, cuantosAEliminar, valoresAAgregar)