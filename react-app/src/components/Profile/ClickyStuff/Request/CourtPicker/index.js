import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getPlayerCourts } from '../../../../../services/players';

import './CourtPicker.css';

const CourtPicker = () => {
    const { id } = useParams();
    const [courts, setCourts] = useState();
    const [court, setCourt] = useState();

    const handleChange = (e) => {
        setCourt(e.target.value);
    };

    useEffect(() => {
        (async () => {
            const fetchedCourts = await getPlayerCourts(id);

            setCourts(fetchedCourts);
        })();
    }, [id]);

    return (
        <div>
            <div>
                <label>
                    Courts
                    <select onChange={handleChange}>
                        <option defaultValue=""></option>
                        {courts &&
                            courts.map((court) => (
                                <option value={court.id}>{court.name}</option>
                            ))}
                    </select>
                </label>
            </div>
        </div>
    );
};

export default CourtPicker;
