import React, { useContext } from 'react'
import { CoronaContext } from '../../context/context'

import World from './World'
import StatSummary from '../StatSummary/StatSummary'
export const Map = (props) => {
  const context = useContext(CoronaContext)
  const { load, all, continents } = context
  const { title } = props
  console.log(load);
  
  return (
    <>
    <div className='card middle-map'>
      <header className="card-header">
  <p className="card-header-title">> {title}</p>
      </header>
      <div className="card-content">
        {/* draw the map */}
     <World />
      </div>
    </div>
    <div className="column" style={{padding:'0.75rem 0'}}>
      <StatSummary continents={continents} data={all} title="More Statistics"/>
    </div>  
    </>
  )
}

export default Map