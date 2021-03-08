import React from 'react';
// import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import logo from '../../../media/black_logo.png';

import { getCourt } from '../../../services/courts';

const NavBar = () => {
    // const user = useSelector((state) => state.session.user);
    const { id } = useParams();
    const court = getCourt(id);

    return (
        <nav className="navbar">
            <div className="logo-container">
                <div>
                    <img className="logo" src={logo} alt="" />
                </div>
            </div>
            <div className="court-info">
                <div>{court.name}</div>
                <div>{court.address}</div>
            </div>
            <div className="back-to-home-button">
                <button>Back to Map</button>
            </div>
        </nav>
    );
};

export default NavBar;
