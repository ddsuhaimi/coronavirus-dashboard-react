import React from "react";

export default function About() {
  return (
    <div className="container" style={{ marginTop: "2rem" }}>
      {/* <h1 className="is-size-1">About</h1> */}
      <h2 className="is-size-2">Who made the site?</h2>
      My name is Dedi. I am a developer from Indonesia. Feel free to follow me
      by clicking twitter button on menu.
      <hr />
      <h2 className="is-size-2"> Data sources?</h2>
      Cumulative data (total confirmed cases, deaths, active cases etc.) is
      obtained from Worldometers while historical data (infection stats over
      time) is obtained from John Hopkins University.
      
      However, I did used an API to make developing the site easier. You can find the api <a href="https://github.com/NovelCOVID/API">here</a>.
      <hr />
      
      <h2 className="is-size-2">What's next?</h2>
      I plan to add more features into the site. For example, historical chart that shows number of cases in the world over time and night mode.
      I will edit this page once I finish working on it.
      <hr/>
    </div>
  );
}
