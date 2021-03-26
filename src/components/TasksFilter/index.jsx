import React from "react";

const filters = ["all", "active", "completed"];

const TasksFilter = ({
  tasksRemaining,
  onFilter,
  onRemoveCompleted,
  filter,
}) => {
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
