import React from 'react';
import { useParams } from 'react-router-dom';

import './CourtPicker.css';

const CourtPicker = () => {

    const {id } = useParams();

    

    return (
        <div>
            <div>
                <label>
                    <select onChange={handleChange}></select>
                </label>
            </div>
        </div>
    );
};
