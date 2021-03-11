import React from 'react';
import { useParams } from 'react-router-dom';

import { addCourt } from '../../../services/courts';

import './AddCourt.css';

const AddCourt = () => {
    const { id } = useParams();

    const addCourtHandler = async () => {
        await addCourt(id);
    };

    return (
        <div className="add-court">
            <button onClick={addCourtHandler}>Add court</button>
        </div>
    );
};

export default AddCourt;
