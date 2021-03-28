import React, { useState, useEffect } from 'react';

import { getPlayer } from '../../../../services/players';

import './Username.css';

const Username = ({ requestee }) => {
    const [player, setPlayer] = useState();

    useEffect(() => {
        (async () => {
            const query = await getPlayer(requestee);

            setPlayer(query);
        })();
    }, [requestee]);

    return player ? (
        <div className="my-reqs-sent-username">{player.username}</div>
    ) : null;
};

export default Username;
