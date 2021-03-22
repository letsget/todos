export const ADD_NEW_TODO = "ADD_NEW_TODO";
export const HANDLE_VALUE = "HANDLE_VALUE";
export const GET_CURRENT_KEY = "GET_CURRENT_KEY";
export const HANDLE_COMPLETED = "HANDLE_COMPLETED";
export const REMOVE_TODO = "REMOVE_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const FILTER_ACTIVE = "FILTER_ACTIVE";
export const FILTER_COMPLETED = "FILTER_COMPLETED";
export const REMOVE_COMPLETED = "REMOVE_COMPLETED";
export const DISPLAY_ALL = "DISPLAY_ALL";
export const SET_CURRENT_FILTER = "SET_CURRENT_FILTER";
export const FILTER_TODOS = "FILTER_TODOS";

export const addTodo = (newTodo) => ({
  type: ADD_NEW_TODO,
  payload: newTodo,
});

export const handleValue = (value) => ({
  type: HANDLE_VALUE,
  payload: value,
});

export const getCurrentKey = (key) => ({
  type: GET_CURRENT_KEY,
  payload: key,
});

export const handleCompleted = (i) => ({
  type: HANDLE_COMPLETED,
  payload: i,
});

export const removeTodo = (i) => ({
  type: REMOVE_TODO,
  payload: i,
});

export const editTodo = (editing) => ({
  type: EDIT_TODO,
  payload: editing,
});

export const filterActive = (filtered) => ({
  type: FILTER_ACTIVE,
  payload: filtered,
});

export const filterCompleted = (filtered) => ({
  type: FILTER_COMPLETED,
  payload: filtered,
});

export const removeCompleted = (todos) => ({
  type: REMOVE_COMPLETED,
  payload: todos,
});

export const displayAll = (todos) => ({
  type: DISPLAY_ALL,
  payload: todos,
});

export const setCurrentFilter = (active) => ({
  type: SET_CURRENT_FILTER,
  payload: active,
});

export const filterTodos = (filtered) => ({
  type: FILTER_TODOS,
  payload: filtered,
});
