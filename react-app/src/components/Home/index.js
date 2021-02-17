import React from 'react';

import Map from './Map';
import NavBar from './NavBar';

const Home = ({ authenticated }, { setAuthenticated }) => (
    <>
        <NavBar
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
        />
        <Map />
    </>
);

export default Home;
