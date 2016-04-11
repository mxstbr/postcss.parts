import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";

import { routerMiddleware } from 'react-router-redux'
import { browserHistory } from "react-router";

// Apply the middleware to the store
const routingMiddleware = routerMiddleware(browserHistory)

const store = createStore(rootReducer, applyMiddleware(thunk, routingMiddleware));

export default store;