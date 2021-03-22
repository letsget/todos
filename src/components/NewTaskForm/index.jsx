import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, getCurrentKey } from "../../actions/App";

const NewTaskForm = ({ valueHandler }) => {
  const dispatch = useDispatch();
  const val = useSelector(({ app: { inputValue } }) => inputValue);
  const key = useSelector(({ app: { currentKey } }) => currentKey);

  const onInput = (e) => dispatch(getCurrentKey(e.key));

  useEffect(() => {
    if (key === "Enter") {
      console.log("попали в if добавления");
      dispatch(addTodo(val));
    }
  }, [key]);

  return (
    <header className="header">
      <h1>todos</h1>
      <input
        value={val}
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        onChange={(e) => valueHandler(e)}
        onKeyPress={(e) => onInput(e)}
      />
    </header>
  );
};

export default NewTaskForm;
