import React, { useState } from "react";
import "./App.css";
import Complete from "./Components/Complete";
import InProgress from "./Components/Inprogress";
import { MdFormatListBulletedAdd } from "react-icons/md";


const App = () => {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);
  const [edittodo, setEditTodo] = useState(null);

  const handleAdd = () => {
    addTodo(title);
    setTitle("");
  };

  const addTodo = (title) => {
    if (edittodo) {
      const updateTodos = todos.map((todo) =>
        todo.id === edittodo.id ? { ...todo, title: title } : todo
      );
      setTodos(updateTodos);
      setEditTodo(null);
      return;
    }

    const newtodo = {
      id: Date.now(),
      title: title.trim(),
      status: "inprogress",
    };
    setTodos([...todos, newtodo]);
  };
  return (
    <div>
      <div className="top-container">
        <h1>TODO APP</h1>
        <input
          className="inputbox"
          placeholder="Enter Todo task "
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={handleAdd} disabled={!title.trim()}>
          {edittodo ? "UPDATE TASK" : "ADD TASK"}
          <MdFormatListBulletedAdd />
        </button>
        <div className="datadiv">
        <InProgress
          setTitle={setTitle}
          todos={todos}
          setTodos={setTodos}
          setEditTodo={setEditTodo}
        />
        <Complete todos={todos} setTodos={setTodos} />

        </div>
      </div>
    </div>
  );
};

export default App;
