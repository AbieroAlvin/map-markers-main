import MapGoogle from "./components/MapGoogle"
import { useState } from "react";

const MapContainer = () => {
    const [markers, setMarkers] = useState([]);

  const handleMarkerAdd = (newMarker) => {
    setMarkers((prevMarkers) => [...prevMarkers, newMarker]);
  };

  const handleMarkerRemove = (id) => {
    setMarkers((prevMarkers) => prevMarkers.filter((marker) => marker.id !== id));
  };
  return (
    <div> <MapGoogle   markers={markers}
    onMarkerAdd={handleMarkerAdd}
    onMarkerRemove={handleMarkerRemove}/></div>
  )
}

export default MapContainer