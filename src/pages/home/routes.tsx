import React from 'react'
import UnauthenticatedRoute from '../../routes/UnauthenticatedRoute'

const Home = React.lazy(() => import('.'));

const routes = (
    <UnauthenticatedRoute path="/" exact component={Home} />
)

export default routes
