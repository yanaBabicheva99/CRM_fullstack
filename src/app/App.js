import React from 'react';
import './style/index.module.scss';
import Login from "./components/login/login";
import {Route, Routes} from 'react-router-dom';
import RegisterForm from "./components/registerForm/registerForm";
import LoginForm from "./components/loginForm/loginForm";

function App() {
    return (
        <div className="App">
            <Login>
                <Routes>
                    <Route path='/register' element={<RegisterForm />}/>
                    <Route path='/login' element={<LoginForm />}/>
                </Routes>
            </Login>
        </div>
    );
}

export default App;
