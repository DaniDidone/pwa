import React from "react";
import { geolocated } from "react-geolocated";
import GoogleMapReact from 'google-map-react';
import db from './db.json';



const AnyReactComponent = (props) => 
    <div className="monument">
        <div className="monument-img" style={{backgroundImage: `url(${props.img})` }}></div>
        <h2 className="monument-title">{props.name}</h2>
        <div className="monument-descr">{props.descr}</div>
    </div>;
 
class Geo extends React.Component {

    render() {
        return !this.props.isGeolocationAvailable ? (
            <div>Your browser does not support Geolocation</div>
        ) : !this.props.isGeolocationEnabled ? (
            <div>Geolocation is not enabled</div>
        ) : this.props.coords ? (
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyB0oEXNO_9HgmurvPMqNa_AFvEJU5sMhnE' }}
                    defaultCenter={{
                        lat: this.props.coords.latitude,
                        lng: this.props.coords.longitude
                    }}
                    defaultZoom={16}
                >

                { db.monuments.map(i => 
                    <AnyReactComponent key={Math.random()*10**17}
                    lat={i.lat}
                    lng={i.lng}
                    name={i.name}
                    descr={i.descr}
                    img={i.img}
                />) }
                
                </GoogleMapReact>
            </div>
        ) : (
            <div>Carregando</div>
        );
    }
}
 
export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(Geo);