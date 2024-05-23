import { Link } from "react-router-dom";

const ListaEstudiantes = ({estudiantes}) => {
    return(
        <>
            <h2> Lista de estudiantes </h2>
            {estudiantes.map((estudiante, index) => {
                return (
                    <div>
                        <Link key={index} to={`/detalle/estudiante/${estudiante.id}`}> 
                            {estudiante.nombre} {estudiante.apellido} 
                        </Link>
                    </div>)
            })}
        </>
    );
}

export default ListaEstudiantes;