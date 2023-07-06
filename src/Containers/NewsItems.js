/* The NewsItems class is a React component that displays a card with a title, description, and image. */
import React, { Component } from 'react'



//  So we will show the title and description in the news items along with their images
export class NewsItems extends Component {


    render() {
        let {title, description , imgUrl, newsUrl } = this.props;
        // Using destructuring here. Title and description will get there respective value from the this.props object. We can use title and description directly now insetead of using this.props.title and this.props.description

        return (
            <div>
                News Items

{/* Making card from bootstrap here */}

                <div className="card" style={{width: "18rem"}}>
                    <img className="card-img-top" src={imgUrl} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a href={newsUrl} className="btn btn-primary btn-sm">Read More</a>
                            {/* Giving btn-sm class here to make the button smaller */}
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItems
