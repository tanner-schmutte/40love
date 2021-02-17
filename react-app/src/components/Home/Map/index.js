import React from 'react';
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Marker from '../Marker';

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

export default function Map({ courts }) {
    const history = useHistory();

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
                    {/* {courts &&
                        courts.map((court) => (
                            <Marker
                                onClick={(e) =>
                                    history.push(`/courts/${court.id}`)
                                }
                                key={court.id}
                                lat={court.latitude}
                                lng={court.longitude}
                            ></Marker>
                        ))} */}
                    <Marker lat={37.761} lng={-122.4272} name="Dolores Park" />
                    <Marker
                        lat={37.7702}
                        lng={-122.459}
                        name="Golden Gate Park"
                    />
                    <Marker
                        lat={37.79265}
                        lng={-122.42617}
                        name="Lafayette Park"
                    />
                    <Marker lat={37.79226} lng={-122.43625} name="Alta Plaza" />
                    <Marker lat={37.73611} lng={-122.43978} name="Glen Park" />
                    <Marker
                        lat={37.7428}
                        lng={-122.48042}
                        name="McCoppin Park"
                    />
                    <Marker
                        lat={37.78269}
                        lng={-122.49083}
                        name="Margaret Osborne DuPont Park"
                    />
                    <Marker
                        lat={37.7653}
                        lng={-122.4386}
                        name="Corona Heights Park"
                    />
                    <Marker lat={37.7512} lng={-122.4393} name="Noe Valley" />
                    <Marker
                        lat={37.7138207}
                        lng={-122.431916}
                        name="Crocker Amazon Playground"
                    />
                    <Marker lat={37.7253} lng={-122.4431} name="Balboa Park" />
                    <Marker
                        lat={37.7569}
                        lng={-122.397}
                        name="Potrero Recreation Center"
                    />
                    <Marker lat={37.7764} lng={-122.4347} name="Alamo Square" />
                    <Marker
                        lat={37.7684}
                        lng={-122.4414}
                        name="Buena Vista Park"
                    />
                    <Marker
                        lat={37.8021}
                        lng={-122.4317}
                        name="Presidio YMCA Ruger"
                    />
                    <Marker lat={37.7971} lng={-122.4483} name="Moscone" />
                    <Marker
                        lat={37.80169}
                        lng={-122.420069}
                        name="Alice Marble"
                    />
                    <Marker
                        lat={37.7846658}
                        lng={-122.435976}
                        name="Hamilton"
                    />
                    <Marker lat={37.725989} lng={-122.483363} name="SFSU" />
                    <Marker
                        lat={37.7504211}
                        lng={-122.4062595}
                        name="James Rolph Jr Playground"
                    />
                    <Marker
                        lat={37.7369294}
                        lng={-122.4204963}
                        name="Holly Park"
                    />
                    <Marker
                        lat={37.77942865}
                        lng={-122.45774677}
                        name="Angelo J Rossi Playground"
                    />
                    <Marker
                        lat={37.763881524}
                        lng={-122.400189}
                        name="Jackson Playground"
                    />
                    <Marker
                        lat={37.73607}
                        lng={-122.47816}
                        name="Frances M McAteer"
                    />
                    <Marker
                        lat={37.7568065}
                        lng={-122.487155329}
                        name="Sunset Recreation"
                    />
                </GoogleMapReact>
            </MapContainer>
        </ContainerContainer>
    );
}
