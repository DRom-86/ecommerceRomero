import './App.css';
import NavBar from './components/NavBar/NavBar';
// import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div>
     <NavBar/>
     {/* <ItemListContainer 
     title="Bienvenidos a mi ECommerce"/> */}
     <ItemDetailContainer 
     title="Bienvenidos a mi ECommerce"
     idArticle={3}/>
    </div>
  );
}

export default App;
