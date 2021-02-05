import React from 'react';
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
// import { useSearchLocation } from "../../SearchContext";

const ContainerContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff6dd;
`;

const MapContainer = styled.div`
    width: 65%;
    height: 100vh;
    border: 10px solid black;
    border-radius: 4px;
    top: -10px;
    position: relative;
`;

const PinContainer = styled.div`
    background-color: #21b786;
    color: black;
    width: 10px;
    height: 10px;
    border-radius: 100%;
    border: 3px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
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
                            <PinContainer
                                onClick={(e) =>
                                    history.push(`/courts/${court.id}`)
                                }
                                key={court.id}
                                lat={court.latitude}
                                lng={court.longitude}
                            ></PinContainer>
                        ))} */}
                    <PinContainer
                        lat={37.761}
                        lng={-122.4272}
                        text="Dolores Park"
                    />
                    <PinContainer
                        lat={37.7702}
                        lng={-122.459}
                        text="Golden Gate Park"
                    />
                    <PinContainer
                        lat={37.79265}
                        lng={-122.42617}
                        text="Lafayette Park"
                    />
                    <PinContainer
                        lat={37.792260}
                        lng={-122.436250}
                        text="Alta Plaza"
                    />
                    <PinContainer
                        lat={37.736110}
                        lng={-122.439780}
                        text="Glen Park"
                    />
                    <PinContainer
                        lat={37.742800}
                        lng={-122.480420}
                        text="McCoppin Park"
                    />
                    <PinContainer
                        lat={37.782690}
                        lng={-122.490830}
                        text="Margaret Osborne DuPont Park"
                    />
                    <PinContainer
                        lat={37.7653}
                        lng={-122.4386}
                        text="Corona Heights Park"
                    />
                    <PinContainer
                        lat={37.7512}
                        lng={-122.4393}
                        text="Noe Valley"
                    />
                    <PinContainer
                        lat={37.7138207}
                        lng={-122.431916}
                        text="Crocker Amazon Playground"
                    />
                    <PinContainer
                        lat={37.7253}
                        lng={-122.4431}
                        text="Balboa Park"
                    />
                    <PinContainer
                        lat={37.7569}
                        lng={-122.3970}
                        text="Potrero Recreation Center"
                    />
                    <PinContainer
                        lat={37.7764}
                        lng={-122.4347}
                        text="Alamo Square"
                    />
                    <PinContainer
                        lat={37.7684}
                        lng={-122.4414}
                        text="Buena Vista Park"
                    />
                    <PinContainer
                        lat={37.8021}
                        lng={-122.4317}
                        text="Presidio YMCA Ruger"
                    />
                    <PinContainer
                        lat={37.7971}
                        lng={-122.4483}
                        text="Moscone"
                    />
                    <PinContainer
                        lat={37.80169}
                        lng={-122.420069}
                        text="Alice Marble"
                    />
                    <PinContainer
                        lat={37.7846658}
                        lng={-122.435976}
                        text="Hamilton"
                    />
                    <PinContainer
                        lat={37.725989}
                        lng={-122.483363}
                        text="SFSU"
                    />
                    <PinContainer
                        lat={37.7504211}
                        lng={-122.4062595}
                        text="James Rolph Jr Playground"
                    />
                    <PinContainer
                        lat={37.7369294}
                        lng={-122.4204963}
                        text="Holly Park"
                    />
                    <PinContainer
                        lat={37.77942865}
                        lng={-122.45774677}
                        text="Angelo J Rossi Playground"
                    />
                    <PinContainer
                        lat={37.763881524}
                        lng={-122.400189}
                        text="Jackson Playground"
                    />
                    <PinContainer
                        lat={37.734917}
                        lng={-122.47760135}
                        text="Frances M McAteer"
                    />
                    <PinContainer
                        lat={37.7568065}
                        lng={-122.487155329}
                        text="Sunset Recreation"
                    />
                </GoogleMapReact>
            </MapContainer>
        </ContainerContainer>
    );
}

// export class MapContainer extends React.Component {
//     state = {
//         events: [
//             {
//                 latitude: 37.761,
//                 longitude: -122.4272,
//             },
//             {
//                 latitude: 37.7702,
//                 longitude: 122.459,
//             },
//             {
//                 latitude: 37.79265,
//                 longitude: -122.42617,
//             },
//         ],
