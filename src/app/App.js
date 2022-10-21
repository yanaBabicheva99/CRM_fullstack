import React, {useState} from 'react';
import {Route, Routes as Switch} from 'react-router-dom';

import Login from "./components/login/Login";
import RegisterForm from "./components/form/registerForm/RegisterForm";
import LoginForm from "./components/form/loginForm/LoginForm";
import Layout from "./components/layout/Layout";
import Main from "./components/pages/main/Main";
import Products from "./components/pages/products/Products";
import Sales from "./components/pages/sales/Sales";

import './style/index.module.scss';
import { Routes } from './constants'
import {ProductsProvider} from "./hooks/useProducts";

import {SalesProvider} from "./hooks/useSales";
import {ModalProvider} from "./hooks/useModal";
import UserProvider from "./hooks/useUser";
import Personal from "./components/pages/personal/Personal";

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
            component: <LoginForm />
        },
        {
            title: 'Create an account',
            path: Routes.REGISTER,
            component: <RegisterForm />
        },
    ];
    return (
        <ModalProvider>
            <div className="App">
                <UserProvider>
                    <ProductsProvider>
                        {/*<SalesProvider>*/}
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
                        {/*</SalesProvider>*/}
                    </ProductsProvider>
                </UserProvider>
            </div>
        </ModalProvider>
    );
}

export default App;
