import React, { Component } from 'react'

import {
  Link,
  
} from "react-router-dom";

export class NavBar extends Component {
  render() {
    return (
      <div>


<nav className="navbar navbar-expand-lg navbar-light bg-light">

  <div className="container-fluid">
   <Link className="navbar-brand" to="#">Smart News</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>


    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">

        <li className="nav-item">
         <Link className="nav-link " aria-current="page" to="/">Home</Link>
        </li>
       
        <li className="nav-item">
         <Link className="nav-link" to="/Business">Business</Link>
        </li>

        

        <li className="nav-item">
         <Link className="nav-link" to="/Health">Health</Link>
        </li>

        <li className="nav-item">
         <Link className="nav-link" to="/Science">Science</Link>
        </li>

        <li className="nav-item">
         <Link className="nav-link" to="/Sports">Sports</Link>
        </li>

        <li className="nav-item">
         <Link className="nav-link" to="/Technology">Technology</Link>
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
