import React from 'react';
import UnauthenticatedRoute from '../../routes/UnauthenticatedRoute';

const Login = React.lazy(() => import('.'));

const routes = (
    <UnauthenticatedRoute path="/login" component={Login} key="/login" exact />
);

export default routes;
