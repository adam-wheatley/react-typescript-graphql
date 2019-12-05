import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Account from '../pages/account/routes';
import Home from "../pages/home/routes";
import Login from "../pages/login/routes";
import Dashboard from '../pages/dashboard/routes';
import Navbar from '../components/Navbar';
import { Loading } from '../components/Loading';

const Routes: React.FC = () => {
  return (
    <Router>
      <>
        <Navbar />
        <Suspense fallback={<Loading />}>
          <Switch>
            {Account}
            {Home}
            {Login}
            {Dashboard}
          </Switch>
        </Suspense>
      </>
    </Router>
  );
};

export default Routes;
