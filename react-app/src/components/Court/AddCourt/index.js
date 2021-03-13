import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { addCourt } from '../../../services/courts';
import { courtCheck } from '../../../store/court';

import './AddCourt.css';

const AddCourt = () => {
    const { id } = useParams();
    
    const dispatch = useDispatch();
    
    const addCourtHandler = async () => {
        await addCourt(id);
        dispatch(courtCheck(id));
    };

    return (
        <div className="add-court">
            <button onClick={addCourtHandler}>Add court</button>
        </div>
    );
};

export default AddCourt;
