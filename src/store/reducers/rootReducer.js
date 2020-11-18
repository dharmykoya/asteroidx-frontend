import { combineReducers } from "redux";
import storeReducer from "./store.reducer";


const rootReducer = combineReducers({
  store: storeReducer
});

export default rootReducer;
