import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const containerStyle = {
    position: 'relative',
    width: '75%',
    height: '75%',
};

export class MapContainer extends React.Component {
    state = {
        events: [
            {
                latitude: 37.761,
                longitude: -122.4272,
            },
            {
                latitude: 37.7702,
                longitude: 122.459,
            },
            {
                latitude: 37.79265,
                longitude: -122.42617,
            },
        ],
        showingInfoWindow: true,
        activeMarker: {},
        selectedPlace: {},
    };

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true,
        });

    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: true,
            });
        }
    };

    infoWindowHendler = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showInfoWindow: true,
        });

    onCloseWindow = (props) => {
        this.setState({
            showInfoWindow: false,
            activeMarker: null,
        });
    };

    displayMarkers = () => {
        return this.state.events.map((oneEvent, index) => {
            return (
                <Marker
                    key={index}
                    id={index}
                    position={{
                        lat: oneEvent.latitude,
                        lng: oneEvent.longitude,
                    }}
                />
            );
        });
    };

    render() {
        return (
            <Map
                google={this.props.google}
                zoom={12}
                style={containerStyle}
                // center={{ lat: 37.761, lng: -122.4272 }}
            >
                {this.displayMarkers()}

                <Marker
                    onClick={this.onMarkerClick}
                    name={'Current location'}
                />

                <InfoWindow
                    onClose={this.onCloseWindow}
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                >
                    <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                    </div>
                </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'key',
})(MapContainer);
