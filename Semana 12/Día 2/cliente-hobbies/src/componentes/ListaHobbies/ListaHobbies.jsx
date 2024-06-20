
import { useNavigate } from "react-router-dom";
import Hobby from "../Hobby/Hobby";
import { useEffect } from "react";

const ListaHobbies = ({listaHobbies, URL_BASE, eliminarHobby, login, setLogin, setListaHobbies}) => {
    const navegacion = useNavigate();

    useEffect(() => {
        const cargarHobbies = async () => {
          const URL = `${URL_BASE}/hobbies`; 
          const configuracion = {
            method: 'GET',
            headers: {
              token_usuario: localStorage.getItem('token')
            }
          };
    
          const respuesta = await fetch(URL, configuracion);
          const datos = await respuesta.json();
          if(respuesta.status === 200){
            setListaHobbies(datos);
            setLogin(true);
          }
          else{
            navegacion("/login");
          }
    
        }
        cargarHobbies();
      }, []);

    return(
        <>
            {
                (login) ?
                    <>
                        <h1> Lista de hobbies </h1>
                        {listaHobbies.map((hobby, index) => {
                            return(<Hobby key={index}
                                        nombre={hobby.nombre}
                                        id={hobby._id}
                                        URL_BASE={URL_BASE}
                                        eliminarHobby={eliminarHobby}/>)
                        })}
                    </>:
                    ""
            }
        </>
    );
}

export default ListaHobbies;