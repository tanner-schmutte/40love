import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import logo from '../../../media/black_logo.png';
import { logout } from '../../../services/auth';

const NavBar = ({ authenticated }, { setAuthenticated }) => {

    const onLogout = async () => {
        await logout();
        setAuthenticated(false);
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
                {!authenticated && (
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
                                setAuthenticated={setAuthenticated}
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
                {authenticated && (
                    <div className="authenticated">
                        <div>Welcome back, 'name'</div>
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
