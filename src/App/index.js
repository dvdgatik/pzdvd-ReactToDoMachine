import logo from './platzi.webp';
import React, {useState} from 'react';
import { TodoCounter }  from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateToDoButton } from '../CreateToDoButton';
import { useLocalStorage } from './useLocalStorage';

/*
Un Custom Hook en React es una función de JavaScript que utiliza hooks de React (como useState, useEffect, useRef, etc.) para encapsular lógica reutilizable y compartirla entre componentes. Se crean siguiendo la convención de nomenclatura que comienza con "use", como useCustomHook.

Developer experience

📌 ¿Por qué usar Custom Hooks?
Reutilización de código: Permite evitar duplicar lógica en varios componentes.
Lógica desacoplada: Separa la lógica del estado y los efectos del componente, facilitando la organización del código.
Facilita pruebas: Al encapsular la lógica, puedes probarla de manera independiente.

¿Cuando vale la pena implementar los custom hooks?

*/

function App() { 
  const [searchValue, setSearchValue] = useState('');
  const [todos, saveTodos]= useLocalStorage('TODOS_V1', [])

  const completedTodos = todos.filter(todo => !!todo.completed).length || [];
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(todo => {
    const todoText = todo.text.toLowerCase()
    const searchValueText = searchValue.toLowerCase()
    return todoText.includes(searchValueText)
  })

  const handleCompleteTodo = (id, completed) => () => {
    const newTodos = [...todos]
    const todoIndex =  newTodos.findIndex(
      (todo) => todo.id == id
    );

    newTodos[todoIndex].completed = !completed
    saveTodos(newTodos)
  }

  const handleDeleteTodo = (id) => () => {
    const newTodos = [...todos]
    const todoToDelete = newTodos.filter(todo=> todo.id !== id)
    saveTodos(todoToDelete)
  }

  return (
    <>
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

export default App;
