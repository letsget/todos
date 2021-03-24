import React from "react";
// import cn from "classnames";

const filters = ["all", "active", "completed"];

const TasksFilter = ({
  tasksRemaining,
  onFilter,
  onRemoveCompleted,
  filter,
}) => {
  console.log(tasksRemaining);
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
