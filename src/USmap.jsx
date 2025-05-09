import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json"

export default function MapChart() {
    return (
      <ComposableMap projection="geoAlbersUsa" width={600} height={400}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: {
                    fill: "#94a3b8", // slate-400
                    stroke: "#1e293b", // dark border
                    strokeWidth: 0.5,
                    outline: "none"
                  },
                  hover: {
                    fill: "#3b82f6",
                    outline: "none"
                  },
                  pressed: {
                    fill: "#1d4ed8",
                    outline: "none"
                  }
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    );
  }