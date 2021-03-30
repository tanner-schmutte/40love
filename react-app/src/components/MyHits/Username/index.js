import React, { useState, useEffect } from 'react';

import { getPlayer } from '../../../services/players';

import './Username.css';

const Username = ({ playerId }) => {
    const [player, setPlayer] = useState();

    useEffect(() => {
        (async () => {
            const query = await getPlayer(playerId);

            setPlayer(query);
        })();
    }, [playerId]);

    return player ? (
        <div className="my-hits-username">{player.username}</div>
    ) : null;
};

export default Username;
