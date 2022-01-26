import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const AnyRouter = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (

  <Route {...rest} component={(props) => (
    <React.Fragment>
      <Header />
      <Component {...props} />
      <Footer />
    </React.Fragment>

  )} />
);


// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {
    isAuthenticated: state.authReducer.tokenObject !== null
  };
};

export default connect(mapStateToProps)(AnyRouter);
