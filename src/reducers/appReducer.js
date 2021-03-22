import { setFilter } from "../utils";

import {
  ADD_NEW_TODO,
  HANDLE_VALUE,
  GET_CURRENT_KEY,
  HANDLE_COMPLETED,
  REMOVE_TODO,
  EDIT_TODO,
  FILTER_ACTIVE,
  FILTER_COMPLETED,
  REMOVE_COMPLETED,
  DISPLAY_ALL,
  SET_CURRENT_FILTER,
  FILTER_TODOS,
} from "../actions/App";

const initialState = {
  todos: [
    {
      id: Date.now(),
      text: "Learn React",
      time: "12:25",
      done: false,
    },
    {
      id: 1,
      text: "Learn Redux",
      time: "12:27",
      done: false,
    },
    {
      id: 2,
      text: "Ask Serhio questions about JS",
      time: "12:29",
      done: true,
    },
    {
      id: 3,
      text: "Learn async code from code.mu",
      time: "12:45",
      done: false,
    },
  ],
  currentFilter: "all",
  isEditing: false,
  initialValue: "",
  currentKey: null,
};

const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_NEW_TODO:
      if (payload.trim()) {
        return {
          ...state,
          initialValue: "",
          todos: state.todos.concat({
            id: Math.random(),
            text: payload,
            time: new Date().getHours() + " " + new Date().getMinutes(),
            done: false,
          }),
        };
      } else {
        return {
          ...state,
        };
      }
    case HANDLE_VALUE:
      return {
        ...state,
        initialValue: payload,
      };
    case GET_CURRENT_KEY:
      return {
        ...state,
        currentKey: payload,
      };
    case HANDLE_COMPLETED:
      const updated = [...state.todos];
      updated[payload].done = !updated[payload].done;
      return {
        ...state,
        todos: updated,
      };
    case REMOVE_TODO:
      const copy = [...state.todos];
      copy.splice(payload, 1);
      return {
        ...state,
        todos: copy,
      };
    case EDIT_TODO:
      console.log(payload);
      return {
        ...state,
        isEditing: !payload,
      };
    case FILTER_ACTIVE:
      console.log(payload);
      return {
        ...state,
        todos: payload,
      };
    case FILTER_COMPLETED:
      console.log(payload);
      return {
        ...state,
        todos: payload.filter((todo) => todo.done),
      };
    case REMOVE_COMPLETED:
      console.log(payload);
      return {
        ...state,
        todos: payload.filter((todo) => !todo.done),
      };
    case DISPLAY_ALL:
      console.log(payload);
      return {
        ...state,
        todos: payload,
      };
    case SET_CURRENT_FILTER:
      console.log(payload);
      return {
        ...state,
        currentFilter: payload,
      };
    case FILTER_TODOS:
      console.log(payload);
      return {
        ...state,
        filteredTasks: payload,
      };
    default:
      return state;
  }
};

export { appReducer };
