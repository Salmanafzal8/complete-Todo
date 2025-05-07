import React from "react";
import "./index.css";
import { MdDelete } from "react-icons/md";

const Complete = ({ todos, setTodos }) => {
  const completedTodos = todos.filter((todo) => todo.status === "complete");
  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="complete-div">
      <h1>Complete</h1>
      <div className="complete-list">
        {completedTodos.length === 0 ? (
          <p>No completed tasks</p>
        ) : (
          completedTodos.map((todo) => (
            <div key={todo.id} className="todo-item">
              <div className="entry">
                <span>{todo.title}</span>
                <div className="icons">
                  <span onClick={() => handleDelete(todo.id)}>
                    <MdDelete />
                  </span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Complete;
