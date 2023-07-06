import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class NewsContainer extends Component {
    render() {
        return (
            <div>

                <div className="container my-3">



{/* Text centre is a class used to make the text centre in bootstrap */}
                    <div className="text-center my-4">
                    <h1>News that makes u Smart</h1>
                    </div>







                    {/* Adding news items over here */}

{/* Creating row and columns. In bootstrap a row can have 12 column, md-4 means this column will take the size of 4 columns. Md class is used to decide the width of a column */}


                    <div className="row"> 

                        <div className="col-md-4">
                            <NewsItems title={"title"} description={"description"} />
                        </div>
                        <div className="col-md-4">
                            <NewsItems title={"title"} description={"description"} />
                        </div>
                        <div className="col-md-4">
                            <NewsItems title={"title"} description={"description"}/>
                        </div>
{/* Passing title and newsitems as a prop */}


                    </div>





                </div>


            </div>
        )
    }
}

export default NewsContainer
