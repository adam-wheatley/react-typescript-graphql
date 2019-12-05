import React from 'react';
import AuthenticatedRoute from '../../routes/AuthenticatedRoute';

const Dashboard = React.lazy(() => import('.'));

const routes = (
    <AuthenticatedRoute path="/dashboard" component={Dashboard} key="/dashboard" exact />
);

export default routes;
