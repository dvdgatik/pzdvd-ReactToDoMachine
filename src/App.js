import logo from './platzi.webp';
import './App.css';
// import through an object allows to don't type wrong the name of component
// exports nombrados
import { TodoCounter }  from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateToDoButton } from './CreateToDoButton';

// Compoment
function App() {
  // what the component returns this is JSX: JavaScript with XML
  // In this case the tags are elements of React
  // If it has Captilar Letter will be React Components
  // Componentes recieve properties
  // Elements are encapsulated by the components
  return (
    <div className="App">
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
      </TodoList>
      <CreateToDoButton/> 
    </div>
  );
}


// It is brave to know how to delete the code
// We can take components and insert to another components

// First Call Component then Create Component



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
