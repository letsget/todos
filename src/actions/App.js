export const ADD_NEW_TODO = "ADD_NEW_TODO";
export const HANDLE_VALUE = "HANDLE_VALUE";
export const GET_CURRENT_KEY = "GET_CURRENT_KEY";
export const HANDLE_COMPLETED = "HANDLE_COMPLETED";
export const REMOVE_TODO = "REMOVE_TODO";
export const SET_EDIT_MODE = "SET_EDIT_MODE";
export const CANCEL_EDIT_MODE = "CANCEL_EDIT_MODE";
export const ADD_EDITED_TODO = "ADD_EDITED_TODO";
export const REMOVE_COMPLETED = "REMOVE_COMPLETED";
export const SET_CURRENT_FILTER = "SET_CURRENT_FILTER";

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

export const handleCompleted = (i, status) => ({
  type: HANDLE_COMPLETED,
  payload: { i, status },
});

export const removeTodo = (i) => ({
  type: REMOVE_TODO,
  payload: i,
});

export const addEditedTodo = (index, editedText, editedStatus) => ({
  type: ADD_EDITED_TODO,
  payload: { index, editedText, editedStatus },
});

export const setEditMode = (i) => ({
  type: SET_EDIT_MODE,
  payload: i,
});

export const cancelEditMode = (idx, taskStatus) => ({
  type: CANCEL_EDIT_MODE,
  payload: { idx, taskStatus },
});

export const removeCompleted = (todos) => ({
  type: REMOVE_COMPLETED,
  payload: todos,
});

export const setCurrentFilter = (active) => ({
  type: SET_CURRENT_FILTER,
  payload: active,
});
