import React from "react";

export default function MoreStats(props) {
  const { today, yesterday } = props.data;
  const continents = props.continents;
  return (
    <div className="card">
      <header className="card-header">
        <p className="card-header-title">> {props.title}</p>
      </header>
      <div className="card-content columns">
        <div className="column">
          <ul className="list">
            <li className="list-item">
              Affected Continents:
              <span className="stat-value">{continents.length}</span>
            </li>
            <li className="list-item">
              Affected Countries:
              <span className="stat-value">{today.affectedCountries}</span>
            </li>
            <li className="list-item">
              Cases per one million:
              <span className="stat-value">{today.casesPerOneMillion}</span>
            </li>
            <li className="list-item">
              Deaths per one million:
              <span className="stat-value">{today.deathsPerOneMillion}</span>
            </li>
            <li className="list-item">
              Tests per one million:
              <span className="stat-value">{today.testsPerOneMillion}</span>
            </li>
            <li className="list-item">
              Critical Cases:
              <span className="stat-value">{today.critical}</span>
            </li>
          </ul>
        </div>
        <div className="column">
          <ul className="list">
            {continents &&
              continents.map((continent, i) => (
                <li key={i} className="list-item">
                  Cases in {continent.continent}:{" "}
                  <span className="stat-value">{continent.cases}</span>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
