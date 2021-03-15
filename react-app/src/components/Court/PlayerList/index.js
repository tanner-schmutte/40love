import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { filterPlayersByCourtAndNtrp } from '../../../services/courts';

import './PlayerList.css';

const PlayerList = ({ ntrp }) => {
    const { id } = useParams();

    const [players, setPlayers] = useState();

    useEffect(() => {
        (async () => {
            const filter = await filterPlayersByCourtAndNtrp(id, ntrp);

            setPlayers(filter);
        })();
    }, [id, ntrp]);

    return (
        <div>
            {players &&
                players.map((player) => (
                    <div className="player-list">
                        <div className="player">{player.username}</div>
                    </div>
                ))}
        </div>
    );
};

export default PlayerList;
