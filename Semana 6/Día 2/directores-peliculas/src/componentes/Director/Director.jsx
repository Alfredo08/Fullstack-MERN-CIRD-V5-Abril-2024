import { Component } from "react";

class Director extends Component{
    constructor(props){
        super(props);
    }

    render = () => {
        return(
            <li>
                {this.props.nombre} {this.props.apellido} 
                <button onClick={this.props.agregarUnoAContador}> Agregar al contador </button>
            </li>
        );
    }
}

export default Director;