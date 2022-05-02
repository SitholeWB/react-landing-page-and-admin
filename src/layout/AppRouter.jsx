import React from 'react';
import LandingPage from '../pages/LandingPage';
import LoginPage from '../pages/LoginPage';
import ProductsPage from '../pages/ProductsPage';
import SalesPage from '../pages/SalesPage';
import HomePage from '../pages/HomePage';
import OrderHistoryPage from '../pages/OrderHistoryPage';
import ManageProductsPage from '../pages/ManageProductsPage';
import ManageSalesPage from '../pages/ManageSalesPage';
import NotFoundPage from '../pages/NotFoundPage';
import { connect } from 'react-redux';
import { Routes, Route } from "react-router-dom";


function AppRouter(props) {

    return (
        <Routes>
            {!props.isAuthenticated &&
                //public routes
                <React.Fragment>
                    <Route path="/" element={<LandingPage />} exact />
                </React.Fragment>
            }

            {props.isAuthenticated &&
                //private routes
                <React.Fragment>
                    <Route path="/" element={<HomePage />} exact />
                    <Route path="/order-history" element={<OrderHistoryPage />} exact />
                </React.Fragment>
            }
            {props.tokenObject && props.tokenObject?.role?.includes('ADMIN') && (
                <React.Fragment>
                    <Route path="/admin/manage-products" element={<ManageProductsPage />} exact />
                    <Route path="/admin/manage-sales" element={<ManageSalesPage />} exact />
                </React.Fragment>
            )}
            <Route path="/view-products" element={<ProductsPage />} exact />
            <Route path="/on-sale" element={<SalesPage />} exact />
            <Route path='*' element={<NotFoundPage />} />
        </Routes>
    )
};

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
    // Redux Store --> Component
    return {
        isAuthenticated: state.authReducer.tokenObject !== null,
        tokenObject: state.authReducer.tokenObject,
    };
};

export default connect(mapStateToProps)(AppRouter);