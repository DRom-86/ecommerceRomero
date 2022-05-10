import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <div>
     <NavBar/>
     <ItemListContainer 
     title="Bienvenidos a mi ECommerce"/>
     <ItemCount
     initial={1}
     stock={5}/>
    </div>
  );
}

export default App;
