import React from "react";

const TodoList = ({ todos, handleDelete, handleEdit, handleComplete }) => {
  return (
    <div className="row">
      {todos.map((todo) => (
        <div className="col-lg-4 mb-3" key={todo.id}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{todo.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                {todo.description}
              </h6>
              <div className="d-flex justify-content-between align-items-center">
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={() => handleEdit(todo.id)}
                >
                  Editar
                </button>
                <button
                  type="button"
                  className="btn btn-outline-danger"
                  onClick={() => handleDelete(todo.id)}
                >
                  Eliminar
                </button>
                {!todo.completed ? (
                  <button
                    type="button"
                    className="btn btn-outline-success"
                    onClick={() => handleComplete(todo.id)}
                  >
                    Completado
                  </button>
                ) : (
                  <span className="text-success">
                    <i className="bi bi-check-lg"></i>
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
