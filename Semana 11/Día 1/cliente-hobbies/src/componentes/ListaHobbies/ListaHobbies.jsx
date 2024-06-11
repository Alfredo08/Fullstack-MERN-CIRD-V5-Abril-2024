
import Hobby from "../Hobby/Hobby";

const ListaHobbies = ({listaHobbies, URL_BASE, eliminarHobby}) => {

    return(
        <>
            <h1> Lista de hobbies </h1>
            {listaHobbies.map((hobby, index) => {
                return(<Hobby key={index}
                            nombre={hobby.nombre}
                            id={hobby._id}
                            URL_BASE={URL_BASE}
                            eliminarHobby={eliminarHobby}/>)
            })}
        </>
    );
}

export default ListaHobbies;