import logo from './platzi.webp';
//import './App.css';
// import through an object allows to don't type wrong the name of component
// exports nombrados
import React from 'react';
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
  // React dont translate props as attributes
  // If you want to add attributes you need to add in the element of the component

  const defaultTodos = [
    { text: 'Cortar Cebbolla', completed: true},
    { text: 'Complete course Advanced React', completed: true},
    { text: 'LLorar con la llorona', completed: false},
    { text: 'Complete Dot Net Advanced Course', completed: false},
  ]

  return (
    <>
      <TodoCounter completed={16} total={25}/>
      <TodoSearch/>
      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem 
            text={todo.text} 
            key={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      <CreateToDoButton/> 
      </>
  );
}

// React can't render several components, it needs al least one parent component or element
// So our Return must to receive a single element
// To solve this issue React has a tool named React Fragments



// It is brave to know how to delete the code
// We can take components and insert to another components

// First Call Component then Create Component

// How I can render a list of components/elements: render arrays

// By each object or element of array, we're going to render a todo componentItem 

//React allows to render arrays and for each array element  we can render an element

// map: crea un array a partir del array inicial



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
