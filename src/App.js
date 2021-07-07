import React from "react";
import { Layout } from "antd";

import LandingPage from "pages/LandingPage";
import HeaderComponent from "components/HeaderComponent";
import FooterComponent from "components/FooterComponent";

// Redux
import { Provider } from "react-redux";
import configureStore from "./store";
import history from "./utils/history";

import "./App.css";
import "antd/dist/antd.css";

const initialState = {};
const store = configureStore(initialState, history);
const { Header, Content, Footer } = Layout;

const App = () => {
  return (
    <Provider store={store}>
      <Layout className="container">
        <Header className="header">
          <HeaderComponent />
        </Header>
        <Content>
          <LandingPage />
        </Content>
        <Footer className="footer">
          <FooterComponent />
        </Footer>
      </Layout>
    </Provider>
  );
};

export default App;
