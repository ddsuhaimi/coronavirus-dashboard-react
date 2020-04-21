import React, { useContext } from "react";
import CaseCard from "../CaseCard/CaseCard";
import Table from "../Table/Table";
import Map from '../Map/Map'
import CaseCards from '../CaseCards/CaseCards'
import { CoronaContext } from '../../context/context'
export default function Dashboard() {
  const context = useContext(CoronaContext)
  const { prepareTableData, prepareUSStatesTableData } = context
  const WorldData = prepareTableData()
  const USData = prepareUSStatesTableData()
  console.log(USData)
  

  

  return (
    <div className="container-fluid ">
    {/* // section case card */}
    <section className="case-card" style={{ marginTop: "1em" }}>
    <CaseCards />
    </section>
    {/* // end of section case card */}

    {/* section stat */}
    <section className="content-stat">
      <div className="columns">
        <div className="dashboard-left column is-3  is-half-desktop is-one-quarter-widescreen"><Table title="World" data={WorldData} /></div>
        <div className="dashboard-middle column">  {/* middle column*/}
          <Map title="Infection Map"/>
        </div>
        <div className="dashboard-right column is-3  is-half-desktop is-one-quarter-widescreen"><Table title="United States"data={USData} /></div>
      </div>
    </section>
    {/* end of section stats */}
    

    </div>
  );
}
