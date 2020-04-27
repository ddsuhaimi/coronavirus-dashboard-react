import React from 'react'

export default function DetailStatCard({data}) {
  return (
    <div className="card">
      <div className="card-content">
        <span>
        <div className="casetype is-uppercase has-text-weight-light">
            {data.title}
          </div>
          <span className={`subtitle is-size-4 has-text-weight-semibold has-text-${data.color}`}>{data.number}</span>
        </span>
      </div>
      
    </div>
  )
}
