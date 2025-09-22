import React, {Component} from "react";
import NewsComp from "./NewsComp";

class Home extends Component {

    render() {
        return (
            <>
                <div className="container my-3">
                    <NewsComp query={this.props.query} category={this.props.category}/>
                </div>
            </>
        )
    }
}
 
export default Home;