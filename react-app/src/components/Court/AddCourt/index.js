import React from 'react';
import { useParams } from 'react-router-dom';
// import { useSelector } from 'react-redux';

import { addCourt } from '../../../services/courts';

const AddCourt = () => {
    // const player = useSelector((state) => state.session.user);

    const { id } = useParams();

    const addCourtHandler = async () => {
        await addCourt(id);
    };

    return (
        <button className="add-court" onClick={addCourtHandler}>
            Add court
        </button>
    );
};

export default AddCourt;
