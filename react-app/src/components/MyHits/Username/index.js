import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { getPlayer } from '../../../services/players';

import './Username.css';

const Username = ({ playerId }) => {
    const history = useHistory();
    const [player, setPlayer] = useState();

    useEffect(() => {
        (async () => {
            const query = await getPlayer(playerId);

            setPlayer(query);
        })();
    }, [playerId]);

    return player ? (
        <div
            className="my-hits-username"
            onClick={() => history.push(`/players/${playerId}`)}
        >
            {player.username}
        </div>
    ) : null;
};

export default Username;
