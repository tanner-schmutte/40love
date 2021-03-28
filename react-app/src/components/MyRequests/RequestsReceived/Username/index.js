import React, { useState, useEffect } from 'react';

import { getPlayer } from '../../../../services/players';

import './Username.css'

const Username = ({ requester }) => {
    const [player, setPlayer] = useState();

    useEffect(() => {
        (async () => {
            const query = await getPlayer(requester);

            setPlayer(query);
        })();
    }, [requester]);

    return player ? <div className="my-reqs-recd-username">{player.username}</div> : null;
};

export default Username;
