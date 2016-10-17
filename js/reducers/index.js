/**
 * Root reducer
 */
import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import plugins from "./plugins";

const rootReducer = combineReducers({
  plugins,
  routing: routerReducer
});

export default rootReducer;
