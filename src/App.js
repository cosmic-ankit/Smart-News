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
import LoadingBar from 'react-top-loading-bar'
// import Spinner from './Containers/Spinner';

export class App extends Component {

  
  apiKey = process.env.REACT_APP_API_KEY;
  
state = {
  progress : 0,
  // Here we have craeted a state and do thr progess key to be 0.
}


setProgress(progress){
  this.setState({progress: progress})
  //Updating thr progress over here. Now we will pass this function to news component and update the progress as require.
  //  We are adding the top loading bar below the navbar, the top loading bar will uopdate its value to 100 as we render the page or update the code/* setProgress = {this.setProgress} */ newsAPI = {this.apiKey}
}

  render() {
    return (
      <div>

        <BrowserRouter> 



            <NavBar   />

            {/* <LoadingBar // Adding react top loading bar functions here 
        height={3}
        color='#f11946'
        progress={this.state.progress}

        // There is a problem in react version of top loading bar as it is using the hook accprding to the previous version so commenting it out in the code

      /> */}


            <Routes>cd 
            <Route path='/'   /* setProgress = {this.setProgress} */ newsAPI = {this.apiKey}element={ < NewsContainer key = "/"  pageSize={15} category={'general'} />}  />
            
            <Route path='/Business'  element={ < NewsContainer  key = "Business"  pageSize={15} category={'business'} />}  />


            <Route path='/Health' /* setProgress = {this.setProgress} */ newsAPI = {this.apiKey} element={ < NewsContainer  key = "Health"  pageSize={15} category={'health'} />}  />

            <Route path='/Science'  /* setProgress = {this.setProgress} */ newsAPI = {this.apiKey} element={ < NewsContainer  key = "Science"  pageSize={15} category={'science'} />}  />

            <Route path='/Sports'  /* setProgress = {this.setProgress} */ newsAPI = {this.apiKey} element={ < NewsContainer key = "Sports"  pageSize={15} category={'sports'} />}  />

            <Route path='/Technology' /* setProgress = {this.setProgress} */ newsAPI = {this.apiKey} element={ < NewsContainer key = "Technology"   pageSize={15} category={'technology'} />}  />

            </Routes>





         

        {/* Sending the props for page size */}






      </BrowserRouter>
      </div>

    )
  }
}

export default App


