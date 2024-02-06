// import LeafletMap from "./components/LeafletMap"
import VanillaMap from "./components/VanillaMap"
// import MapContainer from "./components/MapContainer"

function App() {
  return (
    <>
     <div className="h-full w-full flex items-center justify-center p-8 ">
       {/* <MapContainer/> */}
       {/* <LeafletMap/> */}
       <VanillaMap/>
     </div>
    </>
  )
}

export default App
