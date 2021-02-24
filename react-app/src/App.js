import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './services/auth';
import { useUser } from './context/UserContext';
import Home from './components/Home';

function App() {
    const { user, authenticated, setAuthenticated } = useUser();

    return (
        <BrowserRouter>
            {/* <NavBar setAuthenticated={setAuthenticated} /> */}

            {/* <Home
                setAuthenticated={setAuthenticated}
                authenticated={authenticated}
            /> */}

            <Switch>
                <Route path="/" exact={true} authenticated={authenticated}>
                    <Home
                        authenticated={authenticated}
                        setAuthenticated={setAuthenticated}
                        user={user}
                    />
                </Route>
                <Route path="/login" exact={true}>
                    <LoginForm
                        authenticated={authenticated}
                        setAuthenticated={setAuthenticated}
                    />
                </Route>
                <Route path="/signup" exact={true}>
                    <SignUpForm
                        authenticated={authenticated}
                        setAuthenticated={setAuthenticated}
                    />
                </Route>

                {/* <ProtectedRoute
                    path="/users"
                    exact={true}
                    authenticated={authenticated}
                >
                    <UsersList />
                </ProtectedRoute>
                <ProtectedRoute
                    path="/users/:userId"
                    exact={true}
                    authenticated={authenticated}
                >
                    <User />
                </ProtectedRoute>
                <ProtectedRoute
                    path="/"
                    exact={true}
                    authenticated={authenticated}
                >
                    <h1>My Home Page</h1>
                </ProtectedRoute> */}
            </Switch>
        </BrowserRouter>
    );
}

export default App;
