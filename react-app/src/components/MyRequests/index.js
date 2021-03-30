import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import RequestsReceived from './RequestsReceived';
import RequestsSent from './RequestsSent';

import { FaTrashAlt, FaUserAlt } from 'react-icons/fa';

import logo from '../../media/black_logo.png';

import './MyRequests.css';

const MyRequests = () => {
    const history = useHistory();
    const { id } = useParams();

    const handleChange = (e) => {
        if (e.target.value === 'courts') {
            history.push(`/players/${id}/courts`);
        }
        if (e.target.value === 'hits') {
            history.push(`/players/${id}/hits`);
        }
        if (e.target.value === 'profile') {
            history.push(`/players/${id}`);
        }
        if (e.target.value === 'home') {
            history.push('/');
        }
        if (e.target.value === 'back') {
            history.goBack();
        }
    };

    return (
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
                    <div className="my-requests-title">My Requests</div>
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
            <div className="my-requests-columns">
                <div className="my-requests-received">
                    <RequestsReceived />
                </div>
                <div className="my-requests-sent">
                    <RequestsSent />
                </div>
            </div>
        </>
    );
};

export default MyRequests;
