import React from 'react';
import history from 'utils/history';

import DashboardContainer from 'containers/DashboardContainer';

export default () => {
    const { location: { pathname } } = history;

    return (
        <DashboardContainer path={pathname} />
    );
}