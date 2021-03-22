import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames";
import { addEditedTodo, getCurrentKey } from "../../actions/App";
// import { handleCompleted } from "../../actions/App";

const Task = ({ text, time, done, i, onComplete, onRemove }) => {
  const dispatch = useDispatch();

  const [value, setValue] = useState(text);
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef(null);

  const classes = classNames({
    completed: done && !isEditing,
    editing: isEditing,
  });

  const onEdit = ({ target: { value } }) => {
    setValue(value);
  };

  const toggleEditMode = () => setIsEditing(true);

  useEffect(() => {
    if (isEditing) {
      inputRef.current.focus();
      const handleKey = (e) => {
        dispatch(getCurrentKey(e.key));
        if (e.key === "Escape") {
          setIsEditing(false);
        } else if (e.key === "Enter") {
          dispatch(addEditedTodo(i, value));
          setIsEditing(false);
        }
      };
      document
        .querySelector(".edit-mode")
        .addEventListener("keydown", handleKey);

      return window.removeEventListener("keydown", handleKey);
    }
  }, [value]);

  return (
    <li className={classes}>
      <div className="view">
        <input
          onChange={() => onComplete(i)}
          className="toggle"
          type="checkbox"
          checked={done}
        />
        <label>
          <span className="description">{text}</span>
          <span className="created">{time}</span>
        </label>
        <button onClick={toggleEditMode} className="icon icon-edit" />
        <button onClick={() => onRemove(i)} className="icon icon-destroy" />
      </div>
      {isEditing && (
        <input
          type="text"
          className="edit edit-mode"
          ref={inputRef}
          id={i}
          onChange={(e) => onEdit(e)}
          value={value}
          onKeyPress={(e) => dispatch(getCurrentKey(e.key))}
        />
      )}
    </li>
  );
};

export default Task;
