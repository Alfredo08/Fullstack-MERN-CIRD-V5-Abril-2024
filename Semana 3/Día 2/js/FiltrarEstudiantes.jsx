import { useState } from "react";

const FiltrarEstudiantes = () => {

    const[filtro, setFiltro] = useState("");

    const actualizarFiltro = ()  => {
        
    }

    return(
        <>
            <h2> Filtrar estudiantes por nombre </h2>
            <form>
                <label htmlFor="filtro">
                    Nombre:
                </label>
                <input type="text"
                       id="filtro"
                       name="filtro"
                       value={filtro}
                       onChange={actualizarFiltro}/>
                <button>
                    Filtrar
                </button>
            </form>
        </>
    );
}

export default FiltrarEstudiantes;