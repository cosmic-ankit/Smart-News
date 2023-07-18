import React, { Component } from 'react'

export class NavBar extends Component {
  render() {
    return (
      <div>


<nav className="navbar navbar-expand-lg navbar-light bg-light">

  <div className="container-fluid">
    <a className="navbar-brand" href="#">Smart News</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Business</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">General</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Health</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Science</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Sports</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Technology</a>
        </li>

        {/* Making categories in navbar */}
        {/* Shift + Alt + Click for multiple cursors*/}
        
      </ul>

      
    </div>

    <div className={`form-check form-switch mx-3 text-${this.mode==="light"?"black":"white"}`}>
  {/* text-light class do the text in white and text-dark in black */}

  <input className="form-check-input " type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Switch Mode</label>

  </div>
  

  </div>


</nav>
        
      </div>
    )
  }
}

export default NavBar
