import React from 'react';
import './style/index.module.scss';
import Login from "./components/login/Login";
import {Route, Routes} from 'react-router-dom';
import RegisterFormic from "./components/registerForm/RegisterFormic";
import LoginFormic from "./components/loginForm/LoginFormic";

function App() {
    return (
        <div className="App">
            <Login>
                <Routes>
                    <Route path='/register' element={<RegisterFormic />}/>
                    <Route path='/login' element={<LoginFormic />}/>
                </Routes>
            </Login>
        </div>
    );
}

export default App;
