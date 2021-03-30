import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { getPlayer } from '../../../../services/players';

import './Username.css';

const Username = ({ requester }) => {
    const history = useHistory();
    const [player, setPlayer] = useState();

    useEffect(() => {
        (async () => {
            const query = await getPlayer(requester);

            setPlayer(query);
        })();
    }, [requester]);

    return player ? (
        <div
            className="my-reqs-recd-username"
            onClick={() => history.push(`/players/${requester}`)}
        >
            {player.username}
        </div>
    ) : null;
};

export default Username;
