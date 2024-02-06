import { useState } from 'react';
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api'


const MapGoogle = ({ markers, onMarkerAdd, onMarkerRemove }) => {
    const [selectedMarker, setSelectedMarker] = useState(null);

    const mapStyles = {
        height: '500px',
        width: '100%',
      };

      const defaultCenter = {
        lat: 37.7749, // Default latitude for the center of the map
        lng: -122.4194, // Default longitude for the center of the map
      };

      const handleMapClick = (event) => {
        onMarkerAdd({ id: new Date().getTime(), position: { lat: event.latLng.lat(), lng: event.latLng.lng() } });
      };
    
      const handleMarkerClick = (marker) => {
        setSelectedMarker(marker);
      };
    
      const handleInfoWindowClose = () => {
        setSelectedMarker(null);
      };
  return (
    <div>
         <GoogleMap
      mapContainerStyle={mapStyles}
      zoom={13}
      center={defaultCenter}
      onClick={handleMapClick}
    >
         {markers.map((marker) => (
        <Marker
          key={marker.id}
          position={marker.position}
          onClick={() => handleMarkerClick(marker)}
        />
      ))}

{selectedMarker && (
        <InfoWindow
          position={selectedMarker.position}
          onCloseClick={handleInfoWindowClose}
        >
          <div>
            Marker ID: {selectedMarker.id}
            <br />
            <button onClick={() => onMarkerRemove(selectedMarker.id)}>
              Remove Marker
            </button>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
    </div>
  )
}

export default MapGoogle