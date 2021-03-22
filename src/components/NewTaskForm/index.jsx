import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, handleValue, getCurrentKey } from "../../actions/App";

const NewTaskForm = () => {
  const dispatch = useDispatch();
  const val = useSelector(({ app: { initialValue } }) => initialValue);
  const key = useSelector(({ app: { currentKey } }) => currentKey);
  const valueHandler = ({ target: { value } }) => dispatch(handleValue(value));

  const onInput = (e) => dispatch(getCurrentKey(e.key));

  useEffect(() => {
    console.log("inside useEffect");
    if (key === "Enter") {
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
