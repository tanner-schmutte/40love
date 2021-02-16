import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../../auth/LogoutButton';
import './NavBar.css';
import logo from '../../../media/black_logo.png';

const NavBar = ({ authenticated, setAuthenticated }) => {
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
                        <LogoutButton setAuthenticated={setAuthenticated} />
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
