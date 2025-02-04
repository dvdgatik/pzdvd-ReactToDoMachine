import logo from './platzi.webp';
import React, {useState} from 'react';
import { TodoCounter }  from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateToDoButton } from './CreateToDoButton';

function App() { 
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
    const newTodos = [...todos]
    const todoIndex =  newTodos.findIndex(
      (todo) => todo.id == id
    );

    newTodos[todoIndex].completed = !completed
    console.log(newTodos[todoIndex])
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
