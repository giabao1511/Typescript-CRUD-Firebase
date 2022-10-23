import { combineReducers } from "redux";
import CustomerReducer from "./reducers/customerReducers";
const rootReducer = combineReducers({
  customer: CustomerReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
