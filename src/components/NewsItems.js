import { Component } from "react";
import '../App.css';

class NewsItems extends Component {
    render() {
        return (
            <div className="card h-100 my-3" onClick={() => window.open(this.props.Url, "_blank")} style={{width: "18rem;"}}>
                <img src={this.props.imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">{this.props.desc}</p>
                    {/* <a href="#" className="btn btn-primary btn-sm">Read more</a> */}
                </div>
            </div>
        )
    }
}

export default NewsItems;