import { useState } from 'react';
const FormularioNoticia = (props) => {

    const [numResultadosForm, setNumResultadosForm] = useState(10);
    const [criterioBusquedaForm, setCriterioBusquedaForm] = useState("");
    
    const enviarDatos = (event) => {
        event.preventDefault();
        props.actualizarDatos(criterioBusquedaForm, numResultadosForm);
    }
    
    return(
        <>
            <h1> Buscar noticias </h1>
            <form onSubmit={enviarDatos}>
                <div>
                    <label for="criterioBusquedaForm">
                        Criterio de búsqueda
                    </label>
                    <input type="text" 
                        id="criterioBusquedaForm"
                        name="criterioBusquedaForm"
                        value={criterioBusquedaForm}
                        onChange={(event) => setCriterioBusquedaForm(event.target.value)} />
                </div>
                <div>
                    <label for="numResultadosForm">
                        Número de noticias:
                    </label>
                    <input type="text" 
                        id="numResultadosForm"
                        name="numResultadosForm"
                        value={numResultadosForm}
                        onChange={(event) => setNumResultadosForm(event.target.value)} />
                </div>
                <button>
                    Cargar noticias
                </button>
            </form>
        </>
    );
}

export default FormularioNoticia;