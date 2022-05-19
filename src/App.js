import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

// COMPONENTS
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

//VIEWS
import Home from './views/Home/Home';
import Articles from './views/Articles/Articles';
import About from './views/About/About'; 
import Contact from './views/Contact/Contact';
import SignIn from './views/SignIn/SignIn';
import Error from './views/Error/Error';

const App = () => {
  return (  
    <Router>
      <div className='App'>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>;
          <Route path='/articles' element={<Articles/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/signIn' element={<SignIn/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
