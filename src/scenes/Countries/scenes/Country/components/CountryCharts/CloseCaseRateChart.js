import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import color from './color.scss'

export default function CloseCaseRateChart({historical}) {
  const [label, setLabel] = useState([])
  const [cases, setCases] = useState([]);
  const [deaths, setDeaths] = useState([])
  const [recovered, setRecovered] = useState([]);

  useEffect(() => {
    if(historical !== undefined){
      const { timeline } = historical
      console.log(timeline)
      setLabel(Object.keys(timeline.cases).map(date => date.substring(0, date.length-3)))
      setDeaths(Object.values(timeline.deaths))
      setRecovered(Object.values(timeline.recovered))
    }
  }, [historical])

  useEffect(() => {
    const numCases = deaths.map((x, i) => x + recovered[i])
    setCases(numCases)
  }, [deaths])


  const data = {
    labels: label,
    datasets: [
      {
        label: 'Recovered',
        fill: false,
        borderColor: color.success,
        data: recovered.map((x, i) => 100*x/cases[i])
      },
      {
        label: 'Deaths',
        fill: false,
        borderColor: color.danger,
        data: deaths.map((x,i) => 100*x/cases[i])
      },
    ]
  };
  
  return (
    <div className="card">
      <header className="card-header">
        <p className="card-header-title">> Covid-19 Cumulative Closed Cases Distribution Percentage</p>
      </header>
      <div className="card-content">
      <Line data={data} />

      </div>
    </div>
  )
}
