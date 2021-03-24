import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { getPlayerCourts } from '../../services/players';
import { removeCourt } from '../../services/courts';

import { FaTrashAlt } from 'react-icons/fa';

import './MyCourts.css';

const MyCourts = () => {
    const history = useHistory();
    const { id } = useParams();
    const [courts, setCourts] = useState();

    const removeCourtHandler = async (e) => {
        await removeCourt(e.currentTarget.id);
        const fetchedCourts = await getPlayerCourts(id);
        setCourts(fetchedCourts);
    };

    useEffect(() => {
        (async () => {
            const fetchedCourts = await getPlayerCourts(id);
            setCourts(fetchedCourts);
        })();
    });

    return courts ? (
        <>
            <nav className="my-courts-nav">
                <div className="my-courts-home-holder">
                    <div
                        className="my-courts-home"
                        onClick={() => history.push('/')}
                    >
                        Home
                    </div>
                </div>
                <div className="my-courts-title-holder">
                    <div className="my-courts-title">My Courts</div>
                </div>
                <div className="my-courts-back-holder">
                    <div
                        className="my-courts-back"
                        onClick={() => history.goBack()}
                    >
                        Back
                    </div>
                </div>
            </nav>
            {courts.map((court) => (
                <div className="my-court-list" key={court.id}>
                    <div className="my-court">{court.name}</div>
                    <div
                        className="trash-can"
                        onClick={removeCourtHandler}
                        id={court.id}
                    >
                        <FaTrashAlt />
                    </div>
                </div>
            ))}
        </>
    ) : null;
};

export default MyCourts;
