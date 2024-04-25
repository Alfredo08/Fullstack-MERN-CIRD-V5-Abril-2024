
let logout = document.querySelector(".logout");

logout.addEventListener("click", function(){
    alert("¡Estás a punto de hacer logout!");
});

function muestraTitulo(elementoH1){
    alert("Le has dado click al " + elementoH1.textContent);
}

function muestraBusqueda(elementoBusqueda){
    console.log(elementoBusqueda.value);
}

function muestraLetra(elementoBusqueda){
    console.log(elementoBusqueda.value);
}

function seleccionaPais(elementoPais){
    console.log(elementoPais.value, elementoPais.textContent);
}

function cambiarFondo(elementoHeader){
    elementoHeader.classList.add("extra");
}

function removerFondo(elementoHeader){
    elementoHeader.classList.remove("extra");
}

function removerConexion(elementoRemover){
    elementoRemover.closest(".card-list-item").remove();
    let elementoNumeroConexiones = document.querySelector('#connectionRequestNumber');
    let numeroConexion = Number(elementoNumeroConexiones.textContent);
    numeroConexion --;
    elementoNumeroConexiones.textContent = numeroConexion;
}

function agregarConexion(elementoAgregar){
    let conexion = elementoAgregar.closest('.buttons').previousElementSibling;
    let listaConexiones = document.querySelector('#myConnections');
    listaConexiones.innerHTML += `
        <li class="card-list-item start">
            ${conexion.innerHTML}
        </li>`;
    elementoAgregar.closest(".card-list-item").remove();

    let elementoNumeroConexiones = document.querySelector('#connectionRequestNumber');
    let numeroConexion = Number(elementoNumeroConexiones.textContent);
    numeroConexion --;
    elementoNumeroConexiones.textContent = numeroConexion;

    let elementoNumeroTotalConexiones = document.querySelector('#totalConnections');
    let numeroTotalConexion = Number(elementoNumeroTotalConexiones.textContent);
    numeroTotalConexion ++;
    elementoNumeroTotalConexiones.textContent = numeroTotalConexion;
}

function mostrarModal(elementoEditar){
    const modal = document.querySelector('.modal');
    const contenedorPrincipal = document.querySelector('.contenedor-principal');

    const userName = document.querySelector('#userName').textContent;
    const userCity = document.querySelector('#userCity').textContent;

    document.querySelector('#nombre').value = userName;
    document.querySelector('#ciudad').value = userCity;
    modal.classList.remove('hidden');
    contenedorPrincipal.classList.add('opacidad');
}

function actualizarPerfil(event){
    event.preventDefault();

    const modal = document.querySelector('.modal');
    const contenedorPrincipal = document.querySelector('.contenedor-principal');

    const nuevoNombre = document.querySelector('#nombre').value;
    const nuevaCiudad = document.querySelector('#ciudad').value;

    document.querySelector('#userName').textContent = nuevoNombre;
    document.querySelector('#userCity').textContent = nuevaCiudad;

    modal.classList.add('hidden');
    contenedorPrincipal.classList.remove('opacidad');

}