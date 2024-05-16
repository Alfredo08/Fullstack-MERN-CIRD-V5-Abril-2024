import { useState } from 'react';
const FormularioImagenes = (props) => {

    const [numImagenesForm, setNumImagenesForm] = useState(10);
    
    const enviarDatos = (event) => {
        event.preventDefault();
        
        const URL = `https://dog.ceo/api/breeds/image/random/${numImagenesForm}`;

        fetch(URL)
            .then((response) => {
                if(response.ok){
                    return response.json();
                }
                return new Error("Algo salió mal");
            })
            .then((datos) => {
                props.setImagenes(datos.message);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    
    return(
        <>
            <h1> Obtener Imágenes </h1>
            <form onSubmit={enviarDatos}>
                <div>
                    <label for="numImagenesForm">
                        Número de imagenes:
                    </label>
                    <input type="text" 
                        id="numImagenesForm"
                        name="numImagenesForm"
                        value={numImagenesForm}
                        onChange={(event) => setNumImagenesForm(event.target.value)} />
                </div>
                <button>
                    Cargar imágenes
                </button>
            </form>
        </>
    );
}

export default FormularioImagenes;