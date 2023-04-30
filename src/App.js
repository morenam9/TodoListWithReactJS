import React, { useState } from "react";
import EditTodoForm from "./EditTodoForm";
import TodoList from "./TodoList";
/*import AiFillCheckCircle from "react-icons/ai";*/

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Hacer la compra",
      description: "Comprar leche, huevos, pan y frutas.",
      completed: false
    },
    {
      id: 2,
      title: "Limpiar la casa",
      description: "Limpieza de la sala, cocina y baño.",
      completed: false
    },
    {
      id: 3,
      title: "Hacer ejercicio",
      description: "Ir al gimnasio o salir a correr.",
      completed: true
    }
  ]);

  const [editingTodo, setEditingTodo] = useState(null);

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (id) => {
    setEditingTodo(todos.find((todo) => todo.id === id));
  };

  const handleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: true } : todo
      )
    );
  };

  const handleUpdate = (updatedTodo) => {
    setTodos(
      todos.map((todo) =>
        todo.id === updatedTodo.id ? { ...updatedTodo } : todo
      )
    );
    setEditingTodo(null);
  };

  return (
    <div className="container py-5">
      <h1 className="mb-4">Lista de tareas</h1>
      <TodoList
        todos={todos}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleComplete={handleComplete}
      />
      {editingTodo && (
        <EditTodoForm
          todo={editingTodo}
          handleUpdate={handleUpdate}
          handleCancel={() => setEditingTodo(null)}
        />
      )}
    </div>
  );
};

export default App;
