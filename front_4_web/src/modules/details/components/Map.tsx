import { TileLayer, MapContainer, Marker, Popup} from 'react-leaflet'
export const Map = (): JSX.Element=>{
    return(
        <MapContainer
            style={{ height: '50vh' }}
            center={[51.505, -0.09]} 
            zoom={13} 
            scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
                <div>
                    here will be  our map!!
                </div>
        <Marker position={[51.505, -0.09]}>
            <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
        </Marker>
        </MapContainer>

    )
}