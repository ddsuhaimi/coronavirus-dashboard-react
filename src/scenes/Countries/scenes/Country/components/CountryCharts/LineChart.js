import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import color from "./color.scss";
export default function LineChart( {historical}) {

  const [label, setLabel] = useState([])
  const [cases, setCases] = useState([]);
  const [deaths, setDeaths] = useState([])
  const [recovered, setRecovered] = useState([]);
  
  useEffect(() => {
    if(historical !== undefined){
      const { timeline } = historical
      setLabel(Object.keys(timeline.cases).map(date => date.substring(0, date.length-3)))
      setCases(Object.values(timeline.cases))
      setDeaths(Object.values(timeline.deaths))
      setRecovered(Object.values(timeline.recovered))
    }
  }, [historical])

  const data = {
    labels: label,
    datasets: [
      {
        label: "Cases",
        data: cases,
        borderColor: color.info,
        fill: false,
      },
      {
        label: "Deaths",
        data: deaths,
        borderColor: color.danger,
        fill: false,
      },
      {
        label: "Recovered",
        data: recovered,
        borderColor: color.success,
        fill: false,
      },
    ],
  };
  return (
    <div className="card">
      <header className="card-header">
        <p className="card-header-title">> Covid-19 Spread Over Time</p>
      </header>
      <div className="card-content">
        <Line data={data} />
      </div>
    </div>
  );
}
