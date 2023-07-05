import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class NewsContainer extends Component {
  render() {
    return (
      <div>
        
        This is a news container
        <NewsItems/>  
        {/* Adding news items over here */}

      </div>
    )
  }
}

export default NewsContainer
