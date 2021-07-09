import React from 'react';
import { Switch, Route } from 'react-router-dom';

import DashboardComponent from 'components/DashboardComponent';

export default () => {
    return (
        <Switch>
            <Route path="/test"  component={DashboardComponent} />
        </Switch>
    );
}