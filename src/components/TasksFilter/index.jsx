import React from "react";

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
        <li>
          <button
            onClick={onFilter}
            name="all"
            className={filter === "all" ? "selected" : ""}
          >
            All
          </button>
        </li>
        <li>
          <button
            onClick={onFilter}
            name="active"
            className={filter === "active" ? "selected" : ""}
          >
            Active
          </button>
        </li>
        <li>
          <button
            onClick={onFilter}
            name="completed"
            className={filter === "completed" ? "selected" : ""}
          >
            Completed
          </button>
        </li>
      </ul>
      <button onClick={onRemoveCompleted} className="clear-completed">
        Clear completed
      </button>
    </footer>
  );
};

export default TasksFilter;
