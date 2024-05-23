
const Estudiante = (props) => {
    return(
        <>
            <h3> Nombre: {props.nombre} {props.apellido} </h3>
            <p> Id: {props.id} </p>
            <p> Calificación: {props.calificacion} </p>
        </>
    );
}

export default Estudiante;