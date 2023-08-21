/* The NewsItems class is a React component that displays a card with a title, description, and image. */
import React, { Component } from 'react'



//  So we will show the title and description in the news items along with their images
export class NewsItems extends Component {


    render() {
        let { title, description, newsUrl, imgUrl, author, date } = this.props;
        // Using destructuring here. Title and description will get there respective value from the this.props object. We can use title and description directly now insetead of using this.props.title and this.props.description

        return (
            <div>


                {/* Making card from bootstrap here */}
  
                <div className="card my-2 card-deck " style={{ borderRadius: '10px' }} >

                    <img className="card-img-top" src={!imgUrl ? "https://images4.alphacoders.com/131/1315826.jpg" : imgUrl} alt="Card image cap" class="img-fluid" style={{ objectFit: "cover", height: "200px", width: "420px" }} />
                    <div className="card-body">
                        <h5 className="card-title" style={{ height: '50px', overflow: "clip" }}>{title} ...</h5>
                        <p className="card-text" style={{ height: '50px', overflow: "clip", marginBottom: "0", }}>{description}...
                        </p>
                        <p class="card-text" style={{height:"25px",marginBottom:"0", overflow:"clip"}}><small class="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString().slice(0, 11)}</small></p>


                        <div style={{height:"45px", paddingTop:"5px", paddingBottom:"10px"}}>
                            <a href={newsUrl} rel='noreferal' target="_blank" className="btn btn-dark btn-sm " style={{ overflow: "clip", marginTop: "7px" }}>Read More</a>
                        </div>

                        {/* Giving btn-sm class here to make the button smaller */}
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItems


