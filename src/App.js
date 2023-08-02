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

  

  render() {
    return (
      <div>

        <BrowserRouter> 



            <NavBar   />

            <Routes>
            <Route path='/'   element={ < NewsContainer key = "/"  pageSize={15} category={'general'} />}  />
            
            <Route path='/Business'  element={ < NewsContainer  key = "Business"  pageSize={15} category={'business'} />}  />


            <Route path='/Health'  element={ < NewsContainer  key = "Health"  pageSize={15} category={'health'} />}  />

            <Route path='/Science'   element={ < NewsContainer  key = "Science"  pageSize={15} category={'science'} />}  />

            <Route path='/Sports'   element={ < NewsContainer key = "Sports"  pageSize={15} category={'sports'} />}  />

            <Route path='/Technology'  element={ < NewsContainer key = "Technology"   pageSize={15} category={'technology'} />}  />

            </Routes>





         

        {/* Sending the props for page size */}






      </BrowserRouter>
      </div>

    )
  }
}

export default App


