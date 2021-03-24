import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import './NavBar.css';
import logo from '../../../media/black_logo.png';
import { logout } from '../../../store/session';

const NavBar = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.session.user);

    const onLogout = async () => {
        dispatch(logout());
    };

    const handleChange = (e) => {
        if (e.target.value === 'profile') {
            history.push(`/players/${user.id}`);
        }
        if (e.target.value === 'courts') {
            history.push(`/players/${user.id}`);
        }
        if (e.target.value === 'hits') {
            history.push(`/players/${user.id}`);
        }
        if (e.target.value === 'requests') {
            history.push(`/players/${user.id}`);
        }
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
                        <div>
                            Welcome back, {user.username}
                            <select
                                id="home-page-dropdown"
                                onChange={handleChange}
                            >
                                <option defaultValue=""></option>
                                <option value="profile" key="profile">
                                    My Profile
                                </option>
                                <option value="courts" key="courts">
                                    My Courts
                                </option>
                                <option value="hits" key="hits">
                                    My Hits
                                </option>
                                <option value="requests" key="requests">
                                    My Requests
                                </option>
                            </select>
                        </div>
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
