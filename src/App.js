import logo from './platzi.webp';
import './App.css';

// Compoment
function App() {
  // what the component returns this is JSX: JavaScript with XML
  // In this case the tags are elements of React
  // If it has Captilar Letter will be React Components
  // Componentes recieve properties
  // Elements are encapsulated by the components
  return (
    <div className="App">
      <TodoItem/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edita el archivo <code>src/App.js</code> y guarda para recargar.
        </p>
        <a
          className="App-link"
          href="https://platzi.com/reactjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Let's Learn React
        </a>
      </header>
    </div>
  );
}

// We can take components and insert to another components

function TodoItem() {
    return (
      <li>
        <span>V</span>
        <p>Llorar con la Llorona</p>
        <span>X</span>
      </li>
    );
}

/**
 * 
 * This is JavaScript
 * 
 * React.CreateElement(
 * 'h1',
 * null,
 * `Completaste
 * ${props.completed} de 
 * ${props.total} TODOs`
 * )
 */

export default App;
