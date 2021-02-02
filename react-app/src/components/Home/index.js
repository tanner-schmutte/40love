import React from 'react';
import './Home.css';
import { useHistory } from 'react-router-dom';
import logo from '../../media/white_logo.png';

function Home() {
    // const history = useHistory();

    // const routeChange = () => {
    //     history.push(path);
    // };

    return (
        <div className="home">
            <div className="home-graphics-container">
                <img src={logo} className="logo" />
            </div>
        </div>
    );
}

export default Home;
