//Componentes
import NavBarComponent from './components/NavBarComponent/NavBarComponent';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

//Estilos

//importación de estilos de bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
 
const App = () => {
  return (
  <div style={{width:'100vw', height:'100vh'}}> 
    <NavBarComponent />
    <ItemListContainer greeting="Bienvenidos a Nuestra Tienda" myFunction = {() => alert("Página en desarrollo")}/>
  </div>
    );
}

export default App;
