import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";

// Redux
import { Provider } from "react-redux";

import configureStore from "./store";
import history from "./utils/history";

import "./App.css";
import "antd/dist/antd.css";

const initialState = {};
const store = configureStore(initialState, history);

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes />
      </Router>
    </Provider>
  );
};

export default App;
