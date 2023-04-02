import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup,
} from "react-simple-maps";

export const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -52.0, 0],
        center: [5, -2],
        scale: 1500,
      }}
      style={{ width: "100%", height: "100%" }}
    >
      <Geographies
        geography="/features.json"
        fill="#2c065d"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[30.523333, 50.450001]}
        dx={0}
        dy={0}
        connectorProps={{
          stroke: "#fff",
          strokeWidth: 2,
          strokeLinecap: "round",
        }}
      >
        <text
          x="-10"
          y="10"
          textAnchor="end"
          alignmentBaseline="middle"
          fill="#fff"
          fontSize="20px"
        >
          {"Kyiv"}
        </text>
      </Annotation>
      <Annotation
        subject={[2.3522, 48.8566]}
        dx={0}
        dy={0}
        connectorProps={{
          stroke: "#fff",
          strokeWidth: 2,
          strokeLinecap: "round",
        }}
      >
        <text
          x="-8"
          textAnchor="end"
          alignmentBaseline="middle"
          fill="#fff"
          fontSize="20px"
        >
          {"Paris"}
        </text>
      </Annotation>
      <Annotation
        subject={[10.757933, 59.911491]}
        dx={0}
        dy={0}
        connectorProps={{
          stroke: "#fff",
          strokeWidth: 2,
          strokeLinecap: "round",
        }}
      >
        <text
          x="-8"
          textAnchor="end"
          alignmentBaseline="middle"
          fill="#fff"
          fontSize="20px"
        >
          {"Oslo"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
