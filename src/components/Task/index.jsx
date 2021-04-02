import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import cn from "classnames";
import {
  addEditedTodo,
  getCurrentKey,
  setEditMode,
  cancelEditMode,
} from "actions/App";

const Task = ({ text, time, status, i, onComplete, onRemove, id }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(text);
  const [currentlyEditing, setIsCurrentlyEditing] = useState(false);
  const [prevStatus, setPrevStatus] = useState(null);
  const onEdit = ({ target: { value } }) => {
    setValue(value);
  };

  const toggleEditMode = () => {
    setPrevStatus(status);
    setIsCurrentlyEditing(true);
    dispatch(setEditMode(i));
  };

  const onEditSubmit = (e) => {
    e.preventDefault();
    setPrevStatus(status);
    dispatch(addEditedTodo(i, value, prevStatus));
    dispatch(cancelEditMode(i, prevStatus));
    setIsCurrentlyEditing(false);
  };

  const handleKey = (e) => {
    if (e.keyCode === 27) {
      window.removeEventListener("keydown", handleKey);
      dispatch(cancelEditMode(i, prevStatus));
      setIsCurrentlyEditing(false);
      setValue(text);
    }
  };

  useEffect(() => {
    if (currentlyEditing) {
      window.addEventListener("keydown", handleKey);
      return () => window.addEventListener("keydown", handleKey);
    }
  });

  return (
    <li
      className={cn({
        completed: status === "completed",
        editing: status === "editing",
      })}
    >
      <div className="view">
        <input
          onChange={() => onComplete(i, status, id)}
          className="toggle"
          type="checkbox"
          checked={status === "completed"}
        />
        <label>
          <span className="description">{text}</span>
          <span className="created">{time}</span>
        </label>
        <button onClick={toggleEditMode} className="icon icon-edit" />
        <button onClick={() => onRemove(id)} className="icon icon-destroy" />
      </div>
      {status === "editing" && (
        <form onSubmit={onEditSubmit}>
          <input
            type="text"
            autoFocus
            className="edit edit-mode"
            id={i}
            onChange={(e) => onEdit(e)}
            value={value}
            onKeyPress={(e) => dispatch(getCurrentKey(e.key))}
          />
        </form>
      )}
    </li>
  );
};

export default Task;
