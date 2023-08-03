import './App.css';
import {Routes, Route} from "react-router-dom";
import  Items  from "./pages/Items";
import Pokemon from './pages/Pokemon';
import Pokemons from './pages/Pokemons';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/pokemons/:name' element={<Pokemon />}/>
        <Route path='/pokemons' element={<Pokemons />}/>
        <Route path='/items' element={<Items />}/>
        <Route path='/' element={<Pokemons />}/>


      </Routes>
    </div>
  );
}

export default App;
