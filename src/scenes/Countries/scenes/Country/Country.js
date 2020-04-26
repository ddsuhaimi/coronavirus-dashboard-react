import React, { useContext, useEffect, useState } from "react";
import { CoronaContext } from "../../../../context/context";
import CaseCards from "../../../components/CaseCards";
import TitleHeader from "./components/TitleHeader";
import LoadingBar from '../../../components/LoadingBar'
import DetailStatCards from './components/DetailStatCards'
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
      let [today, yesterday] = await Promise.all([
        (
          await fetch(`https://corona.lmao.ninja/v2/countries/${country}`)
        ).json(),
        (
          await fetch(
            `https://corona.lmao.ninja/v2/countries/${country}?yesterday=1`
          )
        ).json(),
      ]);
      setData({
        today: today,
        yesterday: yesterday,
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
        {title:"Cases per one million", number:data.today.casesPerOneMillion},
        {title:"Deaths per one million", number:data.today.deathsPerOneMillion},
        {title:"Tests per one million", number:data.today.testsPerOneMillion},
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
      
    </div>
  );
}
