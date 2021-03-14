import React from 'react';

import './NtrpDropdown.css';

const ntrpDropdown = () => {
    // const { id } = useParams();

    return (
        <div className="dropdown">
            <label>
                ntrp
                <select>
                    <option>1.5</option>
                    <option>2.0</option>
                    <option>2.5</option>
                    <option>3.0</option>
                    <option>3.5</option>
                    <option>4.0</option>
                    <option>4.5</option>
                    <option>5.0</option>
                    <option>5.5</option>
                    <option>6.0</option>
                    <option>6.5</option>
                    <option>7.0</option>
                </select>
            </label>
        </div>
    );
};

export default ntrpDropdown;
