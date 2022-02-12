import { combineReducers } from "redux";
import getQuestions from "./reducer/questions";
import userReducer from "./reducer/userReducer";
import loadingReducer from "./reducer/loadingReducer";
import ProfileReducer from "./reducer/ProfileReducer";

export const rootReducer = combineReducers({
  getQuestions,
  userReducer,
  ProfileReducer,
  loadingReducer,
});
