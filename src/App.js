import './App.css';
import Clique from './compenents/clique/clique';
import TacheListe from './compenents/liste/liste';
import Convertisseur from './compenents/devise/divse';

function App() {
  return (
    <div className="App">
    <Clique/>
    <TacheListe/>
    <Convertisseur/>
    </div>
  );
}

export default App;
