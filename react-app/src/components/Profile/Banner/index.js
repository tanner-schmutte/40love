import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Modal from 'react-modal';

import { getPlayer } from '../../../services/players';

import logo from '../../../media/black_logo.png';
import icon from '../../../media/player_icon_black.png';

import { FaUserAlt } from 'react-icons/fa';

import './Banner.css';

Modal.setAppElement('#root');

const Banner = () => {
    const history = useHistory();
    const { id } = useParams();
    const user = useSelector((state) => state.session.user);

    const [player, setPlayer] = useState();
    const [image, setImage] = useState();
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    // more logic here

    const updatePhoto = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', image);

        const res = await fetch('/api/images', {
            method: 'POST',
            body: formData,
        });

        if (res.ok) {
            await res.json();
        } else console.log('error');
    };

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
                    <img
                        className="player-icon"
                        src={icon}
                        alt=""
                        onClick={toggleModal}
                    />
                    {isOpen && (
                        <div className="photo-modal">
                            <Modal
                                isOpen={isOpen}
                                onRequestClose={toggleModal}
                                style={{
                                    overlay: {
                                        backgroundColor:
                                            'rgba(255, 255, 255, 0.2)',
                                    },
                                    content: {
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        left: '30%',
                                        right: '30%',
                                        top: '30%',
                                        bottom: '30%',

                                        backgroundColor: 'black',
                                        borderColor: 'black',
                                    },
                                }}
                            >
                                <form onSubmit={handleSubmit}>
                                    <input type="file" onChange={updatePhoto} />
                                    <button type="submit" onClick={toggleModal}>
                                        Submit
                                    </button>
                                </form>
                            </Modal>
                        </div>
                    )}
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
