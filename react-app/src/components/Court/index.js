import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { courtCheck } from '../../store/court';
import { useSelector, useDispatch } from 'react-redux';

import Header from './Header';
import AddCourt from './AddCourt';
import NtrpDropdown from './NtrpDropdown';
import PlayerList from './PlayerList';

const Court = () => {
    const { id } = useParams();

    const courtAdded = useSelector((state) => state.court.court);
    const user = useSelector((state) => state.session.user);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(courtCheck(id));
    });

    return (
        <>
            <Header />
            {!courtAdded && user && <AddCourt />}
            {courtAdded && <NtrpDropdown />}
        </>
    );
};

export default Court;
