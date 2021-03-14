import React from 'react';

import { filterPlayersByCourtAndNtrp } from '../../../services/courts';

import './PlayerList.css'

const PlayerList = ({ ntrp }) => {
    return (
        <div>
            <div className="player-list">
                <div className="ntrp">{ntrp}</div>
            </div>
        </div>
    );
};

export default PlayerList;
