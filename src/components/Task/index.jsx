import React from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";
// import { handleCompleted } from "../../actions/App";

const Task = ({ text, time, done, i, onComplete, onRemove }) => {
  const isEditing = useSelector(({ app: { isEditing } }) => isEditing);

  const classes = classNames({
    completed: done && !isEditing,
    editing: isEditing,
  });

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
        <button
          // onClick={() => editHandler(isEditing)}
          className="icon icon-edit"
        />
        <button onClick={() => onRemove(i)} className="icon icon-destroy" />
        {isEditing && (
          <input type="text" className="edit" value="Editing task" />
        )}
      </div>
    </li>
  );
};

export default Task;
