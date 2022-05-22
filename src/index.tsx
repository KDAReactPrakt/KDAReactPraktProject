import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {rootReducer} from "./services/reducers";
import { Provider } from 'react-redux';
import {wsActions} from "./services/actions/wsConnection";
import {wsActionsUser} from "./services/actions/wsConnectionUser"
import {WS_URL_ALL, WS_URL_OWNER} from "./data/data";
import {socketMiddleware} from "./services/middleware/wsConnection";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(
    thunk,
    socketMiddleware(WS_URL_ALL, wsActions, false),
    socketMiddleware(WS_URL_OWNER, wsActionsUser, true),
));

export const store = createStore(rootReducer, enhancer);

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
