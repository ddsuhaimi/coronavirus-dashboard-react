import React, { useEffect, useState } from "react";
import LineChart from "./LineChart";
import DonutChart from "./DonutChart";
import ClosedCaseRateChart from "./CloseCaseRateChart";
export default function CountryCharts(props) {
  const [historical, setHistorical] = useState({});
  // console.log(props)
  useEffect(() => {
    setHistorical(props.countryData);
  }, []);
  return (
    <>
    <div className="columns">
      <div className="column is-6">
        <LineChart historical={props.countryData.historical} />
      </div>
      <div className="column is-6">
        <DonutChart countryData={props.countryData} />
      </div>
    </div>
    <div className="columns">

      <div className="column is-6">
        <ClosedCaseRateChart historical={props.countryData.historical}/>
      </div>
    </div>
    </>
  );
}
