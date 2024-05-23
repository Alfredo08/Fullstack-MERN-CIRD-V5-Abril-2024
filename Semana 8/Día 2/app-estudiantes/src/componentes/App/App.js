import { useState } from 'react';
import ListaEstudiantes from '../ListaEstudiantes/ListaEstudiantes';
import DetalleEstudiante from '../DetalleEstudiante/DetalleEstudiante';
import FormularioEstudiante from '../FormularioEstudiante/FormularioEstudiante';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom';

const App = () => {

  const listaInicial = [{
    nombre: "Alex",
    apellido: "Miller",
    id: 12345,
    calificacion: 9.8
  },
  {
    nombre: "Martha",
    apellido: "Gómez",
    id: 98765,
    calificacion: 8.7
  },
  {
    nombre: "Julieta",
    apellido: "Vargas",
    id: 53535,
    calificacion: 7.4
  }];

  const [estudiantes, setEstudiantes] = useState(listaInicial);

  const agregarEstudiante = (nuevoEstudiante) => {
    setEstudiantes([...estudiantes, nuevoEstudiante]);
  }

  return (
    <div className="App">
      <h1> Aplicación de estudiantes </h1>

      <Link to="/estudiantes"> Lista de estudiantes </Link> -
      <Link to="/nuevo/estudiante"> Agregar estudiante</Link>

      <Routes>
        <Route path="/estudiantes" element={<ListaEstudiantes estudiantes={estudiantes}/>} />
        <Route path="/detalle/estudiante/:id" element={<DetalleEstudiante estudiantes={estudiantes}/>}/>
        <Route path="/nuevo/estudiante" element={<FormularioEstudiante agregarEstudiante={agregarEstudiante}/>}/>
      </Routes>
    </div>
  );
}

export default App;
