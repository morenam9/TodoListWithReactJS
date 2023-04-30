import React from "react";

const TodoItem = ({ title, description }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{description}</h6>
        <button type="button" className="btn btn-outline-primary mr-2">
          Editar
        </button>
        <button type="button" className="btn btn-outline-danger mr-2">
          Borrar
        </button>
        <button type="button" className="btn btn-outline-success mr-2">
          Finalizar tarea
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
