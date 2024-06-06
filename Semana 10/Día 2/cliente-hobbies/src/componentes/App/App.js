import {useEffect, useState} from 'react';
import './App.css';
import Hobby from '../Hobby/Hobby';
import FormularioHobby from '../FormularioHobby/FormularioHobby';

const App = () => {
  const [listaHobbies, setListaHobbies] = useState([]);
  const [URL_BASE, setURL_BASE] = useState("http://localhost:8080/api");

  useEffect(() => {
    const cargarHobbies = async () => {
      const URL = `${URL_BASE}/hobbies`; 
      const configuracion = {
        method: 'GET'
      };

      const respuesta = await fetch(URL, configuracion);
      console.log(respuesta);
      const datos = await respuesta.json();
      setListaHobbies(datos);
    }
    cargarHobbies();
  }, []);

  const agregarHobby = (nuevoHobby) => {
    setListaHobbies([...listaHobbies, nuevoHobby]);
  }

  return(
    <>
      <h1> Aplicación de hobbies </h1>
      <FormularioHobby agregarHobby={agregarHobby}
                       URL_BASE={URL_BASE}/>
      {listaHobbies.map((hobby, index) => {
        return(<Hobby key={index}
                      nombre={hobby.nombre}
                      id={hobby._id}/>)
      })}
    </>
  )
}

export default App;
