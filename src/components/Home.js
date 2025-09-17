import React, {Component} from "react";
import NewsComp from "./NewsComp";

class Home extends Component {
    render() {
        return (
            <>
                <div className="container my-3">
                    <h2 className="text-center">Top headlines Today</h2>
                    <NewsComp />
                </div>
            </>
        )
    }
}
 
export default Home;