import { createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

import { rootReducer } from "./reducers";

const store = createStore(rootReducer);

export { store };
