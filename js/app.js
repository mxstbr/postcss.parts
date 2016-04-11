import React from "react";
import { render } from "react-dom";

import { Router, Route, browserHistory, IndexRoute } from "react-router";
import App from "./components/App.react";
import TagList from "./components/TagList.react";
import PluginList from "./components/PluginList.react";

import { syncHistoryWithStore } from "react-router-redux";
import store from "./stores/CreateStore";

import { Provider } from "react-redux";
import "whatwg-fetch";

const history = syncHistoryWithStore(browserHistory, store);

var routes = (
      <Router history={history}>
        <Route path="/" component={App}>
            <IndexRoute component={TagList} />
            <Route path="tag/:tag" component={PluginList} />
        </Route>
      </Router>
)

render(
    <Provider store={store}>
	    {routes}
    </Provider>,
	document.getElementById('app')
);
