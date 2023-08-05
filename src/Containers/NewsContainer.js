import React, { Component } from 'react';
import NewsItems from './NewsItems';
import Spinner from './Spinner';
import PropTypes from 'prop-types'
//impt to import proptypes

export class NewsContainer extends Component {


    // Initializing default props and proptypes here. In class based componet we use static to craete default props and proptypes

    static defaultProps = {
        country: 'us',
        category: 'general',
        pageSize: `15`

    }

    static propTypes = {
        country : PropTypes.string, // PTS in vs code
        category : PropTypes.string,
        pageSize: PropTypes.number
    }

    // business entertainment general health science sports technology


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
            loading: true,
            page: 1,
        }

        

        




    }


    makePage=async ()=>{

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f7d94b82c6b943baa134848cc0cbe162&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        
        
        let data = await fetch(url);

        let parseData = await data.json();

        console.log(parseData);

        await this.setState({ 
            articles: parseData.articles, 
            totalArticles: parseData.totalResults,
            loading: false
        });

        // We have made the code optimized and cocide by making a different function for fetching the news so that we dont have to write these codes seprately for compnentdidmount, nectpage and previousage.

    }




    async componentDidMount() {

        await this.makePage(this.state.page);


    }

    //componentDidMount() is a lifecycle method in React class components that is invoked automatically by React when a component is inserted (or "mounted") into the DOM. It's part of the component's lifecycle, which consists of various stages from creation to destruction.



    NextPage = async () => {

         
        this.setState({ loading: true })
        
        await this.setState({ page: this.state.page + 1, })
    

        await this.makePage();




    }

    PrevPage = async () => {
        
        this.setState({ loading: true })
        await this.setState({ page: this.state.page - 1, })

        await this.makePage();






    }

    // Its a promise function which will get exectued after the newscontainer will render, then it will fetch the data . Parsedata will wait till it wont fetch the data then it will convert it into .json file. And then we will set the article to the parsed data.

    render() {




        return (
            <>
                <div>

                    <div className="container my-3 align-items-center justify-content-center">



                        {/* Text centre is a class used to make the text centre in bootstrap */}
                        <div className="text-center my-4">
                            <h1>News that makes u Smart</h1>
                        </div>

                        <div className="text-center">
                            {this.state.loading && <Spinner />}
                        </div>











                        {/* Adding news items over here */}

                        {/* Creating row and columns. In bootstrap a row can have 12 column, md-4 means this column will take the size of 4 columns. Md class is used to decide the width of a column */}


              {    !this.state.loading &&      <div className="row">

                            {this.state.articles.map((element) => (

                                <div className="col-md-4 " >
                                    < NewsItems title={element.title ? element.title : ""} key={element.url} description={element.description ? element.description.slice(0,75) : "Click On To Read More"} newsUrl={element.url} imgUrl={element.urlToImage} author = {element.author?element.author.slice(0,14):"Unknown"} date = {element.publishedAt}/>
                                    {/* Passing title and newsitems as a prop */}
                                    {/* Whenever we use map function we have to make a key for every element in it so we are assigning a key of url of a news since it is unique for each element */}
                                </div>
                            ))}

                            {/* // It uses the map function to iterate      over the articles array in the state and renders a <NewsItems/> component for each element. The key prop is set to element.url to provide a unique identifier for each rendered component. */}

                        </div>
    }

                    </div>

                </div > 








                <div className="d-flex justify-content-between container my-4">

                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.PrevPage}> &larr;	Previous</button>


                    <button disabled={this.state.page+1 > Math.ceil(this.state.totalArticles / this.props.pageSize)|| ((this.props.pageSize)*(this.state.page+1))>100} type="button" className="btn btn-dark" onClick={this.NextPage}> &rarr; Next</button>

                    {/* We have fixed the bug here the api gives maximum 100 articles, so we have written the condition for it over here */}

                    {/*  We use this.props.propName ti access props in class based component */}
                </div>

            </>


        )
    }
}

export default NewsContainer;


// There are two endpoints in news api(everything and top-healines) and we can give sources ex country and category only in top-headlines, so we will use top headlines here.
