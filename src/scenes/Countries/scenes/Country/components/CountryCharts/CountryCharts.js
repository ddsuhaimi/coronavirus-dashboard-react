import React, { useEffect, useState } from 'react'
import LineChart from './LineChart'
import DonutChart from './DonutChart'
export default function CountryCharts(props) {
  const [historical, setHistorical] = useState({})
  // console.log(props)
  useEffect(() => {
    setHistorical(props.countryData)
  }, [])
  return (
    <div className="columns">
      <div className="column">

      <LineChart historical={props.countryData.historical} />
      </div>




      <div className="column">
      <DonutChart countryData={props.countryData}/>
      </div>
    </div>
  )
}
