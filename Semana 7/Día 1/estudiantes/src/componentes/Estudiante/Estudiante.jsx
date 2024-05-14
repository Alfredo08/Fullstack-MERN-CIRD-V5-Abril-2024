
const Estudiante = ({apellido, nombre, edad}) => {
    //const nombre = props.nombre;
    return(
        <>
            <h2> Nombre del estudiante: {nombre} {apellido} </h2>
            <p> Información del estudiante </p>
            <p> Edad: {edad} </p>
        </>
    );
}

export default Estudiante;