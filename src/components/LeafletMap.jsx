import { useState } from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import 'leaflet/dist/leaflet.css';
import '../App.css';

const LeafletMap = () => {
    const [markers, setMarkers] = useState([])
    const [position, setPosition] = useState([51.505, -0.09])// Default map center

    const handleMapClick = (e) => {
        const newMarker = {
            id: new Date().getTime(),
            position: [e.latlng.lat, e.latlng.lng]
        }
        setMarkers((prevMarkers) => [...prevMarkers, newMarker])
    }

    const handleMarkerRemove = (id) => {
        setMarkers((prevMarkers) => prevMarkers.filter((marker) => marker.id !== id))
    }

    const handleMarkerDragEnd = (id, newPosition) => {
        setMarkers((prevMarkers) => prevMarkers.map((marker) => marker.id === id ? {...marker, position: newPosition} : marker))
    }
  return (
    <div>
        <MapContainer center={position} zoom={13} className="h-[500px] w-full" onClick={() => handleMapClick()}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'/>
            {markers.map((marker) => (
                <Marker key={marker.id} position={marker.position} draggable={true} eventHandlers={{
                    dragend: (e) => handleMarkerDragEnd(marker.id, e.target.getLatLng()),
                  }}>
                    <Popup>
                        Marker ID: {marker.id}
                        <br/>
                        <button onClick={() => handleMarkerRemove(marker.id)}>Remove Marker</button>
                    </Popup>
                </Marker>
            ))}

        </MapContainer>
    </div>
  )
}

export default LeafletMap