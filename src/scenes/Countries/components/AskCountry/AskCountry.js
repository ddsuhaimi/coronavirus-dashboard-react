import React, { useContext, useState } from "react";
import { Redirect } from 'react-router-dom'
import { CoronaContext } from "../../../../context/context";
export default function AskCountry(props) {
  const { countriesList } = props
  const [isOpen, setIsOpen] = useState(true)
  const [country, setCountry] = useState("Afghanistan")

  const handleCancel = (e) => {
    setIsOpen(false)
    window.location.href = '/'
  }

  const handleSubmit = e => {
    window.location.href +=`/${country}`
    // props.history.push(`/Angola`)
    // return <Redirect to={{ pathname: '/overview' }} />
    // return <Redirect to={`/`} />
  }

  const handleSelect = e => {
    setCountry(e.target.value)
  }

  if (!isOpen) {
    return null
  }
  return (
    
    <div class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Select country</p>
          <button onClick={handleCancel} className="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
          <div class="field">
            {countriesList.length === 0 ? (
              <>
                <p>Please wait while we are getting the list</p>
                <progress class="progress is-small is-primary" max="100">
                  15%
                </progress>{" "}
              </>
            ) : null}
            <div class="control has-icons-left">
              <div class="select">
                <select onChange={handleSelect}>
                  {countriesList &&
                    countriesList.map((countryName) => (
                      <option key={countryName}>{countryName}</option>
                    ))}
                </select>
              </div>
              <div class="icon is-small is-left">
                <i class="fas fa-globe"></i>
              </div>
            </div>
          </div>
        </section>
        <footer class="modal-card-foot">
          <button onClick={handleSubmit} class="button is-success">Submit</button>
          <button onClick={handleCancel} class="button">Cancel and Back</button>
        </footer>
      </div>
    </div>
  );
}
