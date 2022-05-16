
import './App.css';
import logo from './logo.svg';
import NavBar from './components/NavBar/NavBar';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <img  src={logo} className="App-logo" alt="logo"/>
        <h1 style={{color: 'white'}}>
          Título de la web
        </h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        
        </a>
      </header>
    </div>
  );
}

export default App;
