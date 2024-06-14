import React, { useState } from "react";
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import "../App.css";
import { FaCheck } from "react-icons/fa";

function Todo({ todo, onRemoveTodo, onUpdateTodo }) {
  const [editable, setEditable] = useState(false);
  const [editTodo, setEditTodo] = useState(todo.content);
  const updateTodo = () => {
    const request = {
      id: todo.id,
      content: editTodo,
    };
    onUpdateTodo(request);
    setEditable(false);
  };
  const removeTodo = () => {
    onRemoveTodo(id);
  };
  const { id, content } = todo; //Bu temodla artık todo.content yerine direkt content yazabilirsin
  return (
    <div>
      <div className="todo-div">
        {editable ? (
          <input
            style={{ width: "380px" }}
            value={editTodo}
            onChange={(e) => setEditTodo(e.target.value)}
            className="todo-input"
          />
        ) : (
          todo.content
        )}
        <div>
          <IoIosRemoveCircle className="todo-icons" onClick={removeTodo} />
          {editable ? (
            <FaCheck className="todo-icons" onClick={updateTodo} />
          ) : (
            <FaEdit className="todo-icons" onClick={() => setEditable(true)} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Todo;
