import { createSelector } from "reselect";

export const getAllTodos = ({ app }) => app.todos;

export const getCurrentFilter = ({ app }) => app.currentFilter;

export const getActiveTodosLength = createSelector(
  getAllTodos,
  (todos) => todos.filter((todo) => todo.status !== "completed").length
);

export const getTodosToRender = createSelector(
  [getCurrentFilter, getAllTodos],
  (filter, todos) => {
    if (filter === "completed") {
      return todos.filter(
        (todo) => todo.status === "completed" || todo.status === "editing"
      );
    } else if (filter === "active") {
      return todos.filter(
        (todo) => todo.status === "active" || todo.status === "editing"
      );
    } else {
      return todos;
    }
  }
);

/*
export const getTodosToRender = createSelector(
  [(getCurrentFilter, getAllTodos)],
  (filter, todos) => {
    switch (filter) {
      case "all":
        return todos;
      case "completed":
        return todos.filter((todo) => todo.status === "completed");
      case "active":
        return todos.filter((todo) => todo.status === "active");
      default:
        return todos;
    }
  }
);
*/
