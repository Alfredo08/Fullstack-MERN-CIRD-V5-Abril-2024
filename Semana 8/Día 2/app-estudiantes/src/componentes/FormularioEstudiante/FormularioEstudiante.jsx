import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormularioEstudiante = ({agregarEstudiante}) => {

    const navegar = useNavigate();

    const [nuevoEstudiante, setNuevoEstudiante] = useState({
        nombre: "",
        apellido: "",
        id: -1,
        calificacion: 0.0
    });

    const actualizaPropiedad = (event) => {
        setNuevoEstudiante({
            ...nuevoEstudiante,
            [event.target.name] : event.target.value
        });
    }

    const procesaAgregarEstudiante = (event) => {
        event.preventDefault();

        const estudianteAAgregar = {
            ...nuevoEstudiante,
            id: Number(nuevoEstudiante.id),
            calificacion: Number(nuevoEstudiante.calificacion)
        }

        agregarEstudiante(estudianteAAgregar);

        setNuevoEstudiante({
            nombre: "",
            apellido: "",
            id: -1,
            calificacion: 0.0
        });

        navegar("/estudiantes");

    }

    return(
        <>
            <h2> Nuevo estudiante </h2>
            <form onSubmit={procesaAgregarEstudiante}>
                <div>
                    <label htmlFor="nombre">
                        Nombre:
                    </label>
                    <input type="text"
                        name="nombre"
                        id="nombre"
                        value={nuevoEstudiante.nombre}
                        onChange={(event) => actualizaPropiedad(event)} />
                </div>
                <div>
                    <label htmlFor="apellido">
                        Apellido:
                    </label>
                    <input type="text"
                        name="apellido"
                        id="apellido"
                        value={nuevoEstudiante.apellido}
                        onChange={(event) => actualizaPropiedad(event)} />
                </div>
                <div>
                    <label htmlFor="id">
                        Id:
                    </label>
                    <input type="number"
                        name="id"
                        id="id"
                        value={nuevoEstudiante.id}
                        onChange={(event) => actualizaPropiedad(event)} />
                </div>
                <div>
                    <label htmlFor="calificacion">
                        Calificacion:
                    </label>
                    <input type="number"
                        name="calificacion"
                        id="calificacion"
                        value={nuevoEstudiante.calificacion}
                        onChange={(event) => actualizaPropiedad(event)} />
                </div>
                <button>
                    Agregar
                </button>
            </form>
        </>   
    );
}

export default FormularioEstudiante;