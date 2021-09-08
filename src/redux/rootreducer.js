import { combineReducers } from "redux";
import imagesReducer from "./imagesReducer";
const rootreducer = combineReducers({
  images: imagesReducer,
});

export default rootreducer;
