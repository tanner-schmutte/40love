import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { getPlayer } from '../../../../services/players';

import './Username.css';

const Username = ({ requestee }) => {
    const history = useHistory();

    const [player, setPlayer] = useState();

    useEffect(() => {
        (async () => {
            const query = await getPlayer(requestee);

            setPlayer(query);
        })();
    }, [requestee]);

    return player ? (
        <div
            className="my-reqs-sent-username"
            onClick={() => history.push(`/players/${requestee}`)}
        >
            {player.username}
        </div>
    ) : null;
};

export default Username;
