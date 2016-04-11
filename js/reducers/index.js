import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import plugins from "./plugins";

const rootReducers = combineReducers({
    plugins,
    routing: routerReducer
});

export default rootReducers;