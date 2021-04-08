import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import { authenticate } from './store/session';

import Home from './components/Home';
import Court from './components/Court';
import Profile from './components/Profile';
import MyCourts from './components/MyCourts';
import MyHits from './components/MyHits';
import MyRequests from './components/MyRequests';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(authenticate());
    }, [dispatch]);

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true}>
                    <Home />
                </Route>
                <Route path="/login" exact={true}>
                    <LoginForm />
                </Route>
                <Route path="/signup" exact={true}>
                    <SignUpForm />
                </Route>
                <Route path="/courts/:id" exact={true}>
                    <Court />
                </Route>
                <Route path="/players/:id" exact={true}>
                    <Profile />
                </Route>
                <Route path="/players/:id/courts" exact={true}>
                    <MyCourts />
                </Route>
                <Route path="/players/:id/hits" exact={true}>
                    <MyHits />
                </Route>
                <Route path="/players/:id/requests" exact={true}>
                    <MyRequests />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
