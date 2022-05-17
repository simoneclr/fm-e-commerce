import React from 'react';
import { createRoot } from "react-dom/client"
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import './index.css';

import store from "./store/store"
import App from './App';

const container = document.getElementById("root")
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App/>
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
