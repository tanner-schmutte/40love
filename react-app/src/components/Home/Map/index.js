import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';
import Marker from '../Marker';
import { getAllCourts } from '../../../services/courts';

const ContainerContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    // background-color: #fff6dd;
    background-color: #bbe6c0;
`;

const MapContainer = styled.div`
    width: 65%;
    height: 100vh;
    border: 10px solid black;
    border-radius: 4px;
    top: -10px;
    position: relative;
`;

export default function Map() {
    
    const [courts, setCourts] = useState();

    useEffect(() => {
        (async () => {
            const allCourts = await getAllCourts();

            setCourts(allCourts);
        })();
    }, []);

    return (
        <ContainerContainer>
            <MapContainer>
                <GoogleMapReact
                    bootstrapURLKeys={{
                        key: 'key',
                    }}
                    center={{ lat: 37.7655, lng: -122.4381 }}
                    defaultZoom={13}
                >
                    {courts &&
                        courts.map((court) => (
                            <Marker
                                id={court.id}
                                lat={court.latitude}
                                lng={court.longitude}
                                name={court.name}
                            ></Marker>
                        ))}
                </GoogleMapReact>
            </MapContainer>
        </ContainerContainer>
    );
}
