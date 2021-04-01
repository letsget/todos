import { createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { persistStore } from "redux-persist";
import rootReducer from "./reducers";

const store = createStore(rootReducer);

const persistor = persistStore(store);

export { store, persistor };
