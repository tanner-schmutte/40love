import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getPlayerCourts, addAllCourts } from '../../services/players';
import { removeCourt } from '../../services/courts';

import { FaTrashAlt, FaUserAlt } from 'react-icons/fa';

import logo from '../../media/black_logo.png';

import './MyCourts.css';

const MyCourts = () => {
    const history = useHistory();
    const { id } = useParams();
    const user = useSelector((state) => state.session.user);
    const [courts, setCourts] = useState();

    const removeCourtHandler = async (e) => {
        await removeCourt(e.currentTarget.id);
        const fetchedCourts = await getPlayerCourts(id);
        setCourts(fetchedCourts);
    };

    useEffect(() => {
        (async () => {
            const fetchedCourts = await getPlayerCourts(id);
            setCourts(fetchedCourts);
        })();
    }, [id]);

    const handleChange = (e) => {
        if (e.target.value === 'requests') {
            history.push(`/players/${user.id}/requests`);
        }
        if (e.target.value === 'hits') {
            history.push(`/players/${user.id}/hits`);
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
        if (e.target.value === 'add-all') {
            (async () => {
                await addAllCourts(user.id);
                const fetchedCourts = await getPlayerCourts(id);
                setCourts(fetchedCourts);
            })();
        }
    };

    return courts ? (
        <>
            <nav className="my-courts-nav">
                <div className="my-courts-home-holder">
                    <div
                        className="my-courts-home"
                        onClick={() => history.push('/')}
                    >
                        <img className="logo" src={logo} alt="" />
                    </div>
                </div>
                <div className="my-courts-title-holder">
                    <div className="my-courts-title">My Courts</div>
                </div>
                <div className="my-courts-back-holder">
                    <div className="user-icon">
                        <FaUserAlt />
                    </div>
                    <select id="courts-page-dropdown" onChange={handleChange}>
                        <option defaultValue=""></option>
                        <option value="back" key="back">
                            Back
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
                        <option value="add-all" key="add-all">
                            Add All Courts
                        </option>
                    </select>
                </div>
            </nav>
            {courts &&
                courts.map((court) => (
                    <div className="my-court-list" key={court.id}>
                        <div
                            className="my-court"
                            onClick={() => history.push(`/courts/${court.id}`)}
                        >
                            {court.name}
                        </div>
                        <div
                            className="trash-can"
                            onClick={removeCourtHandler}
                            id={court.id}
                        >
                            <FaTrashAlt />
                        </div>
                    </div>
                ))}
            {courts.length === 0 && (
                <div className="my-court-list">
                    <div>No courts. Add courts via the map.</div>
                </div>
            )}
        </>
    ) : null;
};

export default MyCourts;
