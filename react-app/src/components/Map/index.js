import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const containerStyle = {
    position: 'relative',
    width: '75%',
    height: '75%',
};

export class MapContainer extends React.Component {
    state = {
        showingInfoWindow: false,
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
                activeMarker: null,
            });
        }
    };

    render() {
        return (
            <Map
                google={this.props.google}
                zoom={12}
                style={containerStyle}
                center={{ lat: 37.761, lng: -122.4272 }}
            >
                <Marker
                    onClick={this.onMarkerClick}
                    name={'Current location'}
                />

                <InfoWindow
                    onClose={this.onInfoWindowClose}
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
