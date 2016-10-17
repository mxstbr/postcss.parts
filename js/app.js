import 'whatwg-fetch';
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import {
  applyRouterMiddleware,
  Router,
  Route,
  browserHistory,
  IndexRoute,
} from 'react-router';
import { useScroll } from 'react-router-scroll';
import {
  syncHistoryWithStore,
  routerMiddleware,
} from 'react-router-redux';

import globalStyes from './global-styles';

import App from './components/App';
import TagList from './components/TagList.react';
import NotFound from './components/NotFound';
import PluginList from './components/PluginList';

import rootReducer from './reducers/index';
import Tags from './tags';

// Apply the middleware to the store
const routingMiddleware = routerMiddleware(browserHistory)
const store = createStore(rootReducer, applyMiddleware(thunk, routingMiddleware));
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history} render={applyRouterMiddleware(useScroll())}>
      <Route path="/" component={App}>
        <IndexRoute component={TagList} />
        {Tags.map((tag) => <Route key={tag} path={`tag/${tag}`} component={PluginList} tag={tag} />)}
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  </Provider>,
	document.getElementById('app')
);
