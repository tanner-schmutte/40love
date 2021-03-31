import React from 'react';

import Request from './Request';
import LeaveReview from './LeaveReview';

import './ClickyStuff.css';

const ClickyStuff = () => {
    return (
        <div className="request-review-container">
            <div className="request">
                <Request />
            </div>
            <div className="leave-review">
                <LeaveReview />
            </div>
        </div>
    );
};

export default ClickyStuff;
