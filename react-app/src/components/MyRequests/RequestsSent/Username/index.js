import React, { useState, useEffect } from 'react';

import { getPlayer } from '../../../../services/players';

const Username = ({ requestee }) => {
    const [player, setPlayer] = useState();

    useEffect(() => {
        (async () => {
            const query = await getPlayer(requestee);

            setPlayer(query);
        })();
    }, [requestee]);

    return player ? <div>{player.username}</div> : null;
};

export default Username;
