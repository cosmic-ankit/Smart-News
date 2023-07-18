/* The NewsItems class is a React component that displays a card with a title, description, and image. */
import React, { Component } from 'react'



//  So we will show the title and description in the news items along with their images
export class NewsItems extends Component {


    render() {
        let {title, description , newsUrl, imgUrl } = this.props;
        // Using destructuring here. Title and description will get there respective value from the this.props object. We can use title and description directly now insetead of using this.props.title and this.props.description

        return (
            <div>
                

{/* Making card from bootstrap here */}

                <div className="card my-2 card-deck " style={{width: "18rem" }}>
                    <img className="card-img-top" src={!imgUrl? "https://images4.alphacoders.com/131/1315826.jpg" :imgUrl} alt="Card image cap" class="img-fluid" style= {{objectFit: "cover", height: "200px", width:"300px"}} />
                        <div className="card-body">
                            <h5 className="card-title" style={{height:'50px'}}>{title} ...</h5>
                            <p className="card-text" style={{height:'50px'}}>{description} ...</p>
                            <a href={newsUrl} rel='noreferal' target = "_blank" className="btn btn-primary btn-sm " style = {{marginTop:'20px', marginBottomBottom:'30px'}}>Read More</a>
                            {/* Giving btn-sm class here to make the button smaller */}
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItems


