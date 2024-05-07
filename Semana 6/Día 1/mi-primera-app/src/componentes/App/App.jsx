import './App.css';
import Mensaje from './../Mensaje/Mensaje';

const App = () => {
  let grupo = "MERN CIRD v5 - Paraguay";
  let nums = [10, 20, 30, 40, 50];
  let listaMensajes = [];

  for(let i = 1; i <= 5; i ++){
    listaMensajes.push(<Mensaje/>);
  }


  return (
    <div className="App">
      <h1> Hola grupo de {grupo} </h1>
      
      {listaMensajes}

      {(4 < 10) ? <Mensaje /> : "es falso"}
      <h2> Lista de números </h2>
      {/* <p> {nums} </p> */}
      <ul>
        {
        nums.map((num) => {
          return(<li> {num} </li>);
        })
        }
      </ul>

    </div>
  );
}

export default App;
