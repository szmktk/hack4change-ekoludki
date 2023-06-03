import { TileLayer, MapContainer, Marker, Popup} from 'react-leaflet'
export const Map = (props?: any): JSX.Element=>{
    const { height, centerX, centerY, zoom, markerX, markerY } = props;
    return(
        <MapContainer
            style={{ height: height}}
            center={[centerX, centerY]} 
            zoom={zoom} 
            scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        <Marker position={[markerX, markerY]}>
            <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
        </Marker>
        </MapContainer>
    )
}