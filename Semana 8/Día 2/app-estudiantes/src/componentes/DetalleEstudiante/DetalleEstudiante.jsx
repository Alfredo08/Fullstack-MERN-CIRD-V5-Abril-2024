import { useParams } from "react-router-dom";
import Estudiante from "./../Estudiante/Estudiante";

const DetalleEstudiante = ({estudiantes}) => {

    const parametros = useParams();
    const idEstudiante = Number(parametros.id);

    const estudianteActual = estudiantes.find((estudiante) => estudiante.id === idEstudiante);
    
    return(
        <>
            <h2> El detalle del estudiante es el siguiente: </h2>
            {(estudianteActual !== undefined) ? 
                <Estudiante nombre={estudianteActual.nombre}
                            apellido={estudianteActual.apellido}
                            id={estudianteActual.id}
                            calificacion={estudianteActual.calificacion}/> : 
                <div> Este estudiante no esta en la lista. </div>}
        </>
    );
}

export default DetalleEstudiante;