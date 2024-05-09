
const Pelicula = ({titulo, idioma, genero, listaEntera, pelicula}) => {
    //console.log(listaEntera);
    //console.log(pelicula);
    return(
        <li>
            {titulo} - {idioma} - {genero}
        </li>
    );
}

export default Pelicula;