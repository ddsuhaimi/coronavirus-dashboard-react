import React from 'react'

export default function TitleHeader({ country }) {
  return (
      <div className="columns">
        <div className="column">
          <div className="card">
            <div className="card-content">
              <p className="title">{country}</p>
            </div>
          </div>
        </div>
      </div>
  )
}
