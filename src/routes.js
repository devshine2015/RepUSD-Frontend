import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';

import history from 'utils/history';

import LandingPage from 'pages/LandingPage';
import DashboardPage from 'pages/DashboardPage';
import SearchSmartPage from 'pages/SearchSmartPage';
import ReputationPage from 'pages/ReputationPage';
import BorrowPage from 'pages/BorrowPage';
import EarningPage from 'pages/EarningPage';
import HeaderComponent from 'components/HeaderComponent';
import FooterComponent from 'components/FooterComponent';


const { Header, Content, Footer } = Layout;

const Routes = () => {
    const { location: { pathname } } = history;
    return (
        <Layout className="container">
            <Header className="header">
                <HeaderComponent selectedItem={pathname} />
            </Header>
            <Content>
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/dashboard" component={DashboardPage} />
                    <Route exact path="/search_smart" component={SearchSmartPage} />
                    <Route exact path="/reputation" component={ReputationPage} />
                    <Route exact path="/borrow" component={BorrowPage} />
                    <Route exact path="/earnings" component={EarningPage} />
                </Switch>
            </Content>
            <Footer className="footer">
                <FooterComponent />
            </Footer>
        </Layout>
    );
};

export default Routes;