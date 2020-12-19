import { combineReducers } from "redux";
import reportReducer from "./reducers/reportReducer";

const rootReducer = combineReducers({
  reportReducer: reportReducer,
});

export default rootReducer;
