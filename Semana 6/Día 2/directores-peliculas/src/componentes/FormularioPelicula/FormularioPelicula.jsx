import { Component } from "react";

class FormularioPelicula extends Component{
    constructor(props){
        super(props);
        this.state = {
            titulo: "",
            genero: "",
            idioma: ""
        }
    }

    enviarDatos = (event) => {
        event.preventDefault();
        const nuevaPelicula = {
            titulo: this.state.titulo,
            genero: this.state.genero,
            idioma: this.state.idioma
        }
        this.props.agregarPelicula(nuevaPelicula);
        this.setState({
            titulo: "",
            idioma: "",
            genero: ""
        })
    }

    render = () => {
        return(
            <form onSubmit={this.enviarDatos}>
                <div>
                    <label htmlFor="titulo">
                        Título:
                    </label>
                    <input type="text" 
                           id="titulo" 
                           name="titulo"
                           value={this.state.titulo}
                           onChange={(event) => this.setState({titulo: event.target.value})} />
                </div>
                <div>
                    <label htmlFor="genero">
                        Género:
                    </label>
                    <input type="text" 
                           id="genero" 
                           name="genero"
                           value={this.state.genero} 
                           onChange={(event) => this.setState({genero: event.target.value})}/>
                </div>
                <div>
                    <label htmlFor="idioma">
                        Idioma:
                    </label>
                    <input type="text" 
                           id="idioma" 
                           name="idioma"
                           value={this.state.idioma}
                           onChange={(event) => this.setState({idioma: event.target.value})} />
                </div>
                <button>
                    Agregar Película
                </button>
            </form>
        );
    }
}

export default FormularioPelicula;