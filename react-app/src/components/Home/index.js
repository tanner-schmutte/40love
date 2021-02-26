import React from 'react';

import Map from './Map';
import NavBar from './NavBar';
import Footer from './Footer';

const Home = ({ authenticated, setAuthenticated, user }) => (
    <>
        <NavBar
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
            user={user}
        />
        <Map />
        <Footer />

    </>
);

export default Home;
