/**
 * Actions
 */

import plugins from 'postcss-plugins';

export const LOAD_PLUGINS = 'LOAD_PLUGINS';
export const LOAD_PLUGINS_SUCCESS = 'LOAD_PLUGINS_SUCCESS';

// Load the newest plugin list
export const loadPlugins = () => {
  return (dispatch) => {
    dispatch(receiveLoadPlugins());

    fetch('https://raw.githubusercontent.com/himynameisdave/postcss-plugins/master/plugins.json')
      .then(checkStatus)
      .then(res => res.json())
      .then((data) => {
        dispatch(receiveLoadPluginsSuccess(data))
      }).catch(() => {
        dispatch(receiveLoadPluginsSuccess(plugins));
      });
  };
}

// Plugins loaded
const receiveLoadPluginsSuccess = (plugins) => {
  return {
    type: LOAD_PLUGINS_SUCCESS,
    plugins,
  }
}

// Loading plugins…
const receiveLoadPlugins = () => {
  return {
    type: LOAD_PLUGINS,
  }
}

// Check the status of a fetch response
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}
