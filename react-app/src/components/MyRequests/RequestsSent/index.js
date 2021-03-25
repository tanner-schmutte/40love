import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

const RequestsSent = () => {
    const history = useHistory();
    const { id } = useParams();
    const [requests, setRequests] = useState();

    

    return (
        <>
            <div>Sent</div>
        </>
    );
};

export default RequestsSent;
