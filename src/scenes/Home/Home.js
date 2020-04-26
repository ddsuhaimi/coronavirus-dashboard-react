import React, { useContext } from "react";
import Table from "../components/Table/Table";
import InfectionMap from './components/InfectionMap'
import MoreStats from './components/MoreStats'
import CaseCards from "./../components/CaseCards";
import { CoronaContext } from "../../context/context";
export default function Dashboard() {
  const context = useContext(CoronaContext);
  const {
    prepareTableData,
    prepareUSStatesTableData,
    prepareCaseCardData, continents, all
  } = context;
  const WorldData = prepareTableData();
  const USData = prepareUSStatesTableData();
  const CaseCardData = prepareCaseCardData(all.today, all.yesterday);
  console.log(USData);

  return (
    <div className="container-fluid">
      {/* // section case card */}
      <section className="case-card" style={{ marginTop: "1em" }}>
        <CaseCards data={CaseCardData} />
      </section>
      {/* // end of section case card */}

      {/* section stat */}
      <section className="content-stat">
        <div className="columns">

          {/* Left column */}
          <div className="dashboard-left column is-3  is-half-desktop is-one-quarter-widescreen">
            <Table title="World" data={WorldData} />
          </div>

          {/* Middle column*/}
          <div className="dashboard-middle column">      
              <InfectionMap title="Infection Map" />
              
              {/* Vertical column */}
              <div className="column" style={{ padding: "0.75rem 0" }}>
                <MoreStats
                  continents={continents}
                  data={all}
                  title="More Statistics"
                />
              </div>
          </div>

          {/* Right column */}
          <div className="dashboard-right column is-3  is-half-desktop is-one-quarter-widescreen">
            <Table title="United States" data={USData} />
          </div>
        </div>
      </section>
      {/* end of section stats */}


      
    </div>
  );
}
