import React, { useState } from "react";

const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or Decription cannot be blank");
    }
    props.addTodo(title, desc);
  };

  return (
    <>
      <div className=" container ">
        <h3 className="text-center my-3">Add a Todo</h3>
        <form onSubmit={submit}>
          <div className="mb-3">
            <label htmlFor="Title" className="form-label">
              Title
            </label>
            <input
              type="Text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-control"
              id="Title"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="desc" className="form-label">
              Todo Description
            </label>
            <input
              type="text"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="form-control"
              id="desc"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Add Todo
          </button>
        </form>
      </div>
    </>
  );
};

export default AddTodo;
