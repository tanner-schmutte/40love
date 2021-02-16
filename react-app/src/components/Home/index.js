import React from 'react';

import Map from './Map';
import NavBar from './NavBar';

const Home = (setAuthenticated={setAuthenticated}, authenticated={authenticated}) => (
    <>
        <NavBar setAuthenticated={setAuthenticated} authenticated={authenticated}/>
        <Map />
    </>
);

export default Home;
