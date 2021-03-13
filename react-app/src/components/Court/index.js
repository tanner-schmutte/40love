import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { courtCheck } from '../../store/court';
import { useSelector, useDispatch } from 'react-redux';

import Header from './Header';
import AddCourt from './AddCourt';
import PlayerList from './PlayerList';
import ntrpDropdown from './ntrpDropdown';

const Court = () => {
    const { id } = useParams();

    const courtAdded = useSelector((state) => state.court.court);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(courtCheck(id));
    });

    return (
        <>
            <Header />
            {!courtAdded && < AddCourt />}
        </>
    );
};

export default Court;
