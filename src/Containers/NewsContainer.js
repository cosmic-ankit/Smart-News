import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class NewsContainer extends Component {


    // We have made an array by article name and have
    // articles =
    //     [
    //     ]
        // This article is an array of onjects

    constructor() // Whenever the object of this class will be make it will run, hence it will run for each time newsItem would be called.
    {
        super();
        this.state = {
            articles: [],
            loading: false
        }

        
    }

    async componentDidMount () {

        let url = "https://newsapi.org/v2/everything?q=technology&from=2023-07-07&to=2023-07-07&sortBy=popularity&apiKey=f7d94b82c6b943baa134848cc0cbe162";

        let data = await fetch (url);

        let parseData = await data.json();

        console.log(parseData);

        this.setState({ articles : parseData.articles});


    }

    render() {




        return (
            <div>

                <div className="container my-3">
                    { }


                    {/* Text centre is a class used to make the text centre in bootstrap */}
                    <div className="text-center my-4">
                        <h1>News that makes u Smart</h1>
                    </div>









                    {/* Adding news items over here */}

                    {/* Creating row and columns. In bootstrap a row can have 12 column, md-4 means this column will take the size of 4 columns. Md class is used to decide the width of a column */}


                    <div className="row">

                        {this.state.articles.map((element) => (

                             <div className = "col-md-4 row-md-4" >
                        < NewsItems title={element.title?element.title.slice(0,40): ""} key = {element.url} description={element.description? element.description.slice(0,88):""} newsUrl={element.url}  imgUrl = {element.urlToImage}/>
                        {/* Passing title and newsitems as a prop */}
                        {/* Whenever we use map function we have to make a key for every element in it so we are assigning a key of url of a news since it is unique for each element */}
                    </div>
                    ))}
                    
{/* // It uses the map function to iterate over the articles array in the state and renders a <NewsItems/> component for each element. The key prop is set to element.url to provide a unique identifier for each rendered component. */}









                </div>





            </div>


        </div >
    )
    }
}

export default NewsContainer;
