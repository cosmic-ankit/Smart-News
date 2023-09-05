import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';


import {
  Link,
  
} from "react-router-dom";

export class NavBar extends Component {
  render() {
    return (
      <div>


<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">

  <div className="container-fluid">
     <Link className="navbar-brand" to="/">Smart News</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>


    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">

        <li className="nav-item">
         <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
        </li>
       
        <li className="nav-item">
         <NavLink className="nav-link" to="/Business">Business</NavLink>
        </li>

        

        

        <li className="nav-item">
         <NavLink className="nav-link" to="/Health">Health</NavLink>
        </li>

        <li className="nav-item">
         <NavLink className="nav-link" to="/Science">Science</NavLink>
        </li>

        <li className="nav-item">
         <NavLink className="nav-link" to="/Sports">Sports</NavLink>
        </li>

        <li className="nav-item">
         <NavLink className="nav-link" to="/Technology">Technology</NavLink>
        </li>

        {/* Making categories in navbar */}
        {/* Shift + Alt + Click for multiple cursors*/}
        
      </ul>

      
    </div>


  

  </div>


</nav>
        
      </div>
    )
  }
}

export default NavBar
