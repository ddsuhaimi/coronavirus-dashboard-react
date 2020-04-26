import React from 'react'
import DetailScatCard from './DetailStatCard'

export default function DetailStatCards({data}) {
  

  return (
    <div className="columns">
     {data.map((a) => (
       <div className="column">

     <DetailScatCard data={a}/>
       </div>
     ))} 
    </div>
  )
}
