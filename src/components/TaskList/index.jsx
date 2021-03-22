import React from "react";
import Task from "../Task";
import { handleCompleted, removeTodo, editTodo } from "../../actions/App";
import { useSelector, useDispatch } from "react-redux";

const TaskList = React.memo(({ tasks, valueHandler }) => {
  const dispatch = useDispatch();

  const onComplete = (i) => dispatch(handleCompleted(i));
  const onRemove = (i) => dispatch(removeTodo(i));
  // const onEdit = (loading) => dispatch(editTodo(loading));

  return (
    <ul className="todo-list">
      {console.log("rendering tasks", tasks)}
      {tasks.map(({ id, text, time, done, isEditing }, i) => (
        <Task
          key={id}
          text={text}
          time={time}
          done={done}
          i={i}
          isEditing={isEditing}
          onComplete={onComplete}
          onRemove={onRemove}
          valueHandler={valueHandler}
        />
      ))}
    </ul>
  );
});

export default TaskList;
