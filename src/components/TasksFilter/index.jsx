import React from "react";
import { useSelector } from "react-redux";

const TasksFilter = ({
  tasksRemaining,
  onFilter,
  onRemoveCompleted,
  filter,
}) => {
  const filters = useSelector(({ app: { filters } }) => filters);

  return (
    <footer className="footer">
      <span className="todo-count">
        {tasksRemaining ? `Active ${tasksRemaining}` : "All Done!"}
      </span>
      <ul className="filters">
        {filters.map((current) => {
          return (
            <li key={current}>
              <button
                onClick={onFilter}
                className={current === filter ? "selected" : ""}
                data-filter={current}
              >
                {current}
              </button>
            </li>
          );
        })}
      </ul>
      <button onClick={onRemoveCompleted} className="clear-completed">
        Clear completed
      </button>
    </footer>
  );
};

export default TasksFilter;
