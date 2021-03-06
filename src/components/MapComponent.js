import { ComposableMap, Geographies, Geography, Graticule, Marker } from "react-simple-maps";

function MapComponent({ markerLocation }){

  const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

  return(
    <div>
      <ComposableMap projectionConfig={{ scale: 147 }} width={800} height={400} style={{ width: "100%", height: "auto" }}>
        <Graticule stroke="#8b97b0" />
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map(geo => <Geography key={geo.rsmKey} geography={geo} />)
          }
        </Geographies>
        <Marker coordinates={[markerLocation.longitude, markerLocation.latitude]}>
          <circle r={3} fill="#326ae3" />
        </Marker>
      </ComposableMap>
    </div>
  )
}

export default MapComponent;