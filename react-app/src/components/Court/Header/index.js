import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import logo from '../../../media/black_logo.png';

import { getCourt } from '../../../services/courts';

import './Header.css';

const Header = () => {
    const history = useHistory();

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
            <div className="logo-court-container">
                <img className="logo-court" src={logo} alt="" href="/" />
            </div>
            <div className="court-info">
                <div className="court-name">{court.name}</div>
                <div className="court-address">{court.address}</div>
            </div>
            <div className="back-to-home-button">
                <button onClick={() => history.push('/')}>Back to Map</button>
            </div>
        </nav>
    ) : null;
};

export default Header;
