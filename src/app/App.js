import React, {useState} from 'react';
import {Route, Routes as Switch} from 'react-router-dom';

import Login from "./components/login/Login";
import RegisterForm from "./components/form/registerForm/RegisterForm";
import LoginForm from "./components/form/loginForm/LoginForm";
import Layout from "./components/layout/Layout";
import Main from "./components/pages/main/Main";
import Products from "./components/pages/products/Products";
import Sales from "./components/pages/sales/Sales";
import Personal from "./components/pages/personal/Personal";
import {ModalContext} from "./context/ModalContext";

import './style/index.module.scss';
import { Routes } from './constants'
import {ProductsProvider} from "./hooks/useProducts";
import {ModalContextAction} from "./context/ModalContextAction";
import {SellProvider} from "./hooks/useSellProducts";

function App() {
    const [visible, setVisible] = useState({});
    const [open, setOpen] = useState({});
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
        <ModalContext.Provider value={[visible, setVisible]}>
            <ModalContextAction.Provider value={[open, setOpen]}>
        <div className="App">
            <ProductsProvider>
                <SellProvider>
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
                </SellProvider>
            </ProductsProvider>
        </div>
            </ModalContextAction.Provider>
        </ModalContext.Provider>
    );
}

export default App;
