import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { appReducer } from "./appReducer";

const persistConfig = {
  key: "todos",
  storage,
  whitelist: ["app"],
};

const rootReducer = combineReducers({
  app: appReducer,
});

export default persistReducer(persistConfig, rootReducer);
