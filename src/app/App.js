import React from 'react';
import {Route, Routes as Switch, useLocation} from 'react-router-dom';

import Login from "./components/login/Login";
import RegisterFormic from "./components/registerForm/RegisterFormic";
import LoginFormic from "./components/loginForm/LoginFormic";
import Layout from "./components/layout/Layout";

import './style/index.module.scss';
import { Routes } from './constants'

function App() {
    const { pathname } = useLocation();
    console.log(pathname);
    return (
        <div className="App">
            <Switch>
                <Route path='/' element={
                    <Layout title={'1111'} subtitle={'hhhhh'}>
                        <div>1122</div>
                    </Layout>
                } />
                <Route path='/1' element={<Layout><div>1133</div></Layout>} />
                <Route path='/2' element={<Layout><div>1144</div></Layout>} />
                <Route path='/3' element={<Layout><div>11555</div></Layout>} />
                <Route path='/register' element={<Login><RegisterFormic/></Login>}/>
                <Route path={Routes.LOGIN} element={<Login><LoginFormic/></Login>}/>
            </Switch>
        </div>
    );
}

export default App;
