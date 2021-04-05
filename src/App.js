import './App.css';
import Data from './components/foreigners.json';
import Personal from './components/personel'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="card container">
              {Personal(Data)}
            </div>
      </header>
    </div>
  );
}

export default App;
