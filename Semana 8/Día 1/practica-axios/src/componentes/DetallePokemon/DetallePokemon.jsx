
const DetallePokemon = (props) => {
    return(
        <div>
            <h2> Nombre: {props.detallePokemon.name}</h2>
            <p> Altura: {props.detallePokemon.height}</p>
            <p> Peso: {props.detallePokemon.weight}</p>
            <img src={props.detallePokemon.sprites.other.dream_world.front_default} 
                 alt={props.detallePokemon.name}/>
        </div>);
}

export default DetallePokemon;