import { useState } from 'react';
import Estudiante from '../Estudiante/Estudiante';
import './App.css';
import FormularioEstudiante from '../FormularioEstudiante/FormularioEstudiante';

const App = () => {

  const [nombre, setNombre] = useState("Alejandro");
  const [apellido, setApellido] = useState("Miller");
  const [edad, setEdad] = useState(25);
  const [estudiantes, setEstudiantes] = useState([]);

  // const [estudiante, setEstudiante] = useState({nombre: "Alex", apellido: "Miller"})

  const actualizaEdad = () => {
    setEdad((edadPrevia) => edadPrevia + 1);
    // setEdad((edadPrevia) => edadPrevia + 1);
    // setEdad((edadPrevia) => edadPrevia + 1);
    // setEdad((edadPrevia) => edadPrevia + 1);
    // setEdad((edadPrevia) => edadPrevia + 1);
  }
  /*
  let desplegarOcultar;
  if(edad < 40){
    desplegarOcultar = (<Estudiante nombre={nombre}
                                    apellido={apellido}
                                    edad={edad}/>);
  }
  else{
    desplegarOcultar = ("");
  }
  */

  return (
    <div className="App">
      <h1> App de estudiantes </h1>
      {
        (edad < 40) ? <Estudiante nombre={nombre} apellido={apellido} edad={edad}/> : ""
      }
      <button onClick={actualizaEdad}>
        Agregar un año a edad
      </button>
      <FormularioEstudiante setEstudiantes={setEstudiantes}
                            estudiantes={estudiantes}/>

      {estudiantes.map((estudiante, index) => {
        return (<Estudiante nombre={estudiante.nombre}
                            apellido={estudiante.apellido}
                            edad={estudiante.edad}
                            key={index}/>)
      })}
    </div>
  );
}

export default App;
