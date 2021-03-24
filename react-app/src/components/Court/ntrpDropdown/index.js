import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { filterPlayersByCourtAndNtrp } from '../../../services/courts';

import PlayerList from '../PlayerList';

import './NtrpDropdown.css';

const NtrpDropdown = () => {
    const { id } = useParams();
    const [ntrp, setNtrp] = useState();
    const [ntrpRatings, setNtrpRatings] = useState();

    const handleChange = (e) => {
        setNtrp(e.target.value);
    };

    useEffect(() => {
        (async () => {
            const filter1 = await filterPlayersByCourtAndNtrp(id, '1.5');
            const filter2 = await filterPlayersByCourtAndNtrp(id, '2.0');
            const filter3 = await filterPlayersByCourtAndNtrp(id, '2.5');
            const filter4 = await filterPlayersByCourtAndNtrp(id, '3.0');
            const filter5 = await filterPlayersByCourtAndNtrp(id, '3.5');
            const filter6 = await filterPlayersByCourtAndNtrp(id, '4.0');
            const filter7 = await filterPlayersByCourtAndNtrp(id, '4.5');
            const filter8 = await filterPlayersByCourtAndNtrp(id, '5.0');
            const filter9 = await filterPlayersByCourtAndNtrp(id, '5.5');
            const filter10 = await filterPlayersByCourtAndNtrp(id, '6.0');
            const filter11 = await filterPlayersByCourtAndNtrp(id, '6.5');
            const filter12 = await filterPlayersByCourtAndNtrp(id, '7.0');

            const ntrpRatings = [
                filter1,
                filter2,
                filter3,
                filter4,
                filter5,
                filter6,
                filter7,
                filter8,
                filter9,
                filter10,
                filter11,
                filter12,
            ];

            const filled = ntrpRatings.filter((rating) => rating.length > 0);

            const ntrpList = filled.map((x) => x[0].ntrp);

            setNtrpRatings(ntrpList);
        })();
    }, [id]);

    return (
        <div>
            <div className="dropdown">
                <label>
                    ntrp
                    <select id="ntrp-selector" onChange={handleChange}>
                        <option defaultValue=""></option>
                        {ntrpRatings &&
                            ntrpRatings.map((rating) => (
                                <option value={rating}>{rating}</option>
                            ))}
                    </select>
                </label>
                <br />
            </div>
            {ntrp && <PlayerList ntrp={ntrp} />}
        </div>
    );
};

export default NtrpDropdown;
