import  { useRef, useState } from 'react';



const VanillaMap = () => {
    const mapRef = useRef(null)
    const [markers, setMarkers] = useState([])

    const handleMapClick = (e) => {
        const { clientX, clientY } = e;
        const { left, top } = mapRef.current.getBoundingClientRect();
        const x = clientX - left;
        const y = clientY - top;
    
        const newMarker = {
          id: new Date().getTime(),
          x,
          y,
        };
    
        setMarkers((prevMarkers) => [...prevMarkers, newMarker]);
      };

      const handleMarkerRemove = (id) => {
        setMarkers((prevMarkers) => prevMarkers.filter((marker) => marker.id !== id));
      };
  return (
    <div className="text-center p-[20px]">
      <div
        className="bg-[#ddd] cursor-crosshair"
        ref={mapRef}
        onClick={handleMapClick}
        style={{ height: '500px', width: '100%', position: 'relative' }}
      >
        {markers.map((marker) => (
          <div
            key={marker.id}
            className="absolute bg-[#3498db] text-[#fff] p-[5px] rounded-[50%] flex flex-col items-center cursor-pointer"
            style={{ left: `${marker.x}px`, top: `${marker.y}px` }}
          >
            <span>{marker.id}</span>
            <button onClick={() => handleMarkerRemove(marker.id)} className='mt-[5px] py-[2px] px-[5px] bg-[#e74c3c] text-[#fff] border-none cursor-pointer'>Remove Marker</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default VanillaMap