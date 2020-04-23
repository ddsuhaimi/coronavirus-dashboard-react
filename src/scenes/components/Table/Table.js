import React from "react";

export default function Table(props) {
  let { title, data } = props
  // data = data[0]
  const fields = data.length === 0 ? null : Object.keys(data[0])
  // const keysTable = Object.keys(data[0])
  return <div>
    <div className="card">
    <header className="card-header">
  <p className="card-header-title">> {title}</p>
</header>
    <div className="card-content">

      <div className="table-container country-table" style={{display:'flex',flexDirection:'column'}}>
      <table style={{flexGrow:'1'}} className="table is-fullwidth is-bordered is-striped is-narrow is-hoverable">
      {/* <colgroup>
        <col span={1} style={{width:'100px'}}/>
        <col style={{color:'red'}}/>
        </colgroup> */}
        <thead>
          <tr>
            {fields && fields.map(field => (
              <th key={Math.random()} className="has-text-weight-medium is-uppercase">{field}</th>
            ))}
            {/* <th><abbr title='Position'></abbr>Pos</th>
            <th>Name</th>
            <th>Cases</th>
            <th>Deaths</th>
            <th><abbr title='Recovered'>Recov</abbr></th> */}
          </tr>
        </thead>


        <tbody>
          {data && data.map((row,i) => (
            <tr key={Math.random()}>
              {/* <td key={Math.random()}>{i+1}</td> */}
              {Object.values(row).map(val => (
                // <td>{i}</td>
                <td key={Math.random()}>{val}</td>
              ))}
              {/* <td key={Math.random()}>a</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  </div>
</div>
  // return (
  //   <div className="card">
  //     <div className="card-content">

      
  //   <div className="table-container">
  //     <table className="table is-hoverable is-fullwidth is-striped is-narrow">
  //       <thead>
  //         <tr>
  //           {keysTable.map((key, index) => (
  //             <th key={index} >{key}</th>
  //           ))}
  //         </tr>
  //       </thead>

  //       <tbody>
  //         {data.map((row, idx) => (
  //           <tr key={idx}>
  //             {Object.values(row).map(r => (
  //               <td key={Math.random()}>{r}</td>
  //             ))}
  //           </tr>
  //         ))}
  //       </tbody>
  //     </table>
  //   </div>
  //   </div>
  //   </div>
  // );
}
