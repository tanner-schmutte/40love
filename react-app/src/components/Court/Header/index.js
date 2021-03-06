import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { getCourt, removeCourt } from '../../../services/courts';
import { courtCheck } from '../../../store/court';

import logo from '../../../media/black_logo.png';

import './Header.css';

const Header = () => {
    const { id } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const courtAdded = useSelector((state) => state.court.court);
    const [court, setCourt] = useState();

    const removeCourtHandler = async () => {
        await removeCourt(id);
        dispatch(courtCheck(id));
    };

    useEffect(() => {
        dispatch(courtCheck(id));
    });

    useEffect(() => {
        (async () => {
            const fetchedCourt = await getCourt(id);

            setCourt(fetchedCourt);
        })();
    }, [id]);

    return court ? (
        <nav className="header">
            <div
                className="logo-court-container"
                onClick={() => history.push('/')}
            >
                <img className="logo-court" src={logo} alt="" />
            </div>
            <div className="court-info">
                <div className="court-name">{court.name}</div>
                <div className="court-address">{court.address}</div>
            </div>

            {courtAdded && (
                <div className="button-holder">
                    <div className="remove-court-button">
                        <button onClick={removeCourtHandler}>
                            Remove Courts
                        </button>
                    </div>
                    <div className="back-button">
                        <button onClick={() => history.goBack()}>
                            Back
                        </button>
                    </div>
                </div>
            )}
            {!courtAdded && (
                <div className="back-button">
                    <button onClick={() => history.goBack()}>
                        Back
                    </button>
                </div>
            )}
        </nav>
    ) : null;
};

export default Header;
