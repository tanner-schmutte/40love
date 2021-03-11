import React, { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import logo from '../../../media/black_logo.png';

import { getCourt } from '../../../services/courts';

import './Header.css';

const Header = () => {
    // const user = useSelector((state) => state.session.user);

    const [court, setCourt] = useState();

    const { id } = useParams();

    useEffect(() => {
        (async () => {
            const fetchedCourt = await getCourt(id);

            setCourt(fetchedCourt);
        })();
    }, [id]);

    return court ? (
        <nav className="header">
            <div className="logo-container">
                <a href="/">
                    <img className="logo" src={logo} alt="" href="/" />
                </a>
            </div>
            <div className="court-info">
                <div className="court-name">{court.name}</div>
                <div className="court-address">{court.address}</div>
            </div>
            <div className="back-to-home-button">
                <a href="/">
                    <button>Back to Map</button>
                </a>
            </div>
        </nav>
    ) : null;
};

export default Header;
