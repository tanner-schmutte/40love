import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';

import { getRequestsSent } from '../../../services/players';

import Username from './Username';
import Court from './Court';

import './RequestsSent.css';

const RequestsSent = () => {
    const { id } = useParams();
    const [requests, setRequests] = useState();

    useEffect(() => {
        (async () => {
            const fetchedReqs = await getRequestsSent(id);
            setRequests(fetchedReqs);
        })();
    }, [id]);

    return requests ? (
        <>
            <div className="recs-sent">
                <div className="sent-title">Sent</div>
                {requests &&
                    requests.map((request) => (
                        <div className="my-reqs-sent" key={request.id}>
                            <Username requestee={request.requestee} />
                            <Court courtId={request.court} />
                            <div className="my-reqs-sent-date">
                                {moment(request.date).format(
                                    'ddd, MMM Do @ HH:mm a'
                                )}
                            </div>
                            <div className="my-reqs-sent-status">
                                Status: pending
                            </div>
                        </div>
                    ))}
            </div>
        </>
    ) : null;
};

export default RequestsSent;
