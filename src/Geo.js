import React from "react";
import { geolocated } from "react-geolocated";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class Geo extends React.Component {

    static defaultProps = { 
        center: {
            lat: -27.634978,
            lng: -52.273840
        },
        zoom: 16
    };

    render() {
        return !this.props.isGeolocationAvailable ? (
            <div>Your browser does not support Geolocation</div>
        ) : !this.props.isGeolocationEnabled ? (
            <div>Geolocation is not enabled</div>
        ) : this.props.coords ? (
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyB0oEXNO_9HgmurvPMqNa_AFvEJU5sMhnE' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                <AnyReactComponent
                    lat={this.props.coords.latitude}
                    lng={this.props.coords.longitude}
                    text="ESTOU AQUI"
                />
                </GoogleMapReact>
            </div>
        ) : (
            <div>Getting the location data&hellip; </div>
        );
    }
}
 
export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(Geo);