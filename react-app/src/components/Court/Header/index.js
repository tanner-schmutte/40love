import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import logo from '../../../media/black_logo.png';

import { getCourt, removeCourt } from '../../../services/courts';
import { courtCheck } from '../../../store/court';

import './Header.css';

const Header = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const courtAdded = useSelector((state) => state.court.court);

    const [court, setCourt] = useState();

    const { id } = useParams();

    const removeCourtHandler = async () => {
        await removeCourt(id);
        dispatch(courtCheck(id));
    };

    useEffect(() => {
        dispatch(courtCheck(id));
    }, [id]);

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

            {courtAdded && (
                <div className="button-holder">
                    <div className="remove-court-button">
                        <button onClick={removeCourtHandler}>
                            Remove Court
                        </button>
                    </div>
                    <div className="back-to-home-button">
                        <button onClick={() => history.push('/')}>
                            Back to Map
                        </button>
                    </div>
                </div>
            )}
            {!courtAdded && (
                <div className="back-to-home-button">
                    <button onClick={() => history.push('/')}>
                        Back to Map
                    </button>
                </div>
            )}
        </nav>
    ) : null;
};

export default Header;
