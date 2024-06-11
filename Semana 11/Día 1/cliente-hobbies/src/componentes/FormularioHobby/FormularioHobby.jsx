import { useState } from "react"

const FormularioHobby = ({agregarHobby, URL_BASE}) => {
    const [nombre, setNombre] = useState("");
    const [error, setError] = useState("");

    const procesaAgregarHobby = async (event) => {
        event.preventDefault();
        const URL = `${URL_BASE}/agregar/hobby`;
        const configuracion = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({nombre})
        };

        const respuesta = await fetch(URL, configuracion);
        const datos = await respuesta.json();
        if(!respuesta.ok){
            console.log(datos);
            setError(datos.mensaje);
        }
        else{
            agregarHobby(datos);
            setNombre("");
            setError("");
        }
        /*
        if(!respuesta.ok){
            setError(respuesta.statusText);
        }
        else{
            const datos = await respuesta.json();
            agregarHobby(datos);
            setNombre("");
            setError("");
        }
        */
        

    } 

    return(
        <>
            <h1> Agregar Hobby </h1>
            <form onSubmit={procesaAgregarHobby}>
                <div>
                    <label htmlFor="nombre">
                        Hobby nuevo:
                    </label>
                    <input type="text"
                           id="nombre"
                           name="nombre"
                           value={nombre}
                           onChange={(event) => setNombre(event.target.value)} />
                    <span>{error}</span>
                </div>
                <button>
                    Agregar
                </button>
            </form>
        </>
    );
}

export default FormularioHobby;