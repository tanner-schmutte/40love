import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { getCourt } from '../../../services/courts';

import './Court.css';

const Court = ({ courtId }) => {
    const history = useHistory();
    const [court, setCourt] = useState();

    useEffect(() => {
        (async () => {
            const query = await getCourt(courtId);

            setCourt(query);
        })();
    }, [courtId]);

    return court ? (
        <div
            className="my-hits-court"
            onClick={() => history.push(`/courts/${courtId}`)}
        >
            @{court.name}
        </div>
    ) : null;
};

export default Court;
