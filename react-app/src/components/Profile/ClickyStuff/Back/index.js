import React from 'react';
import { useHistory } from 'react-router-dom';

import './Back.css';

const Back = () => {
    const history = useHistory();

    return (
        <>
            <div className="go-back" onClick={() => history.goBack()}>
                Back
            </div>
        </>
    );
};

export default Back;
