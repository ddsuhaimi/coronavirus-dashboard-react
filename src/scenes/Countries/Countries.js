import React, { useContext, useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import AskCountry from "./components/AskCountry";
import { CoronaContext } from "../../context/context";
import Country from './scenes/Country'
export default function Countries() {
  const { countriesList } = useContext(CoronaContext);
  return (
    <>
      <Switch>
        <Route
          exact
          path="/countries"
          render={(props) => <AskCountry countriesList={countriesList} />}
        />
        <Route path="/countries/:country" component={Country} />
      </Switch>
    </>
  );
}

{
  /* <input type="text" className= list="cars" />
<datalist id="cars">
  <option>Volvo</option>
  <option>Saab</option>
  <option>Mercedes</option>
  <option>Audi</option>
</datalist> */
}
