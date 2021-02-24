import React from 'react';

import Map from './Map';
import NavBar from './NavBar';

const Home = ({ authenticated, setAuthenticated, user }) => (
    <>
        <NavBar
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
            user={user}
        />
        <Map />
    </>
);

export default Home;
