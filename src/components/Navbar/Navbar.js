import React from "react";

function Navbar() {
  const [isActive, setisActive] = React.useState(false);
  return (
    <nav
      className="navbar is-dark"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a href="/" className="navbar-item">
          <img
            alt="s"
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
          />
        </a>
        <a
          href="/"
          onClick={() => {
            setisActive(!isActive);
          }}
          role="button"
          className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div
        id="navbarBasicExample"
        className={`navbar-menu ${isActive ? "is-active" : ""}`}
      >
        <div className="navbar-start">
          <a href="/" className="navbar-item">
            Dashboard
          </a>
          <a href="/" className="navbar-item">
            Country
          </a>
          <a href="/" className="navbar-item">
            FAQ
          </a>
          <a href="/" className="navbar-item">
            About
          </a>
          <a href="/" className="navbar-item">
            Github
          </a>
        </div>

        <div className="navbar-end ">
          <div
            className="field navbar-item"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="tengah">
              <input
                id="nightSwitch"
                type="checkbox"
                name="nightSwitch"
                className="switch is-rounded is-outlined"
                // checked="checked"
                // onClick={e => e.target.checked = !e.target.checked}
              />
            <label htmlFor="nightSwitch">Night</label>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar