import React from 'react';
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
// import { useSearchLocation } from "../../SearchContext";

const ContainerContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const MapContainer = styled.div`
    width: 65%;
    height: 90vh;
    border: 1px solid transparent;
    border-radius: 4px;
    top: 20px;
    position: relative;
`;

const PinContainer = styled.div`
    background-color: #c40626;
    width: 15px;
    height: 15px;
    border-radius: 100%;
    border: 3px solid #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
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
                    {courts &&
                        courts.map((court) => (
                            <PinContainer
                                onClick={(e) =>
                                    history.push(`/courts/${court.id}`)
                                }
                                key={court.id}
                                lat={court.latitude}
                                lng={court.longitude}
                            ></PinContainer>
                        ))}
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
