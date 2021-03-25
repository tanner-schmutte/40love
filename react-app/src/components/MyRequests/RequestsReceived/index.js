import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

const RequestsReceived = () => {
    const history = useHistory();
    const { id } = useParams();
    const [requests, setRequests] = useState();

    return (
        <>
            <div>Received</div>
        </>
    );
};

export default RequestsReceived;
