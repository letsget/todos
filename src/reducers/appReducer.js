import {
  ADD_NEW_TODO,
  GET_CURRENT_KEY,
  HANDLE_COMPLETED,
  REMOVE_TODO,
  SET_EDIT_MODE,
  CANCEL_EDIT_MODE,
  ADD_EDITED_TODO,
  REMOVE_COMPLETED,
  SET_CURRENT_FILTER,
} from "actions/App";

const initialState = {
  todos: [
    {
      id: Date.now(),
      text: "Learn React",
      time: "12:25",
      status: "active",
    },
    {
      id: 1,
      text: "Learn Redux",
      time: "12:27",
      status: "active",
    },
    {
      id: 2,
      text: "Ask Serhio questions about JS",
      time: "12:29",
      status: "completed",
    },
    {
      id: 3,
      text: "Learn async code from code.mu",
      time: "12:45",
      status: "active",
    },
  ],
  currentFilter: "all",
  currentKey: null,
  filters: ["all", "active", "completed"],
};

const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_NEW_TODO:
      if (payload.trim()) {
        return {
          ...state,
          inputValue: "",
          currentKey: null,
          todos: state.todos.concat({
            id: Math.random(),
            text: payload,
            time: new Date().getHours() + " " + new Date().getMinutes(),
            status: "active",
          }),
        };
      } else {
        return {
          ...state,
        };
      }
    case GET_CURRENT_KEY:
      return {
        ...state,
        currentKey: payload,
      };
    case HANDLE_COMPLETED: {
      const { i, status, id } = payload;
      console.log("payload", payload);
      const updated = [...state.todos];
      updated[i].status = status === "active" ? "completed" : "active";
      return {
        ...state,
        todos: updated,
      };
    }
    case REMOVE_TODO: {
      console.log("payload", payload);
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload),
      };
    }
    case SET_EDIT_MODE:
      const cloned = [...state.todos];
      if (cloned.some((e) => e.status === "editing")) {
        cloned.map((e) => (e.status === "editing" ? (e.status = "active") : e));
      }
      cloned[payload].status = "editing";
      return {
        ...state,
        todos: cloned,
      };
    case CANCEL_EDIT_MODE:
      const { idx, taskStatus } = payload;
      const canceledCopy = [...state.todos];
      canceledCopy[idx].status = taskStatus;
      return {
        ...state,
        todos: canceledCopy,
      };
    case ADD_EDITED_TODO:
      const { index, editedText, editedStatus } = payload;
      const edited = [...state.todos];
      edited[index].text = editedText;
      edited[index].status = editedStatus;
      return {
        ...state,
        todos: edited,
      };
    case REMOVE_COMPLETED:
      return {
        ...state,
        todos: payload.filter(({ status }) => status === "active"),
      };
    case SET_CURRENT_FILTER:
      return {
        ...state,
        currentFilter: payload,
      };
    default:
      return state;
  }
};

export { appReducer };
