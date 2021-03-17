import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { filterPlayersByCourtAndNtrp } from '../../../services/courts';

import './PlayerList.css';

const PlayerList = ({ ntrp }) => {
    const history = useHistory();
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
                        <div
                            className="player"
                            onClick={() => {
                                history.push(`/players/${player.id}`);
                            }}
                        >
                            {player.username}
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default PlayerList;
