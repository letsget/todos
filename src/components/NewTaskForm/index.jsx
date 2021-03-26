import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "actions/App";

const NewTaskForm = ({ valueHandler }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const onInputChange = ({ target: { value } }) => setValue(value);

  const onAdd = (e) => {
    e.preventDefault();
    dispatch(addTodo(value));
    setValue("");
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={onAdd}>
        <input
          value={value}
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          onChange={(e) => onInputChange(e)}
        />
      </form>
    </header>
  );
};

export default NewTaskForm;
