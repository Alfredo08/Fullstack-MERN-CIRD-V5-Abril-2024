import { Component } from 'react';
import './App.css';
import Director from '../Director/Director';
import Pelicula from '../Peliculas/Pelicula';
import FormularioPelicula from '../FormularioPelicula/FormularioPelicula';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      listaDirectores: [{
        nombre: "Woody",
        apellido: "Allen"
      },
      {
        nombre: "Quentin",
        apellido: "Tarantino"
      },
      {
        nombre: "Sofia",
        apellido: "Coppola"
      }],
      listaPeliculas: [{
        titulo: "El Padrino",
        idioma: "Inglés",
        genero: "Acción"
      },
      {
        titulo: "El rey león",
        idioma: "Inglés",
        genero: "Fantasia"
      },
      {
        titulo: "Hombre en llamas",
        idioma: "Español",
        genero: "Acción"
      }],
      contador: 0,
      nombre: "Alex"
    };
  }

  agregarPelicula = (nuevaPelicula) => {
    this.setState({
      listaPeliculas: [...this.state.listaPeliculas, nuevaPelicula]
    });
  }

  mostrarMensaje = (nombre) => {
    alert(`Hola ${nombre}, ¡le diste click al h2!`);
  }

  agregarUnoAContador = () => {
    this.setState({
      contador: this.state.contador + 1,
      nombre: this.state.nombre + " " + this.state.nombre
    }, () => {
      console.log(this.state.contador);
    });
  }

  render = () => {
    return(
      <div>
        <h1> Directores </h1>
        <ul>
          {this.state.listaDirectores.map((director, index) => {
            return(<Director key={index}
                             nombre={director.nombre}
                             apellido={director.apellido}
                             agregarUnoAContador={this.agregarUnoAContador}/>)
          })}
        </ul>
        <FormularioPelicula agregarPelicula={this.agregarPelicula}/>
        <h1> Películas </h1>
        <ul>
          {this.state.listaPeliculas.map((pelicula, index) => {
            return (<Pelicula key={index}
                              titulo={pelicula.titulo}
                              idioma={pelicula.idioma}
                              genero={pelicula.genero}
                              pelicula={pelicula}
                              listaEntera={this.state.listaPeliculas}/>)
          })}
          {/*
          <li><Pelicula titulo={this.state.listaPeliculas[1].titulo}
                        genero={this.state.listaPeliculas[1].genero}
                        idioma={this.state.listaPeliculas[1].idioma}
                        pelicula={this.state.listaPeliculas[1]}
                        listaEntera={this.state.listaPeliculas}/></li>
          */}
        </ul>
        <h2 onClick={this.agregarUnoAContador}> Contador: {this.state.contador} </h2>
        <p onClick={() => this.mostrarMensaje("Alex")}> Mensaje </p>
        <p> Nombre: {this.state.nombre}</p>
      </div>
    );
  }
}

export default App;
