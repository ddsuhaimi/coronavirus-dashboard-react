import React, { Component, useContext, useState} from "react";
import { Map, GeoJSON, Marker, Popup, CircleMarker} from 'react-leaflet';
import worldGeoJSON from 'geojson-world-map';
import worldGeoJSON2 from '../../data/world.json'
import { Link } from "react-router-dom";
import { CoronaContext} from '../../context/context'

export function World () {
  const context = useContext(CoronaContext)

  const countries= context.countries
  // let activeCountry= null
  const [activeCountry, setActiveCountry] = useState(null)

    return (
<Map center={[49, -1.6]} zoom={2.5} fillColor="#1b262c" color="#1b262c"

        // attributionControl={true}
        // zoomControl={true}
        // doubleClickZoom={true}
        // scrollWheelZoom={true}
        // dragging={true}
        // animate={true}
        // easeLinearity={0.35}
      >
        <GeoJSON
          data={worldGeoJSON}
          style={() => ({
            color: "rgba(255, 255, 255, 0.12)",
            weight: 0.5,
            fillColor: "#303030",
            fillOpacity: 1,
          })}
        />
        {countries && countries.map((country) => (
          <CircleMarker
            radius={Math.log(country.cases)}
            center={[country.countryInfo.lat, country.countryInfo.long]}
            onMouseOver={() => {
              setActiveCountry(country)
            }}
            onClick={() => {
              setActiveCountry(country)
            }}
            weight="0"
            fillColor="#dc004e"
            fillOpacity="0.8"
          />
        ))}

{activeCountry && (
          <Popup
            position={[
              activeCountry.countryInfo.lat,
              activeCountry.countryInfo.long,
            ]}
            onClose={() => {
              setActiveCountry(null)
            }}
          >
            <div className="tooltip-map">
              <span className="country has-text-weight-bold">

              {activeCountry.country}
              </span>
              <br></br>
              Cases: {activeCountry.cases}
            </div>
          </Popup>
        )}
      </Map>
    );

}

export default World;
