import React from "react";
import "./TodoForm.css";

const TodoForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Escribe tu nuevo Todo</label>
      <textarea placeholder="Ejemplo: Cortar Cebolla para el almuerzo"></textarea>

      <div className="TodoForm-buttonContainer">
        <button className="TodoForm-button TodoForm-button--cancel">
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
