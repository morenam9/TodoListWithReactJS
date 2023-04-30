import React, { useState } from "react";

const EditTodoForm = ({ todo, handleUpdate, handleCancel }) => {
  const [updatedTodo, setUpdatedTodo] = useState(todo);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedTodo({
      ...updatedTodo,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleUpdate(updatedTodo);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Editar tarea</h3>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Título
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          value={updatedTodo.title}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Descripción
        </label>
        <textarea
          className="form-control"
          id="description"
          name="description"
          value={updatedTodo.description}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <button type="submit" className="btn btn-primary me-md-2">
          Guardar cambios
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleCancel}
        >
          Cancelar
        </button>
      </div>
    </form>
  );
};

export default EditTodoForm;
