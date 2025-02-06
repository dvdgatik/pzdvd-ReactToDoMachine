import React, { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

// const defaultTodos = [
//   {
//     id: 1,
//     text: "Completar curso React",
//     completed: false,
//   },
//   {
//     id: 2,
//     text: "Completar curso Node",
//     completed: false,
//   },
//   {
//     id: 3,
//     text: "Completar curso Python",
//     completed: false,
//   },
// ];

// localStorage.setItem("TODOS_V1", JSON.stringify(defaultTodos));

const TodoContext = React.createContext();

const TodoProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");

  const {
    item: todos,
    saveItem: saveTodos,
    isLoading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  const completedTodos = todos.filter((todo) => !!todo.completed).length || 0;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchValueText = searchValue.toLowerCase();
    return todoText.includes(searchValueText);
  });

  const handleCompleteTodo = (id, completed) => () => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.id == id);

    newTodos[todoIndex].completed = !completed;
    saveTodos(newTodos);
  };

  const handleDeleteTodo = (id) => () => {
    const newTodos = [...todos];
    const todoToDelete = newTodos.filter((todo) => todo.id !== id);
    saveTodos(todoToDelete);
  };

  return (
    <TodoContext.Provider
      value={{
        isLoading,
        error,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        handleCompleteTodo,
        handleDeleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

const TodoConsumer = ({ children }) => {
  return <TodoContext.Consumer>{children}</TodoContext.Consumer>;
};

export { TodoContext, TodoProvider, TodoConsumer };
