import React, { useContext, useEffect, useState } from "react";
import { CoronaContext } from "../../../../context/context";
import CaseCards from "../../../components/CaseCards";
import TitleHeader from "./components/TitleHeader";
import LoadingBar from '../../../components/LoadingBar'
import DetailStatCards from './components/DetailStatCards'
import CountryCharts from './components/CountryCharts'
export default function Country(props) {
  const { prepareCaseCardData, all } = useContext(CoronaContext);
  const [country, setCountry] = useState(props.match.params.country);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});
  const [formattedData, setFormattedData] = useState([]);
  const [arr, setArr] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      let [today, yesterday, historical] = await Promise.all([
        (
          await fetch(`https://corona.lmao.ninja/v2/countries/${country}`)
        ).json(),
        (
          await fetch(
            `https://corona.lmao.ninja/v2/countries/${country}?yesterday=1`
          )
        ).json(),
        (
          await fetch(
            `https://corona.lmao.ninja/v2/historical/${country}?lastdays=all`
          )
        ).json(),
      ]);
      setData({
        today: today,
        yesterday: yesterday,
        historical: historical
      });
    };

    fetchData();
  }, [country]);

  useEffect(() => {
    if (Object.keys(data).length !== 0) {
      const result = prepareCaseCardData(data.today, data.yesterday);
      setFormattedData(result);

      setIsLoading(false);

      const arrr = [
        {title:"Cases per one million", number:data.today.casesPerOneMillion, color: "info"},
        {title:"Deaths per one million", number:data.today.deathsPerOneMillion, color:"danger"},
        {title:"Tests per one million", number:data.today.testsPerOneMillion, color:"success"},
        {title:"Total tests", number:data.today.tests, color: "warning"},
      ]
  
      setArr(arrr)
    }

    
  }, [data]);


  
  return (
    <div className="container-fluid" style={{ marginTop: "1em" }}>
      <TitleHeader country={country} />
      {isLoading ? <LoadingBar message="Please wait while we are getting latest data"/> : null}
      <CaseCards data={formattedData} />
      <DetailStatCards data={arr}/>
      <section className="country-chart">
        <CountryCharts countryData={data}/>
      </section>
      
    </div>
  );
}
