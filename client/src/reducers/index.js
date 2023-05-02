import { combineReducers } from "redux";
import authReducer from "./auth";
import projectReducer from "./project";
import userprojectReducer from "./userproject";

export default combineReducers({
  authReducer,
  projectReducer,
  userprojectReducer,
});
