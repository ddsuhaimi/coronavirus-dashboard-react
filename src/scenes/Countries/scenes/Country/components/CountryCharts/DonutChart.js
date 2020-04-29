import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import color from "./color.scss";

export default function DonutChart({ countryData }) {
  // const  historical  = props
  const [deaths, setDeaths] = useState(0);
  const [recovered, setRecovered] = useState(0);
  useEffect(() => {
    if (Object.keys(countryData).length !== 0) {
      const { today } = countryData;
      console.log(countryData);
      setDeaths(today.deaths);
      setRecovered(today.recovered);
    }
  }, [countryData]);
  const data = {
    labels: ["Deaths", "Recovered"],
    datasets: [
      {
        data: [deaths, recovered],
        backgroundColor: [color.danger, color.success],
      },
    ],
  };

  return (
    <div className="card">
      <header className="card-header">
        <p className="card-header-title">
          > Covid-19 Closed Cases Distribution
        </p>
      </header>
      <div className="card-content">
        <div
          style={{ display: "flex", alignItems: "center", justifyContent:'center'}}
        >
          <div className="doughnut-info has-text-centered">
            <span className="is-size-4 has-text-danger">
              {(deaths/recovered).toFixed(2)} 
              </span>
            <br/>
            deaths/recovered
          </div>
          <Doughnut data={data} />
        </div>
      </div>
    </div>
  );
}
