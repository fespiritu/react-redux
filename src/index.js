import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import "bootstrap/dist/css/bootstrap.min.css";
import "./dashboard.css";

import "@fortawesome/fontawesome-free/css/all.min.css";

//redux stuffs
import { Provider } from "react-redux";
import configureStore from "./store";

ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
