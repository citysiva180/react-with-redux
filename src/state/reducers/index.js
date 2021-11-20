//Combine reducers is a default function from redux. Using this you get to combin all the reducers togather and then return to store, which is then accessed by all child components
import { combineReducers } from "redux";
import bankReducer from "./bankReducer";

const reducers = combineReducers({
  bank: bankReducer,
});

export default reducers;
