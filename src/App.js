import './App.css';
import Clique from './compenents/clique/clique';
import TacheListe from './compenents/liste/liste';
import Convertisseur from './compenents/devise/divse';
import Connection from './compenents/formulaire/formulaire';
import Devinette from './compenents/devinette/devinette';

function App() {
  return (
    <div className="App">
    <Clique/>
    <TacheListe/>
    <Convertisseur/>
    <Connection/>
    <Devinette/>
    </div>
  );
}

export default App;
