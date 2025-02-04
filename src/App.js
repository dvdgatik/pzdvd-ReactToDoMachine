import logo from './platzi.webp';
//import './App.css';
// import through an object allows to don't type wrong the name of component
// exports nombrados
import React, {useState} from 'react';
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
  // Los elementos son encapsulados por los componentes
  // Los elementos (JSX) (que aun no son html) son los que se terminan transformando en html


  /*
  La diferencia entre los métodos toLowerCase() y toLocaleLowerCase() en JavaScript 
  está relacionada con la forma en que se procesan los caracteres en mayúsculas y acentuados en diferentes idiomas.

toLowerCase() convierte una cadena de texto en minúsculas, utilizando las reglas de conversión
 que se aplican a los caracteres ASCII (caracteres en inglés y otros idiomas europeos que no tienen acentos)

Por otro lado, toLocaleLowerCase() también convierte una cadena de texto en minúsculas, 
pero utiliza las reglas de conversión específicas del idioma y 
la ubicación (localización) en la que se está ejecutando el código. 
Esto significa que, en función de la localización, 
algunos caracteres con acentos o diacríticos (como la letra "á" en español) 
pueden ser convertidos a su equivalente en minúsculas, mientras que otros caracteres pueden permanecer sin cambios.
  */

//   const defaultTodos = [
//     { id: crypto.randomUUID(), text: 'Cortar Cebbolla', completed: true},
//     { id: crypto.randomUUID(), text: 'Complete course Advanced React', completed: true},
//     { id: crypto.randomUUID(), text: 'LLorar con la llorona', completed: false},
//     { id: crypto.randomUUID(), text: 'Complete Dot Net Advanced Course', completed: false},
//     { id: crypto.randomUUID(), text: 'Usar estados derivados', completed: true},
//   ]

// localStorage.setItem('TODOS_V1', defaultTodos)
//localStorage.removeItemItem('TODOS_V1')



  //Estados derivados, variables, propiedades, calculos que hacemos a partir de un estado

  //initial state
  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;

  if(!localStorageTodos) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]))
     parsedTodos = []
  } else {
    parsedTodos = JSON.parse(localStorageTodos)
  }

  const [searchValue, setSearchValue] =  useState('');

  const [todos, setTodos]= useState(parsedTodos || [])
  console.log(searchValue)

  // find primera coincidencia
  // todas las coincidencias
  // doble negacion falso o verdadero si no es null o undefined
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(todo => {
    const todoText = todo.text.toLowerCase()
    const searchValueText = searchValue.toLowerCase()
    return todoText.includes(searchValueText)
  })

  const saveTodos = (newTodos) => {
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos))
    setTodos(newTodos)
  }

  const handleCompleteTodo = (id, completed) => () => {
    //crea una copia del arreglo
    const newTodos = [...todos]
    const todoIndex =  newTodos.findIndex(
      (todo) => todo.id == id
    );
    //Delete 
    //newTodos.splice(todoIndex, 1)
    newTodos[todoIndex].completed = !completed
    console.log(newTodos[todoIndex])
    //setTodos(newTodos);
    saveTodos(newTodos)

  }

  const handleDeleteTodo = (id) => () => {
    const newTodos = [...todos]
    const todoToDelete = newTodos.filter(todo=> todo.id !== id)
    //setTodos(todoToDelete)
    saveTodos(todoToDelete)
  }

  /**
   Estás creando una función dentro de otra función, lo cual es similar a lo que hacen las HOF. Lo que realmente pasa aquí es:

() => handleDelete(index) crea una nueva función anónima en cada render.
Esa nueva función no se ejecuta inmediatamente sino hasta que el usuario haga clic.
La función anónima actúa como un wrapper (envoltorio) para poder pasar parámetros correctamente.
Aunque no es una HOF pura, sí es un uso práctico del concepto de funciones que retornan funciones.
   */

  return (
    <> {/*React.Fragment*/}
      <TodoCounter completed={completedTodos} total={totalTodos}/>
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
      <TodoList>
        {!searchedTodos.length > 0 && (
          <p>No hay Todos</p>
        )}
        {searchedTodos.length > 0 && searchedTodos.map(todo => (
          <TodoItem 
            text={todo.text} 
            key={todo.id}
            completed={todo.completed}
            onComplete={handleCompleteTodo(todo.id, todo.completed)}
            onDelete={handleDeleteTodo(todo.id)}
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
  //we can create  componentes in the same file or separte file
  // we add componentes into another componentes

// First Call Component then Create Component or the opposite (two ways are valid)

// How I can render a list of components/elements: render arrays

// By each object or element of array, we're going to render a todo componentItem 

//React allows to render arrays and for each array element  we can render an element

// map: crea un array a partir del array inicial

/*
1. export default
Permite exportar un solo valor por módulo.
El nombre de la importación puede ser cualquiera.
Es ideal cuando un módulo tiene un único valor principal que debe exportar
Se usa cuando un archivo contiene un solo componente principal.


2. export nombrado (export {})
Se usa cuando exportas múltiples componentes, funciones o hooks desde un solo archivo.
Permite exportar múltiples valores en un mismo módulo.
Los nombres deben coincidir exactamente al importar.
Es útil cuando un módulo contiene varias funciones, clases o constantes.

*/

/**
 * 
 * This is JavaScript
 * createElement es una funcion
 * 
 * Function TodoCount(props) {
 * 
 * return(
 * React.CreateElement(
 * 'h1',
 * null,
 * `Completaste
 * ${props.completed} de 
 * ${props.total} TODOs`
 * );
 * )
 * }
 */

/*
Props
Informacion Estatica: harcodeada datos ecritos en el mismo codigo
Informacion Dinamica: por props datos que cambian conforme utilizemos los componentes o 
el usuario utilice la informacion

props: 

Las props son una forma de parametrizar nuestros componentes igual que hacemos con las funciones. 
Podemos pasarle cualquier tipo de dato a un componente, incluso otros componentes.

Las props son las propiedades de un componente. Son datos que se pasan de un componente a otro. Por ejemplo, si tienes un componente Button que muestra un botón, puedes pasarle una prop text para que el botón muestre ese texto:

function Button(props) {
  return <button>{props.text}</button>
}

Los props (abreviatura de "properties") son un mecanismo en React que permite pasar datos de un componente padre a un componente hijo. Son inmutables, lo que significa que un componente hijo no puede modificarlos directamente.

Piensa en los props como los parámetros de una función, pero en este caso se pasan a un componente.

React components use props to communicate with each other. Every parent component can pass some information to its child components by giving them props. Props might remind you of HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, and functions.



Las props por dentro son un objeto que tiene distintas propiedades

hay dos formas por el nombre props ejemp (props.nombre_de_la_propiedad_enviada)

destructurado
por objeto ({nombre_de_la_propiedad_enviada})





Evita acceder al localStorage dentro del componente
Acceder a los valores del localStorage dentro del componente es muy pesado en cuanto al rendimiento, ya que se ejecuta sincrónicamente en cada re-renderizado del componente. En su lugar, puedes leerlo utilizando un callback que retorne el valor inicial del useState, esto permitirá acceder a la información una sola vez al momento que se crea el componente, esto por la definición de useState. .


const [todos, setTodos] = useState(() => {
  const todosFromStorage = window.localStorage.getItem('TODOS_V1')
  if (todosFromStorage) return JSON.parse(todosFromStorage)
  return []
})
*/

export default App;
