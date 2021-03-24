import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { getPlayerCourts } from '../../services/players';

import { FaTrashAlt } from 'react-icons/fa';

import './MyCourts.css';

const MyCourts = () => {
    const history = useHistory();
    const { id } = useParams();
    const [courts, setCourts] = useState();

    useEffect(() => {
        (async () => {
            const fetchedCourts = await getPlayerCourts(id);

            setCourts(fetchedCourts);
        })();
    }, [id]);

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
                <div className="my-court-list">
                    <div className="my-court" key={court.id}>
                        {court.name}
                    </div>
                    <div className="trash-can">
                        <FaTrashAlt />
                    </div>
                </div>
            ))}
        </>
    ) : null;
};

export default MyCourts;
