import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "actions/App";

const NewTaskForm = ({ valueHandler }) => {
  const dispatch = useDispatch();
  const val = useSelector(({ app: { inputValue } }) => inputValue);

  const onAdd = (e) => {
    e.preventDefault();
    dispatch(addTodo(val));
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={onAdd}>
        <input
          value={val}
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          onChange={(e) => valueHandler(e)}
        />
      </form>
    </header>
  );
};

export default NewTaskForm;
