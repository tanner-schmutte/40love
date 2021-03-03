import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import logo from '../../../media/black_logo.png';
import { logout } from '../../../store/session';

const NavBar = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.session.user);

    const onLogout = async () => {
        dispatch(logout());
    };

    return (
        <nav className="navbar">
            <div className="logo-container">
                <div>
                    <img className="logo" src={logo} alt="" />
                </div>
                <div className="logo-title">40Love</div>
            </div>
            <div className="auth-and-banner">
                {!user && (
                    <div className="login-signup">
                        <div>
                            <NavLink
                                to="/login"
                                exact={true}
                                activeClassName="active"
                                className="login"
                            >
                                Login
                            </NavLink>
                            <NavLink
                                to="/signup"
                                exact={true}
                                activeClassName="active"
                                className="sign-up"
                            >
                                Sign Up
                            </NavLink>
                        </div>
                    </div>
                )}
                {user && (
                    <div className="authenticated">
                        <div>Welcome back, {user.username}</div>
                        <button onClick={onLogout}>Logout</button>
                    </div>
                )}

                <div className="banner">
                    Servin' up hits. <br /> Find your courts below.
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
