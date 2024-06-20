import {useState} from 'react';
import './App.css';
import FormularioHobby from '../FormularioHobby/FormularioHobby';
import FormularioEditarHobby from '../FormularioEditarHobby/FormularioEditarHobby';
import { Link, Route, Routes} from 'react-router-dom';
import ListaHobbies from '../ListaHobbies/ListaHobbies';
import FormularioLogin from '../FormularioLogin/FormularioLogin';

const App = () => {
  const [listaHobbies, setListaHobbies] = useState([]);
  const [URL_BASE, setURL_BASE] = useState("http://localhost:8080/api");
  const [login, setLogin] = useState(false);

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
      {
        (login) ?
          <nav>
            <Link to="/hobbies"> Lista de hobbies </Link> - 
            <Link to="/hobby/nuevo"> Agregar Hobby </Link>
          </nav> :
          ""
      }
      <Routes>
        <Route path="/hobbies" element={<ListaHobbies URL_BASE={URL_BASE}
                                               eliminarHobby={eliminarHobby}
                                               listaHobbies={listaHobbies}
                                               login={login}
                                               setListaHobbies={setListaHobbies}
                                               setLogin={setLogin}/>}/>
        <Route path="/hobby/nuevo" element={<FormularioHobby 
                                              agregarHobby={agregarHobby}
                                              URL_BASE={URL_BASE}/>} />
        <Route path="/hobby/editar/:id" element={<FormularioEditarHobby 
                                              listaHobbies={listaHobbies}
                                              URL_BASE={URL_BASE}
                                              actualizarHobby={actualizarHobby}/>} />
        <Route path="/login" element={<FormularioLogin setLogin={setLogin}
                                              URL_BASE={URL_BASE}/>} />
      </Routes>
    </>
  )
}

export default App;
