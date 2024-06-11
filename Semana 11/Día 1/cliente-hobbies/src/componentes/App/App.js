import {useEffect, useState} from 'react';
import './App.css';
import FormularioHobby from '../FormularioHobby/FormularioHobby';
import FormularioEditarHobby from '../FormularioEditarHobby/FormularioEditarHobby';
import { Link, Route, Routes } from 'react-router-dom';
import ListaHobbies from '../ListaHobbies/ListaHobbies';

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

  const eliminarHobby = (nombre) => {
    const indice = listaHobbies.findIndex((hobby) => hobby.nombre === nombre);
    const listaActualizada = [...listaHobbies];
    listaActualizada.splice(indice, 1);
    setListaHobbies(listaActualizada);
  }

  const actualizarHobby = (hobbyActualizado) => {
    const indice = listaHobbies.findIndex((hobby) => hobby._id === hobbyActualizado._id);
    const listaActualizada = [...listaHobbies];
    listaActualizada[indice].nombre = hobbyActualizado.nombre;
    setListaHobbies(listaActualizada);
  }

  return(
    <>
      <h1> Aplicación de hobbies </h1>
      <nav>
        <Link to="/"> Lista de hobbies </Link> - 
        <Link to="/hobby/nuevo"> Agregar Hobby </Link>
      </nav>
      <Routes>
        <Route path="/" element={<ListaHobbies URL_BASE={URL_BASE}
                                               eliminarHobby={eliminarHobby}
                                               listaHobbies={listaHobbies}/>}/>
        <Route path="/hobby/nuevo" element={<FormularioHobby 
                                              agregarHobby={agregarHobby}
                                              URL_BASE={URL_BASE}/>} />
        <Route path="/hobby/editar/:id" element={<FormularioEditarHobby 
                                              listaHobbies={listaHobbies}
                                              URL_BASE={URL_BASE}
                                              actualizarHobby={actualizarHobby}/>} />
      </Routes>
    </>
  )
}

export default App;
