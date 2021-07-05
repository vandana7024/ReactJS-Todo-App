import React from "react";

export const TodoItem = ({ todo, onDelete }) => {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            {todo.sno} : {todo.title}
          </h5>
          <p className="card-text">{todo.desc}</p>
          <button className="btn btn-primary" onClick={(e) => onDelete(todo)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
