import React from 'react';

import Request from './Request';
import LeaveReview from './LeaveReview';

import './ClickyStuff.css';

const ClickyStuff = () => {
    return (
        <>
            <div className="request">
                <Request />
            </div>
            <div className="leave-review">
                <LeaveReview />
            </div>
        </>
    );
};

export default ClickyStuff;
