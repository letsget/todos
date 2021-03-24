import React, { useEffect } from "react";
import NewTaskForm from "../../components/NewTaskForm";
import TasksFilter from "../../components/TasksFilter";
import TaskList from "../../components/TaskList";
import { useSelector, useDispatch } from "react-redux";
import {
  setCurrentFilter,
  removeCompleted,
  handleValue,
} from "../../actions/App";

const Main = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(({ app: { todos } }) => todos);
  const filter = useSelector(({ app: { currentFilter } }) => currentFilter);

  const activeTasks = tasks.filter(
    ({ status }) => status === "active" || status === "editing"
  );
  const completedTasks = tasks.filter(
    ({ status }) => status === "completed" || status === "editing"
  );
  const tasksRemaining = tasks.filter(({ status }) => status !== "completed")
    .length;
  const tasksToRender =
    filter === "all"
      ? tasks
      : filter === "active"
      ? activeTasks
      : completedTasks;

  const onFilter = ({ target }) => {
    const filter = target.dataset.filter;
    dispatch(setCurrentFilter(filter));
  };

  const onRemoveCompleted = () => {
    dispatch(removeCompleted(tasks));
  };

  const valueHandler = ({ target: { value } }) => dispatch(handleValue(value));

  return (
    <section className="todoapp">
      <NewTaskForm valueHandler={valueHandler} />
      <TaskList tasks={tasksToRender} valueHandler={valueHandler} />
      <TasksFilter
        tasksRemaining={tasksRemaining}
        onFilter={onFilter}
        onRemoveCompleted={onRemoveCompleted}
        filter={filter}
      />
    </section>
  );
};

export default Main;
