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
                <div className="auth-links">
                    {!authenticated && (
                        <div>
                            <NavLink
                                to="/login"
                                exact={true}
                                activeClassName="active"
                                ClassName="login"
                            >
                                Login
                            </NavLink>
                        </div>
                    )}
                    {!authenticated && (
                        <div>
                            <NavLink
                                to="/sign-up"
                                exact={true}
                                activeClassName="active"
                                ClassName="sign-up"
                            >
                                Sign Up
                            </NavLink>
                        </div>
                    )}
                    {/* <div>
                    <NavLink to="/users" exact={true} activeClassName="active">
                        Users
                    </NavLink>
                </div> */}
                    {authenticated && (
                        <div>
                            <LogoutButton setAuthenticated={setAuthenticated} />
                        </div>
                    )}
                </div>
                <div className="banner">
                    Servin' up hits. <br/> Find your courts below.
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
