import React, { useEffect } from 'react';
// import { useParams } from 'react-router-dom';

import Banner from './Banner';
import ReviewList from './ReviewList';
import ClickyStuff from './ClickyStuff';

import './Profile.css'

const Profile = () => {
    // const { id } = useParams();

    return (
        <div>
            <Banner />
            <div className="profile-columns">
                <div className="review-list">
                    <ReviewList />
                </div>
                <div className="clicky-stuff">
                    <ClickyStuff />
                </div>
            </div>
        </div>
    );
};

export default Profile;
