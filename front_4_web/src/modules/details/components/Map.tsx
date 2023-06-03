import { TileLayer, MapContainer, useMap, Marker, Popup, MarkerProps } from 'react-leaflet'


//export type MapEntry<K, V> = Map<K, V> | [K, V][]
//
//// Public interface
//export interface UtilityMaps<K, V> {
//  set: (key: K, value: V) => void
//  setAll: (entryData: MapEntry<K, V>) => void
//  remove: (key: K) => void
//  reset: Map<K, V>['clear']
//}

//const initialValues: MapEntry<string, string> = [['key', '🆕']]
//markerProps: MarkerProps
export const Map = (): JSX.Element=>{
    
    //const [map, actions] = useMap<string, string>(initialValues)
    
    return(
        <MapContainer
            className='mapa'
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