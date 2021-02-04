import React from 'react';

import Map from './Map';
import NavBar from './NavBar';

const Home = (setAuthenticated={setAuthenticated}, authenticated={authenticated}) => (
    <>
        <NavBar />
        <Map />
    </>
);

export default Home;
