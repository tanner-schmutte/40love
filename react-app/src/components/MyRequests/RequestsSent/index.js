import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getRequestsSent } from '../../../services/players';

import Username from './Username';

import './RequestsSent.css'


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
                Sent
                {requests &&
                    requests.map((request) => (
                        <div className="my-reqs-sent-list" key={request.id}>
                            <div className="my-reqs-sent">
                                <Username requestee={request.requestee} />
                            </div>
                                <div>Status: pending</div>
                        </div>
                    ))}
            </div>
        </>
    ) : null;
};

export default RequestsSent;
