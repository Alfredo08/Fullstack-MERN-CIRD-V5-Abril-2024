import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom";

const FormularioEditarHobby = ({listaHobbies, URL_BASE, actualizarHobby}) => {
    const navegacion = useNavigate();
    const parametros = useParams();
    const id = parametros.id;

    const hobbyAEditar = listaHobbies.find((hobby) => hobby._id === id);

    const [nombre, setNombre] = useState(hobbyAEditar.nombre);
    const [error, setError] = useState("");

    const procesaEditarHobby = async (event) => {
        event.preventDefault();

        const URL = `${URL_BASE}/actualizar/hobby`;
        const configuracion = {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
                token_usuario: localStorage.getItem('token')
            },
            body: JSON.stringify({nombre, id})
        };

        const respuesta = await fetch(URL, configuracion);
        const datos = await respuesta.json();
        if(respuesta.status === 200){
           actualizarHobby(datos);
            setNombre("");
            navegacion("/hobbies"); 
        }
        else{
            navegacion("/login");
        }
        
    }

    return(
        <>
            <h1> Editar Hobby </h1>
            <form onSubmit={procesaEditarHobby}>
                <div>
                    <label htmlFor="nombre">
                        Hobby:
                    </label>
                    <input type="text"
                           id="nombre"
                           name="nombre"
                           value={nombre}
                           onChange={(event) => setNombre(event.target.value)} />
                    <span>{error}</span>
                </div>
                <button>
                    Actualizar
                </button>
            </form>
        </>
    );
}

export default FormularioEditarHobby;