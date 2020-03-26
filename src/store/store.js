import {createStore, applyMiddleware, compose} from "redux";
import {rootReducer} from "./reducers/reducers";
import thunk from "redux-thunk";

function getReduxDevToolsOrCompose() {
  const isDev = process.env.NODE_ENV.toLowerCase() === 'development';
  
  return isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
}

const composeEnhancers = getReduxDevToolsOrCompose();

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
