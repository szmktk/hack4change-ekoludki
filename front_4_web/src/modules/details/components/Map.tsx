import { TileLayer, MapContainer, Marker, Popup, useMapEvents} from 'react-leaflet';
import {useState, useEffect} from 'react';
import L from "leaflet";

interface CoordinatesStart {
    lat: number,
    lng: number
};

interface CoordinatesDestinate {
    lat: number,
    lng: number
};


export const Map = (props: CoordinatesStart, destinate: CoordinatesDestinate): JSX.Element=>{
   /// 
    const [position, setPosition] = useState<any>([0, 0])
   ///     
   ///     const map = useMapEvents({
   ///       click() {
   ///         map.locate()
   ///       },
   ///       locationfound(e: any) {
   ///         setPosition(e.latlng)
   ///         map.flyTo(e.latlng, map.getZoom())
   ///       },
   ///     });
   /// 
   ///     
   ///    const liflet =  new L.LatLng(props.lat, props.lng);
   ///    const distance = liflet.distanceTo(destinate);
   ///    
   ///    console.log(distance.toString());
   ///    console.log(distance.toLocaleString());
   ///     
   ///    //useEffect(()=>{
   ///     //    map.
   ///     //}, [])
   /// 
   /// 
///
    return(
        <MapContainer
            style={{ height: '50vh' }}
            center={[51.505, -0.09]} 
            zoom={13} 
            scrollWheelZoom={false}>
            <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
                <div>
                    here will be  our map!!
                </div>
        <Marker position={position}>
            <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
        </Marker>
        </MapContainer>

    )
}