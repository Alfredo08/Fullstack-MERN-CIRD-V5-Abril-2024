import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import DetallePokemon from '../DetallePokemon/DetallePokemon';

const App = () => {

  const [listaPokemon, setListaPokemon] = useState([]);
  const [paginacion, setPaginacion] = useState({next: null, previous: null})
  const [detallePokemon, setDetallePokemon] = useState({});

  useEffect(() => {
    const cargarPokemon = () => {
      axios.get("https://pokeapi.co/api/v2/pokemon")
        .then(({data}) => {
          setListaPokemon(data.results);
          setPaginacion({next: data.next, previous: data.previous});
        });
    }

    cargarPokemon();
  }, []);

  const cargarDetallePokemon = (url) => {
    axios.get(url)
      .then(({data}) => {
        setDetallePokemon(data);
      });
  }

  const actualizarPagina = (url) => {
    axios.get(url)
      .then(({data}) => {
        setListaPokemon(data.results);
        setPaginacion({next: data.next, previous: data.previous});
      });
  }

  return(
    <>
      <h1> Práctica con axios </h1>
      <div className='contenedor-pokemon'>
        <ul>
          {listaPokemon.map((pokemon, index) => {
            return(
              <li key={index}> 
                <button onClick={() => cargarDetallePokemon(pokemon.url)}> {pokemon.name} </button>
              </li>)
          })}
        </ul>
        {(detallePokemon.name !== undefined) 
          ? <DetallePokemon detallePokemon={detallePokemon}/> :
          <div> Selecciona un pokemon para ver su detalli </div>}
      </div>
      {(paginacion.previous !== null) 
        ? <button onClick={() => actualizarPagina(paginacion.previous)}> Pagina Previa </button> : ""}
      {(paginacion.next !== null) 
      ? <button onClick={() => actualizarPagina(paginacion.next)}> Siguiente Página </button> : ""}
    </>
  );
}

export default App;
