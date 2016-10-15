import React from "react";
import { render } from "react-dom";

import { applyRouterMiddleware, Router, Route, browserHistory, IndexRoute } from "react-router";
import { useScroll } from 'react-router-scroll';

import App from "./components/App.react";
import TagList from "./components/TagList.react";
import NotFound from "./components/NotFound";
import PluginList from "./components/PluginList.react";

import { syncHistoryWithStore } from "react-router-redux";
import store from "./stores/CreateStore";

import { Provider } from "react-redux";
import "whatwg-fetch";

import globalStyes from './global-styles';
import Tags from "./tags";

const history = syncHistoryWithStore(browserHistory, store);

var routes = (
  <Router history={history} render={applyRouterMiddleware(useScroll())}>
    <Route path="/" component={App}>
      <IndexRoute component={TagList} />
      {
        Tags.map((tag) => <Route key={tag} path={`tag/${tag}`} component={PluginList} tag={tag} />)
      }
        <Route path="*" component={NotFound} />
    </Route>
  </Router>
)

render(
    <Provider store={store}>
	    {routes}
    </Provider>,
	document.getElementById('app')
);
