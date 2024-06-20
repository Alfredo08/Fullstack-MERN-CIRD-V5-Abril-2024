import { useState } from "react"
import { useNavigate } from "react-router-dom";

const FormularioHobby = ({agregarHobby, URL_BASE}) => {
    const [nombre, setNombre] = useState("");
    const [error, setError] = useState("");
    const navegacion = useNavigate();

    const procesaAgregarHobby = async (event) => {
        event.preventDefault();
        const URL = `${URL_BASE}/agregar/hobby`;
        const configuracion = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                token_usuario: localStorage.getItem('token')
            },
            body: JSON.stringify({nombre})
        };

        const respuesta = await fetch(URL, configuracion);
        const datos = await respuesta.json();
        if(!respuesta.ok){
            console.log(datos);
            setError(datos.mensaje);

            if(respuesta.status === 401){
                navegacion("/login");
            }
        }
        else{
            agregarHobby(datos);
            setNombre("");
            setError("");
        }        
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