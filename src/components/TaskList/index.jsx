import React from "react";
import Task from "../Task";
import { handleCompleted, removeTodo, editTodo } from "../../actions/App";
import { useSelector, useDispatch } from "react-redux";

const TaskList = ({ tasks }) => {
  const dispatch = useDispatch();

  const onComplete = (i) => dispatch(handleCompleted(i));
  const onRemove = (i) => dispatch(removeTodo(i));
  // const onEdit = (loading) => dispatch(editTodo(loading));

  return (
    <ul className="todo-list">
      {console.log("rendering tasks", tasks)}
      {tasks.map(({ id, text, time, done }, i) => (
        <Task
          key={id}
          text={text}
          time={time}
          done={done}
          i={i}
          onComplete={onComplete}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
};

export default TaskList;
