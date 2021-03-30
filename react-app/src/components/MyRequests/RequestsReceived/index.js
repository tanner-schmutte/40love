import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';

import {
    getRequestsReceived,
    acceptRequest,
    declineRequest,
} from '../../../services/players';

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

    const handleYes = async (e) => {
        await acceptRequest(id, e.currentTarget.id);
        const fetchedReqs = await getRequestsReceived(id);
        setRequests(fetchedReqs);
    };

    const handleNo = async (e) => {
        await declineRequest(id, e.currentTarget.id);
        const fetchedReqs = await getRequestsReceived(id);
        setRequests(fetchedReqs);
    };

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
                                {moment(request.date).format(
                                    'ddd, MMM Do @ HH:mm a'
                                )}
                            </div>
                            <div className="my-reqs-recd-res">
                                <div
                                    className="my-reqs-recd-no"
                                    onClick={handleNo}
                                    id={request.id}
                                >
                                    <FaTimes />
                                </div>
                                <div
                                    className="my-reqs-recd-yes"
                                    onClick={handleYes}
                                    id={request.id}
                                >
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
