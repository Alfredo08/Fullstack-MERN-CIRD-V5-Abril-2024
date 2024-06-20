import { useState } from "react"
import { useNavigate } from "react-router-dom";

const FormularioLogin = (props) => {
    const [correo, setCorreo] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [error, setError] = useState("");
    const navegacion = useNavigate();

    const procesaLogin = async (event) => {
        event.preventDefault();
        const URL = `${props.URL_BASE}/usuario/login`;
        const config = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({correo, contraseña})
        };

        const respuesta = await fetch(URL, config);
        const datos = await respuesta.json();
        if(respuesta.status === 200){
            localStorage.setItem("token", datos.token);
            props.setLogin(true);
            setError("");
            navegacion("/hobbies");
        }
        else{
            // Mostrar errores en pantalla
            setError(datos.mensaje);
        }
    }

    return(
        <>
            <h1> Login </h1>
            <form onSubmit={procesaLogin}>
                <div>
                    <label htmlFor="correo">
                        Correo:
                    </label>
                    <input type="text"
                           id="correo"
                           name="correo"
                           value={correo}
                           onChange={(e) => setCorreo(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="correo">
                        Contraseña:
                    </label>
                    <input type="password"
                           id="contraseña"
                           name="contraseña"
                           value={contraseña}
                           onChange={(e) => setContraseña(e.target.value)} />
                </div>
                <div>{error}</div>
                <button> Login </button>
            </form>
        </>
    );
}

export default FormularioLogin;