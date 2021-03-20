import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getPlayerCourts } from '../../../../../services/players';
import { chooseCourt } from '../../../../../store/court';

import './CourtPicker.css';

const CourtPicker = () => {
    const { id } = useParams();
    const [courts, setCourts] = useState();

    const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatch(chooseCourt(e.target.value));
    };

    useEffect(() => {
        (async () => {
            const fetchedCourts = await getPlayerCourts(id);

            setCourts(fetchedCourts);
        })();
    }, [id]);

    return courts ? (
        <div>
            <div>
                <label>
                    Courts
                    <select onChange={handleChange}>
                        <option defaultValue=""></option>
                        {courts &&
                            courts.map((court) => (
                                <option key={court.id} value={court.id}>
                                    {court.name}
                                </option>
                            ))}
                    </select>
                </label>
            </div>
        </div>
    ) : null;
};

export default CourtPicker;
