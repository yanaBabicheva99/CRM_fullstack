import React from 'react';
import {Route, Routes as Switch, useLocation} from 'react-router-dom';

import Login from "./components/login/Login";
import RegisterFormic from "./components/registerForm/RegisterFormic";
import LoginFormic from "./components/loginForm/LoginFormic";
import Layout from "./components/layout/Layout";
import Main from "./components/pages/main/Main";
import Products from "./components/pages/products/Products";
import Sales from "./components/pages/sales/Sales";
import Personal from "./components/pages/personal/Personal";

import './style/index.module.scss';
import { Routes } from './constants'

function App() {
    const pages = [
        {
            title: 'Sales statistics',
            subtitle: 'Welcome to CRM dashboard',
            path: Routes.MAIN,
            component: <Main />
        },
        {
            title: 'My product',
            subtitle: 'Product table',
            path: Routes.PRODUCTS,
            component: <Products />
        },
        {
            title: 'My sales',
            subtitle: 'Sales table',
            path: Routes.SALES,
            component: <Sales />
        },
        {
            title: 'Personal Cabinet',
            subtitle: 'Information about your account',
            path: Routes.PERSONAL,
            component: <Personal />
        }
    ];

    const loginPages = [
        {
            title: 'Sign in',
            path: Routes.LOGIN,
            component: <LoginFormic />
        },
        {
            title: 'Create an account',
            path: Routes.REGISTER,
            component: <RegisterFormic />
        },
    ]
    const { pathname } = useLocation();
    console.log(pathname);
    return (
        <div className="App">
            <Switch>
                {
                    pages.map(item => (
                        <Route
                            key={item.title}
                            path={item.path}
                            element={
                                <Layout
                                    title={item.title}
                                    subtitle={item.subtitle}
                                >
                                    {item.component}
                                </Layout>
                        }/>
                    ))
                }
                {
                    loginPages.map(item => (
                        <Route
                            key={item.title}
                            path={item.path}
                            element={
                            <Login title={item.title}>
                                {item.component}
                            </Login>
                        }/>
                    ))
                }
            </Switch>
        </div>
    );
}

export default App;
