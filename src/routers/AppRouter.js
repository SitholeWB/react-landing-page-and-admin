import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import LandingPage from '../components/LandingPage';
import AboutPage from '../components/AboutPage';
import HomePage from '../components/HomePage';
import ContactPage from '../components/ContactPage';
import FAQPage from '../components/FAQPage';
import NotFoundPage from '../components/NotFoundPage';

import AnyRouter from './AnyRouter';
import PublicRoute from './PublicRouter';
import PrivateRoute from './PrivateRouter';
import LoginPage from '../components/LoginPage';
import RegisterPage from '../components/RegisterPage';

import VenuePage from '../components/VenuePage';

import UniversityPage from '../components/UniversityPage';



const AppRouter = () => (
  <BrowserRouter>
    <div>

      <Switch>

        <PublicRoute path="/" component={LandingPage} exact={true} />
        <PrivateRoute path="/home" component={HomePage} />

        <PrivateRoute path="/universities" component={UniversityPage} exact={true} />

        <PrivateRoute path="/venues" component={VenuePage} exact={true} />

        <AnyRouter path="/login" component={LoginPage} />
        <AnyRouter path="/register" component={RegisterPage} />
        <PublicRoute path="/about" component={AboutPage} />
        <PublicRoute path="/contact" component={ContactPage} />
        <PublicRoute path="/FAQ" component={FAQPage} />

        <AnyRouter component={NotFoundPage} />
      </Switch>

    </div>
  </BrowserRouter>
);

export default AppRouter;