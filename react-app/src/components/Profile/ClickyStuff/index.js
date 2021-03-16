import React from 'react';

import Back from './Back';
import Request from './Request';
import LeaveReview from './LeaveReview';

import './ClickyStuff.css';

const ClickyStuff = () => {
    return (
        <>
            <div className="back">
                <Back  />
            </div>
            <div className="request">
                <Request  />
            </div>
            <div className="leave-review">
                <LeaveReview  />
            </div>
        </>
    );
};

export default ClickyStuff;
