import React from "react";

export default function CaseCard(props) {
  const { cases, newCases, title, perc, color } = props.item;

  return (
    <div className="card">
      <div className="card-content">
        <span>
          <div className="casetype is-uppercase has-text-weight-light">
            {title}
          </div>
          <div className="columns">
            <div className="column">
              <span
                style={{
                  // display: "flex",
                  alignItems: "center",
                }}
                className={`subtitle is-size-4 has-text-weight-semibold has-text-${color}`}
              >
                <i
                  className="material-icons is-size-6"
                  style={{ marginRight: "0.2em" }}
                >
                  face
                </i>
                {cases}<span style={{marginLeft:'0.5em'}}className="has-text-grey has-text-weight-light">{`(+${newCases})`}</span> 
              </span><br/>
              <span className="has-text-weight-semibold is-size-6">{perc < 0 ? <i className="fas fa-caret-down"/> : <i className="fas fa-caret-up"/>}{`  ${(100*perc).toFixed(3)}%`}</span><span> than yesterday</span>
            </div>
          </div>
        </span>
      </div>
    </div>
  );
}
