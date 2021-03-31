import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';

import { getHitsRequester, getHitsRequestee } from '../../services/players';

import Username from './Username';
import Court from './Court';

import { FaUserAlt } from 'react-icons/fa';

import logo from '../../media/black_logo.png';

import './MyHits.css';

const MyHits = () => {
    const history = useHistory();
    const { id } = useParams();
    const user = useSelector((state) => state.session.user);
    const [hits, setHits] = useState();

    useEffect(() => {
        (async () => {
            const requester = await getHitsRequester(id);
            const requestee = await getHitsRequestee(id);

            const fetchedHits = requester.concat(requestee);

            setHits(fetchedHits);
        })();
    }, [id]);

    const handleChange = (e) => {
        if (e.target.value === 'courts') {
            history.push(`/players/${user.id}/courts`);
        }
        if (e.target.value === 'requests') {
            history.push(`/players/${user.id}/requests`);
        }
        if (e.target.value === 'profile') {
            history.push(`/players/${user.id}`);
        }
        if (e.target.value === 'home') {
            history.push('/');
        }
        if (e.target.value === 'back') {
            history.goBack();
        }
    };

    return hits ? (
        <>
            <nav className="my-requests-nav">
                <div className="my-requests-home-holder">
                    <div
                        className="my-requests-home"
                        onClick={() => history.push('/')}
                    >
                        <img className="logo" src={logo} alt="" />
                    </div>
                </div>
                <div className="my-requests-title-holder">
                    <div className="my-requests-title">My Hits</div>
                </div>
                <div className="my-requests-back-holder">
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
                        <option value="profile" key="profile">
                            My Profile
                        </option>
                        <option value="home" key="home">
                            Home
                        </option>
                    </select>
                </div>
            </nav>
            {hits &&
                hits.map((hit) => (
                    <div className="my-hit-list" key={hit.id}>
                        <div className="my-hits">
                            {hit.player1 == id && (
                                <>
                                    <Username playerId={hit.player2} />
                                </>
                            )}
                            {hit.player2 == id && (
                                <>
                                    <Username playerId={hit.player1} />
                                </>
                            )}
                            <Court courtId={hit.court} />
                            <div className="my-hits-date">
                                {moment(hit.date).format(
                                    'ddd, MMM Do @ HH:mm a'
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            {hits.length === 0 && (
                <div className="my-court-list">
                    <div>
                        No hits yet. Find a player and send a hit request.
                    </div>
                </div>
            )}
        </>
    ) : null;
};

export default MyHits;
