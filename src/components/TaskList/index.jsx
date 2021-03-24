import React from "react";
import Task from "../Task";
import { handleCompleted, removeTodo, editTodo } from "../../actions/App";
import { useSelector, useDispatch } from "react-redux";

const TaskList = ({ tasks, valueHandler }) => {
  const dispatch = useDispatch();

  const onComplete = (i, status) => dispatch(handleCompleted(i, status));
  const onRemove = (i) => dispatch(removeTodo(i));

  return (
    <ul className="todo-list">
      {console.log("rendering tasks", tasks)}
      {tasks.map(({ id, text, time, status }, i) => (
        <Task
          key={id}
          text={text}
          time={time}
          status={status}
          i={i}
          onComplete={onComplete}
          onRemove={onRemove}
          valueHandler={valueHandler}
        />
      ))}
    </ul>
  );
};

export default TaskList;
