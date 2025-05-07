import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdOutlineDone } from "react-icons/md";
import "./index.css";

const InProgress = ({ setTitle, todos,setTodos, setEditTodo }) => {
  const handleEdit=(todo) => {

    setTitle(todo.title);
    setEditTodo(todo);
  }
  const  handleDelete=(id) =>
    setTodos(todos.filter((todo) => todo.id !== id))

  const   handleDone=(id) => {
    const updated = todos.map((todo) =>
      todo.id === id ? { ...todo, status: "complete" } : todo
    );
    setTodos(updated);
  }
  const inprogress =todos.filter((todo) => todo.status === "inprogress")
  return (
    <div className="progressdiv">
      <h1>In Progress</h1>
      {inprogress.length === 0 ? (
        <p>No tasks in progress</p>
      ) : (
        inprogress.map((todo) => (
          <div key={todo.id} className="todo-item">
            <div className="entry">
            <span>{todo.title}</span>
            <div className="icons">
              <span onClick={() => handleEdit(todo)}>
                <FaRegEdit />
              </span>
              <span onClick={() => handleDelete(todo.id)}>
                <MdDelete />
              </span>
              <span onClick={() => handleDone(todo.id)}>
                <MdOutlineDone />
              </span>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default InProgress;
