import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AskCountry from "./components/AskCountry";
import Test from "./components/Test";
export default function Country() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/country" component={AskCountry} />
        <Route  path="/country/:countryName" component={Test} />
      </Switch>
    </BrowserRouter>
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
