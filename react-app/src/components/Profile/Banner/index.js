import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { getPlayer } from '../../../services/players';

import icon from '../../../media/player_icon_black.png';

import './Banner.css';

const Banner = () => {
    const history = useHistory();
    const { id } = useParams();

    const [player, setPlayer] = useState();

    useEffect(() => {
        (async () => {
            const query = await getPlayer(id);

            setPlayer(query);
        })();
    }, [id]);

    return player ? (
        <nav className="title">
            <img className="player-icon" src={icon} alt="" />
            <div className="username">{player.username}</div>
        </nav>
    ) : null;
};

export default Banner;
