import React, { Component, useContext, useState, useEffect, createContext } from "react";
import { CoronaContext } from "../../context/context";
import CaseCard from "../CaseCard/CaseCard";


export function CaseCards() {

  const context = useContext(CoronaContext)
  const {prepareCaseCardData} = context
  const data = prepareCaseCardData()
  // console.log(globalData)
  

   
        
  

  // console.log('casecards', summary)

  // console.log('global', Global.TotalConfirmed)
  // console.log(Global.TotalConfirmed)

  // console.log(NewRecovered)
  // const data = [
  //   { cases: Global.TotalConfirmed, newCases: Global.NewConfirmed, title: "confirmed", color:'info', perc:80},
  //   // { cases: TotalDeaths, newCases: NewDeaths, title: "deaths", color:'danger',perc:12},
  //   // { cases: TotalRecovered, newCases: NewRecovered, title: "recovered", color:'success',perc:-5 },
  //   // { cases:TotalConfirmed-TotalDeaths-TotalRecovered, newCases: "29", title: "active", color:'warning',perc:-10},
  // ];
  // console.log
    return (
      <div className="columns">
        {data && data.map((item) => (
          <div key={item.cases} className="column">
            <CaseCard item={item} />
          </div>
        ))}
      </div>
    );
  
}

export default CaseCards;
