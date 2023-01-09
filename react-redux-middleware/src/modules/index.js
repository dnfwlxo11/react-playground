import { combineActions } from "redux-actions";
import counter from "./counter";

const rootReducer = combineActions({
  counter,
});

export default rootReducer;
