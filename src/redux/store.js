import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootreducer from "./rootreducer";
const store = createStore(
  rootreducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);
export default store;
