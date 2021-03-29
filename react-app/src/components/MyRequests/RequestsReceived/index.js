import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getRequestsReceived } from '../../../services/players';

import Username from './Username';
import Court from './Court';

import { FaCheck, FaTimes } from 'react-icons/fa';

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
        <div>
            <div className="reqs-recd">
                <div className="received-title">Received</div>
                {requests &&
                    requests.map((request) => (
                        <div className="my-reqs-recd" key={request.id}>
                            <Username requester={request.requester} />
                            <Court courtId={request.court} />
                            <div className="my-reqs-recd-date">
                                {request.date}
                            </div>
                            <div className="my-reqs-recd-res">
                                <div className="my-reqs-recd-no">
                                    <FaTimes />
                                </div>
                                <div className="my-reqs-recd-yes">
                                    <FaCheck />
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    ) : null;
};

export default RequestsReceived;
