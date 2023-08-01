import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import React, { Component } from 'react'
import NavBar from './Containers/NavBar';
import NewsContainer from './Containers/NewsContainer';
// import Spinner from './Containers/Spinner';

export class App extends Component {

  constructor() // Whenever the object of this class will be make it will run, hence it will run for each time newsItem would be called.
  {
    super();
    this.Mode = {
      mode: "light",

    }


  }

  setMode(mode) {
    if (mode === "light") {
      document.body.style.backgroundColor = "black";
      this.Mode.mode = "dark"


    }
    else {

      document.body.style.backgroundColor = "white";
      this.Mode.mode = "light"
    }
  }


  render() {
    return (
      <div>

        <BrowserRouter> 



            <NavBar mode={this.mode} setMode={this.setMode} />

            <Routes>
            <Route path='/Business'  element={ < NewsContainer  key = "Business" mode={this.mode} pageSize={15} category={'business'} />}  />

            <Route path='/'   element={ < NewsContainer key = "/" mode={this.mode} pageSize={15} category={'general'} />}  />

            <Route path='/Health'  element={ < NewsContainer  key = "Health" mode={this.mode} pageSize={15} category={'health'} />}  />

            <Route path='/Science'   element={ < NewsContainer  key = "Science" mode={this.mode} pageSize={15} category={'science'} />}  />

            <Route path='/Sports'   element={ < NewsContainer key = "Sports" mode={this.mode} pageSize={15} category={'sports'} />}  />

            <Route path='/Technology'  element={ < NewsContainer key = "Technology"  mode={this.mode} pageSize={15} category={'technology'} />}  />

            </Routes>





         

        {/* Sending the props for page size */}






      </BrowserRouter>
      </div>

    )
  }
}

export default App


