import React, { useState } from 'react';

import PlayerList from '../PlayerList';

import './NtrpDropdown.css';

const NtrpDropdown = () => {
    const [ntrp, setNtrp] = useState();

    const handleChange = (e) => {
        setNtrp(e.target.value);
    };

    return (
        <div>
            <div className="dropdown">
                <label>
                    ntrp
                    <select onChange={handleChange}>
                        <option defaultValue=""></option>
                        <option value="1.5">1.5</option>
                        <option value="2.0">2.0</option>
                        <option value="2.5">2.5</option>
                        <option value="3.0">3.0</option>
                        <option value="3.5">3.5</option>
                        <option value="4.0">4.0</option>
                        <option value="4.5">4.5</option>
                        <option value="5.0">5.0</option>
                        <option value="5.5">5.5</option>
                        <option value="6.0">6.0</option>
                        <option value="6.5">6.5</option>
                        <option value="7.0">7.0</option>
                    </select>
                </label>
                <br />
            </div>
            {ntrp && <PlayerList ntrp={ntrp} />}
        </div>
    );
};

export default NtrpDropdown;
