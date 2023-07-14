import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import NavBar from './Containers/NavBar';
import NewsContainer from './Containers/NewsContainer';

export class App extends Component {

  constructor() // Whenever the object of this class will be make it will run, hence it will run for each time newsItem would be called.
    {
        super();
        this.Mode = {
            mode : "light",

        }


    }

    setMode(mode) {
      if(mode==="light")
      {
        document.body.style.backgroundColor = "black";
        this.Mode.mode="dark"
        
        
      }
      else {
        
        document.body.style.backgroundColor = "white";
        this.Mode.mode="light"
      }
    }


  render() 
  {
    return (
      <div>
        <NavBar mode={this.mode} setMode={this.setMode}/>



        <NewsContainer mode={this.mode}/>




        
      </div>
    )
  }
}

export default App


 