import React from "react";
import Task from "components/Task";
import { handleCompleted, removeTodo } from "actions/App";
import { useDispatch } from "react-redux";

const TaskList = ({ tasks, valueHandler }) => {
  const dispatch = useDispatch();

  const onComplete = (i, status) => dispatch(handleCompleted(i, status));
  const onRemove = (i) => dispatch(removeTodo(i));

  console.log("rendering todos", tasks);

  return (
    <ul className="todo-list">
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
