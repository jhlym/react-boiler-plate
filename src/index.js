import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/style';
import App from './App';
import * as serviceWorker from './serviceWorker';
// react router
import { BrowserRouter } from 'react-router-dom';
// redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
// util
import { HelmetProvider } from 'react-helmet-async';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  // reducer
  null,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);
// parameter에 root saga function
sagaMiddleware.run(null);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
