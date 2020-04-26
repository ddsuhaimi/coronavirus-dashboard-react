import React from 'react'

export default function DetailStatCard({data}) {
  return (
    <div className="card">
      <div className="card-content">
        <span>
        <div className="casetype is-uppercase has-text-weight-light">
            {data.title}
          </div>
          {data.number}
        </span>
      </div>
      
    </div>
  )
}
