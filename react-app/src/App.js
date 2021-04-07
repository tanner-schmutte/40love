import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
// import ProtectedRoute from './components/auth/ProtectedRoute';
// import UsersList from './components/UsersList';
// import User from './components/User';
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
            {/* <NavBar setAuthenticated={setAuthenticated} /> */}

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
