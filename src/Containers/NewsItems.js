/* The NewsItems class is a React component that displays a card with a title, description, and image. */
import React, { Component } from 'react'



//  So we will show the title and description in the news items along with their images
export class NewsItems extends Component {
    render() {
        let {title, discreption} = this.props;
        // Using destructuring here. Title and description will get there respective value from the this.props object. We can use title and description directly now insetead of using this.props.title and this.props.description
        
        return (
            <div>
                News Items

{/* Making card from bootstrap here */}

                <div className="card" style={{width: "18rem"}}>
                    <img className="card-img-top" src="..." alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">title</h5>
                            <p className="card-text">discreption</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItems
