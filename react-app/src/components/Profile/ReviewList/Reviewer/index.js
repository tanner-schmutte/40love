import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { getPlayer } from '../../../../services/players';

import './Reviewer.css';

const Reviewer = ({ id }) => {
    const history = useHistory();
    const [player, setPlayer] = useState();

    useEffect(() => {
        (async () => {
            const query = await getPlayer(id);

            setPlayer(query);
        })();
    }, [id]);

    return player ? (
        <div
            className="profile-review-username"
            onClick={() => history.push(`/players/${id}`)}
        >
            {player.username}
        </div>
    ) : null;
};

export default Reviewer;
