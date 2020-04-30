import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo2.png";

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
          <img className="brand" src={logo} width="200" height="200" />
        </a>
        <a
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
          <Link to="/" className="navbar-item">
            Dashboard
          </Link>
          <Link to="/countries" className="navbar-item">
            Country
          </Link>
          {/* <Link to="/" className="navbar-item">
            FAQ
          </Link> */}
          <Link to="/about" className="navbar-item">
            About
          </Link>
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
            <a
              href="https://twitter.com/suhaimi_id?ref_src=twsrc%5Etfw"
              class="twitter-follow-button"
              data-show-count="false"
            >
              <i className="fab fa-twitter"></i>
              {"   "} Follow @suhaimi_id
            </a>
            
           
            <a style={{margin:'0 10px', color:'#fff'}}
            href="https://github.com/dediacc/coronavirus-dashboard-react"
          >
            <i className="fab fa-github"></i>
            {"   "}
          </a>
            {/* <div className="tengah" style={{marginLeft: '10px'}}>
              
              <input
                id="nightSwitch"
                type="checkbox"
                name="nightSwitch"
                className="switch is-rounded is-outlined"
                // checked="checked"
                // onClick={e => e.target.checked = !e.target.checked}
              />
              <label htmlFor="nightSwitch">Night</label>
            </div> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
