import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import NavBar from './Containers/NavBar';
import NewsContainer from './Containers/NewsContainer';

export class App extends Component {


  render() 
  {
    return (
      <div>
        <NavBar/>
        <NewsContainer/>




        
      </div>
    )
  }
}

export default App


 