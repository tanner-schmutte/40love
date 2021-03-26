import React from 'react';
import { useHistory } from 'react-router-dom';

const MyHits = () => {
    const history = useHistory();

    return (
        <>
            <nav className="my-requests-nav">
                <div className="my-requests-home-holder">
                    <div
                        className="my-requests-home"
                        onClick={() => history.push('/')}
                    >
                        Home
                    </div>
                </div>
                <div className="my-requests-title-holder">
                    <div className="my-requests-title">My Hits</div>
                </div>
                <div className="my-requests-back-holder">
                    <div
                        className="my-requests-back"
                        onClick={() => history.goBack()}
                    >
                        Back
                    </div>
                </div>
            </nav>
            <div className="my-requests-columns">
                <div className="my-requests-received"></div>
                <div className="my-requests-sent"></div>
            </div>
        </>
    );
};

export default MyHits;
