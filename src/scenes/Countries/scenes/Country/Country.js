import React, { useContext, useEffect, useState } from "react";
import { CoronaContext } from "../../../../context/context";
import CaseCards from "../../../components/CaseCards";
import TitleHeader from "./components/TitleHeader";
export default function Country(props) {
  const { prepareCaseCardData, all } = useContext(CoronaContext);
  const [country, setCountry] = useState(props.match.params.country);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});
  const [formattedData, setFormattedData] = useState([]);
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
    }
  }, [data]);

  const Loading = (
    <>
      <p>Please wait while we are getting the data</p>
      <progress class="progress is-small is-primary" max="100">
        15%
      </progress>{" "}
    </>
  );

  return (
    <div className="container-fluid" style={{ marginTop: "1em" }}>
      <TitleHeader country={country} />
      {isLoading ? Loading : null}
      <CaseCards data={formattedData} />
    </div>
  );
}
