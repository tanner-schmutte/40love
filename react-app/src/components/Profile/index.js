import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Banner from './Banner';
import ReviewList from './ReviewList';
import ClickyStuff from './ClickyStuff';

import './Profile.css';

const Profile = () => {
    const { id } = useParams();
    const user = useSelector((state) => state.session.user);

    return user ? (
        <div>
            <Banner />
            <div className="profile-columns">
                <div className="review-list">
                    <ReviewList />
                </div>
                {id != user.id && (
                    <div className="clicky-stuff">
                        <ClickyStuff />
                    </div>
                )}
            </div>
        </div>
    ) : null;
};

export default Profile;
