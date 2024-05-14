import { useState } from "react";

const FormularioEstudiante = (props) => {
    const informacionPredeterminada = {
        nombre: "",
        apellido: "",
        edad: 0
    };

    const [informacionEstudiante, setInformacionEstudiante] = useState(informacionPredeterminada);

    const actualizarCampo = (valorNuevo, campo) => {
        setInformacionEstudiante({...informacionEstudiante, [campo] : valorNuevo})
    }

    const agregarEstudiante = (event) => {
        event.preventDefault();
        props.setEstudiantes([...props.estudiantes, informacionEstudiante]);
        setInformacionEstudiante(informacionPredeterminada);
    }

    return(
        <>
            <h2> Agregar estudiante </h2>
            <form onSubmit={agregarEstudiante}>
                <div>
                    <label htmlFor="nombre">
                        Nombre:
                    </label>
                    <input type="text"
                        id="nombre"
                        name="nombre"
                        value={informacionEstudiante.nombre}
                        onChange={(event) => actualizarCampo(event.target.value, "nombre")} />
                </div>
                <div>
                    <label htmlFor="apellido">
                        Apellido:
                    </label>
                    <input type="text"
                        id="apellido"
                        name="apellido"
                        value={informacionEstudiante.apellido}
                        onChange={(event) => actualizarCampo(event.target.value, "apellido")} />
                </div>
                <div>
                    <label htmlFor="edad">
                        Edad:
                    </label>
                    <input type="number"
                        id="edad"
                        name="edad"
                        value={informacionEstudiante.edad}
                        onChange={(event) => actualizarCampo(event.target.value, "edad")} />
                </div>
                <button>
                    Agregar
                </button>
            </form>
        </>
    );
}

export default FormularioEstudiante;