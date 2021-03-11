import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import logo from '../../../media/black_logo.png';

import { getCourt, courtCheck } from '../../../services/courts';

import './Header.css';

const Header = () => {
    const history = useHistory();

    const [court, setCourt] = useState();
    const [courtAdded, setCourtAdded] = useState();

    const { id } = useParams();

    useEffect(() => {
        (async () => {
            const fetchedCourt = await getCourt(id);
            const courtChecker = await courtCheck(id);

            setCourt(fetchedCourt);
            setCourtAdded(courtChecker.added);
        })();
    }, [id]);

    if (courtAdded) {
        return court ? (
            <nav className="header">
                <div className="logo-court-container">
                    <img className="logo-court" src={logo} alt="" href="/" />
                </div>
                <div className="court-info">
                    <div className="court-name">{court.name}</div>
                    <div className="court-address">{court.address}</div>
                </div>
                <div className="button-holder">
                    <div className="remove-court-button">
                        <button>Remove Court</button>
                    </div>
                    <div className="back-to-home-button">
                        <button onClick={() => history.push('/')}>
                            Back to Map
                        </button>
                    </div>
                </div>
            </nav>
        ) : null;
    }

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
