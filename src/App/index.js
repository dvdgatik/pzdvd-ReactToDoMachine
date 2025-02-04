import logo from './platzi.webp';
import React, { useState } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { AppUI } from './AppUI';
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
  const {
    item: todos, 
    saveItem: saveTodos,
    isLoading,
    error
  }= useLocalStorage('TODOS_V1', [])

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
  <AppUI
    isLoading={isLoading}
    hasError={error}
    completedTodos = {completedTodos}
    totalTodos = {totalTodos}
    searchValue = {searchValue}
    setSearchValue = {setSearchValue}
    searchedTodos = {searchedTodos}
    handleCompleteTodo = {handleCompleteTodo}
    handleDeleteTodo = {handleDeleteTodo}
    />
  );
}

export default App;
