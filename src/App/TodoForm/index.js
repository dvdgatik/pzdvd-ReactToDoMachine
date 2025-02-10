import React, { useState, useContext } from "react";
import "./TodoForm.css";
import { TodoContext } from "../../TodoContext";

const TodoForm = () => {
  const { addTodo, setOpenModal } = useContext(TodoContext);

  const [newTodoComment, setNewTodoComment] = useState("");

  // onSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    setOpenModal(false);
    addTodo(newTodoComment);
  };

  // onCancel
  const handleCancel = () => {
    setOpenModal(false);
  };

  // onChange

  const handleChange = (event) => {
    setNewTodoComment(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Escribe tu nuevo Todo</label>
      <textarea
        value={newTodoComment}
        onChange={handleChange}
        placeholder="Ejemplo: Cortar Cebolla para el almuerzo"
      ></textarea>

      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          onClick={handleCancel}
          className="TodoForm-button TodoForm-button--cancel"
        >
          Cancelar
        </button>
        <button className="TodoForm-button TodoForm-button--add">
          Agregar
        </button>
      </div>
    </form>
  );
};

export { TodoForm };
