import React from 'react';
import AuthenticatedRoute from '../../routes/AuthenticatedRoute';

const Account = React.lazy(() => import('.'));

const routes = (
    <AuthenticatedRoute path="/account" component={Account} key="/account" exact />
);

export default routes;
