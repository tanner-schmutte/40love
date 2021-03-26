import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getRequestsReceived } from '../../../services/players';

import Username from './Username';

import './RequestsReceived.css';

const RequestsReceived = () => {
    const { id } = useParams();
    const [requests, setRequests] = useState();

    useEffect(() => {
        (async () => {
            const fetchedReqs = await getRequestsReceived(id);
            setRequests(fetchedReqs);
        })();
    }, [id]);

    return requests ? (
        <>
            <div className="recs-recd">
                Received
                {requests &&
                    requests.map((request) => (
                        <div className="my-reqs-recd-list" key={request.id}>
                            <div className="my-reqs-recd">
                                <Username requester={request.requester}/>
                            </div>
                        </div>
                    ))}
            </div>
        </>
    ) : null;
};

export default RequestsReceived;
