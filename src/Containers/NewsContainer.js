import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class NewsContainer extends Component {


    // We have made an array by article name and have
    articles =
        [
            {

                "source": {
                    "id": null,
                    "name": "MLSsoccer.com"
                },
                "author": "mlssoccer",
                "title": "MLS history! El Tráfico at Rose Bowl sets single-game attendance record | MLSSoccer.com - MLSsoccer.com",
                "description": "It was a July 4th celebration for the history books.",
                "url": "https://www.mlssoccer.com/news/mls-history-el-trafico-at-rose-bowl-sets-single-game-attendance-record",
                "urlToImage": "https://images.mlssoccer.com/image/private/t_q-best/prd-league/l14qeevznh56vhmtaovt.png",
                "publishedAt": "2023-07-05T05:37:30Z",
                "content": null
            },

            {
                "source": {
                    "id": null,
                    "name": "BBC News"
                },
                "author": "https://www.facebook.com/bbcnews",
                "title": "Biden officials must limit contact with social media firms - BBC",
                "description": "A judge bars officials from contacting platforms over \"content containing protected free speech\".",
                "url": "https://www.bbc.com/news/technology-66106067",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/85A1/production/_130290243_gettyimages-1506001186.jpg",
                "publishedAt": "2023-07-05T04:54:56Z",
                "content": "A US federal judge has limited the Biden administration's communications with social media companies which are aimed at moderating their content.\r\nIn a 155-page ruling on Tuesday, judge Terry Doughty… [+2799 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Yahoo Entertainment"
                },
                "author": "Tassia Sipahutar",
                "title": "Stocks Decline as China Data Saps Risk Sentiment: Markets Wrap - Yahoo Finance",
                "description": "(Bloomberg) -- Futures for US and European benchmarks slid along with Asian stocks Wednesday as growth in China’s services industry slowed, sapping appetite ...",
                "url": "https://finance.yahoo.com/news/asian-stocks-poised-decline-oil-222511816.html",
                "urlToImage": "https://media.zenfs.com/en/bloomberg_markets_842/26205c106eba8d59214c570743f5280d",
                "publishedAt": "2023-07-05T04:31:00Z",
                "content": "(Bloomberg) -- Futures for US and European benchmarks slid along with Asian stocks Wednesday as growth in Chinas services industry slowed, sapping appetite for equities.\r\nMost Read from Bloomberg\r\nA … [+4843 chars]"
            },
            {
                "source": {
                    "id": "cbs-news",
                    "name": "CBS News"
                },
                "author": "Robert Costa",
                "title": "Former GOP congressman and Jan. 6 select committee adviser Denver Riggleman now working with Hunter Biden - CBS News",
                "description": "Hunter Biden is facing increasing scrutiny from House Republicans over his business dealings.",
                "url": "https://www.cbsnews.com/news/hunter-biden-denver-riggleman-former-gop-congressman-jan-6-select-committee-adviser/",
                "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2023/07/05/3014708e-512f-4af2-a1c4-b188aac47a79/thumbnail/1200x630/de0114c13eac1813669722b5d5adf750/gettyimages-1228806625.jpg?v=f3503a7856c58c20acab4eae8bb1f0f4",
                "publishedAt": "2023-07-05T03:58:00Z",
                "content": "Former Republican Rep. Denver Riggleman of Virginia — who served as a senior technical adviser to the House select committee probing the Jan. 6, 2021, assault on the Capitol — is working with the leg… [+6961 chars]"
            },
        ]
        // This article is an array of onjects

    constructor() // Whenever the object of this class will be make it will run, hence it will run for each time newsItem would be called.
    {
        super();
        this.state = {
            articles: this.articles,
            loading: false
        }
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

                             <div className = "col-md-4" >
                        < NewsItems title={element.title.slice(0,45)} key = {element.url} description={element.description.slice(0,88)} newsUrl={element.url}  imgUrl = {element.urlToImage}/>
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
