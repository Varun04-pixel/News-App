import { Component } from "react";
import '../App.css';
import errImage from '../assets/download.jpeg'

class NewsItems extends Component {
    render() {
        return (
            <div className="card h-100 my-3" onClick={() => window.open(this.props.Url, "_blank")} style={{width: "18rem;"}}>
                <img src={!this.props.imageUrl ? errImage : this.props.imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">{this.props.desc}</p>
                    <p className="card-text"><small className="text-body-secondary">By {this.props.author ? this.props.author : "Unknown"} on {new Date(this.props.date).toLocaleString()}</small></p>
                    {/* <a href="#" className="btn btn-primary btn-sm">Read more</a> */}
                </div>
            </div>
        )
    }
}

export default NewsItems;