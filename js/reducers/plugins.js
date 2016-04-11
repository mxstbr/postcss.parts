import { LOAD_PLUGINS_SUCCESS } from "../actions/Plugins";

const INITIAL_STATE = [];

const pluginsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOAD_PLUGINS_SUCCESS: 
            return action.plugins;
        default:
            return state;
    }
}

export default pluginsReducer;