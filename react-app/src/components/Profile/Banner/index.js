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
        <>
            <nav className="profile-page-header">
                <div className="profile-page-home-holder">
                    <button
                        className="profile-page-home-button"
                        onClick={() => history.push('/')}
                    >
                        Home
                    </button>
                </div>
                <div className="icon-and-username">
                    <img className="player-icon" src={icon} alt="" />
                    <div className="username">{player.username}</div>
                </div>
                <div className="profile-page-button-holder">
                    <button
                        className="profile-page-back-button"
                        onClick={() => history.goBack()}
                    >
                        Back
                    </button>
                </div>
            </nav>
            <div className="ntrp-rating">ntrp: {player.ntrp}</div>
        </>
    ) : null;
};

export default Banner;
