import React, { useState, useEffect } from 'react';

import { getCourt } from '../../../../services/courts';

import './Court.css';

const Court = ({ courtId }) => {
    const [court, setCourt] = useState();

    useEffect(() => {
        (async () => {
            const query = await getCourt(courtId);

            setCourt(query);
        })();
    }, [courtId]);

    return court ? <div className="my-reqs-sent-court">@{court.name}</div> : null;
};

export default Court;