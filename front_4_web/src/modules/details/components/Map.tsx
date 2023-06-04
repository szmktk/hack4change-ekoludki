import { TileLayer, 
         MapContainer, 
         Marker, 
         Popup, 
         /*useMapEvents*/
        } from 'react-leaflet';
//import {useState, useEffect} from 'react';
//import L from "leaflet";

interface CoordinatesStart {
    lat: number,
    lng: number
};

interface CoordinatesDestinate {
    lat: number,
    lng: number
};


export const Map = (positionStart: CoordinatesStart, destinationEnd: CoordinatesDestinate): JSX.Element=>{
   
    return(
        <MapContainer
            style={{ height: '85vh' }}
            center={[51.505, -0.09]} 
            zoom={13} 
            scrollWheelZoom={false}>
            <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            <Marker position={[0, 0]}>
                <Popup>
                    A popup. <br /> Easy custom.
                </Popup>
            </Marker>
        </MapContainer>

    )
}