import { useEffect, useState } from 'react';
import './App.css';
import Noticia from '../Noticia/Noticia';
import FormularioNoticia from '../FormularioNoticia/FormularioNoticia';
import FormularioImagenes from '../FormularioImagenes/FormularioImagenes';

const App = () => {

  const [noticias, setNoticias] = useState([]);
  const [criterioBusqueda, setCriterioBusqueda] = useState("Mundo");
  const [numResultados, setNumResultados] = useState(10);
  const [imagenes, setImagenes] = useState([]);
  const [URL_API, setURL_API] = useState("https://newsapi.org/v2/everything?")

  const actualizarDatos = (nuevoCriterioBusqueda, nuevoNumResultados) => {
    setNumResultados(nuevoNumResultados);
    setCriterioBusqueda(nuevoCriterioBusqueda);
  }

  useEffect(() => {
    const obtenerNoticias = async () => {
      const URL = URL_API + `q=${criterioBusqueda}&pageSize=${numResultados}&apiKey=e993fe0805de4ec0abaff5d967e9302a`;
      const response = await fetch(URL);
      if(! response.ok){
        console.log("Hay un error en tu petición.");
      }
      else{
        const datos = await response.json();
        setNoticias(datos.articles);
      }
    }
    
    obtenerNoticias();

  }, [criterioBusqueda]);

  return (
    <div className="App">
      <h1> useEffect y APIS </h1>

      <FormularioImagenes setImagenes={setImagenes}/>
      <div className='contenedor-imagenes'>
        {imagenes.map((urlImagen, index) => {
          return( <img className="imagen-perrito" key={index} src={urlImagen} alt="Un perrito"/> )
        })}
      </div>
      <FormularioNoticia actualizarDatos={actualizarDatos}/>

      {noticias.map((noticia, index) => {
        return (<Noticia noticia={noticia} key={index}/>)
      })}


    </div>
  );
}

export default App;
