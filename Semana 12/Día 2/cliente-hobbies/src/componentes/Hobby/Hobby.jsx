import {useNavigate} from 'react-router-dom';

const Hobby = ({nombre, id, eliminarHobby, URL_BASE}) => {

    const navegacion = useNavigate();
    const procesaEliminarHobby = async () => {
        const URL = `${URL_BASE}/eliminar/hobby/${nombre}`;
        const configuracion = {
            method: "DELETE",
            headers: {
                token_usuario: localStorage.getItem('token')
            }
        }
        const respuesta = await fetch(URL, configuracion);
        console.log(respuesta);
        if(respuesta.status === 204){
            eliminarHobby(nombre);
        }
        else{
            navegacion("/login");
        }
    }

    const navegarAEditarHobby = () => {
        navegacion(`/hobby/editar/${id}`);
    }
    return(
        <>
            <h2 id={id}> 
                {nombre} 
                <button onClick={procesaEliminarHobby}>Eliminar</button>
                <button onClick={navegarAEditarHobby}> Editar </button>
            </h2>
        </>
    );
}

export default Hobby;