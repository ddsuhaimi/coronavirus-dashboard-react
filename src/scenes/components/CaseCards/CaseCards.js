import React, { Component, useContext, useState, useEffect, createContext } from "react";
import CaseCard from "./CaseCard";


export function CaseCards(props) {
  const data = props.data
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
