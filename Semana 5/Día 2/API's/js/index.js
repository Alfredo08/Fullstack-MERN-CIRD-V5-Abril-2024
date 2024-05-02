
function cargarImagenes(event){
    event.preventDefault();

    const numImagenes = document.querySelector('#num-de-imagenes').value;
    const URL = `https://dog.ceo/api/breeds/image/random/${numImagenes}`;
    const config = {
        method: 'GET'
    };

    const resultados = document.querySelector('.resultados');
    resultados.innerHTML = "";

    fetch(URL, config)
        .then((respuesta) => {
            console.log("Esto se ejecuta segundo");
            return respuesta.json();
        })
        .then((datos) => {
            for(let i = 0; i < datos.message.length; i ++){
                resultados.innerHTML += `
                    <div class="contenedor-imagen">
                        <img class="imagen-perrito" src="${datos.message[i]}" alt="Imagen de un perrito" >
                    </div>
                `; 
            }
        })
        .catch((error) => {
            resultados.innerHTML = `
            <div class="error">
                Algo salió mal con la petición.
            </div>
        `;
        });
    console.log("Esto se ejecuta primero");
}