import React, { useEffect } from "react";
import NewTaskForm from "../../components/NewTaskForm";
import TasksFilter from "../../components/TasksFilter";
import TaskList from "../../components/TaskList";
import { useSelector, useDispatch } from "react-redux";
import {
  setCurrentFilter,
  removeCompleted,
  filterTodos,
} from "../../actions/App";

const Main = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(({ app: { todos } }) => todos);
  const filter = useSelector(({ app: { currentFilter } }) => currentFilter);
  // const filteredTasks = useSelector(
  //   ({ app: { filteredTasks } }) => filteredTasks
  // );

  const activeTasks = tasks.filter((task) => !task.done);
  const completedTasks = tasks.filter((task) => task.done);
  const tasksRemaining = tasks.filter((task) => !task.done).length;

  const tasksToRender =
    filter === "all"
      ? tasks
      : filter === "active"
      ? activeTasks
      : completedTasks;

  const onFilter = ({ target: { name } }) => {
    dispatch(setCurrentFilter(name));
    dispatch(filterTodos(filtered(name)));
  };

  const onRemoveCompleted = () => {
    dispatch(removeCompleted(tasks));
  };

  const filtered = (val) => {
    switch (val) {
      case "active":
        return activeTasks;
      case "completed":
        return completedTasks;
      default:
        return null;
    }
  };

  return (
    <section className="todoapp">
      <NewTaskForm />
      <TaskList tasks={tasksToRender} />
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
