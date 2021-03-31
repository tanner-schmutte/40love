import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux'

import { getPlayer } from '../../../services/players';

import logo from '../../../media/black_logo.png';
import icon from '../../../media/player_icon_black.png';

import { FaUserAlt } from 'react-icons/fa';


import './Banner.css';

const Banner = () => {
    const history = useHistory();
    const { id } = useParams();
    const user = useSelector((state) => state.session.user);


    const [player, setPlayer] = useState();

    useEffect(() => {
        (async () => {
            const query = await getPlayer(id);

            setPlayer(query);
        })();
    }, [id]);

    const handleChange = (e) => {
        if (e.target.value === 'courts') {
            history.push(`/players/${user.id}/courts`);
        }
        if (e.target.value === 'requests') {
            history.push(`/players/${user.id}/requests`);
        }
        if (e.target.value === 'hits') {
            history.push(`/players/${user.id}/hits/`);
        }
        if (e.target.value === 'profile') {
            history.push(`/players/${user.id}/`);
        }
        if (e.target.value === 'home') {
            history.push('/');
        }
        if (e.target.value === 'back') {
            history.goBack();
        }
    };

    return player ? (
        <>
            <nav className="profile-page-header">
                <div className="profile-page-home-holder">
                    <div
                        className="profile-page-home-button"
                        onClick={() => history.push('/')}
                    >
                        <img className="logo" src={logo} alt="" />
                    </div>
                </div>
                <div className="icon-and-username">
                    <img className="player-icon" src={icon} alt="" />
                    <div className="username">{player.username}</div>
                </div>
                <div className="profile-page-button-holder">
                <div className="user-icon">
                        <FaUserAlt />
                    </div>
                    <select id="courts-page-dropdown" onChange={handleChange}>
                        <option defaultValue=""></option>
                        <option value="back" key="back">
                            Back
                        </option>
                        <option value="courts" key="courts">
                            My Courts
                        </option>
                        <option value="requests" key="requests">
                            My Requests
                        </option>
                        <option value="hits" key="hits">
                            My Hits
                        </option>
                        <option value="profile" key="profile">
                            My Profile
                        </option>
                        <option value="home" key="home">
                            Home
                        </option>
                    </select>
                </div>
            </nav>
            <div className="ntrp-rating">ntrp: {player.ntrp}</div>
        </>
    ) : null;
};

export default Banner;
