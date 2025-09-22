import { Component } from "react";
import { NavLink, Link } from "react-router-dom";

class NavBar extends Component {
    constructor() {
        super();
        this.state = {
            input: ''
        }
    }

    handleOnChange = (e) => {
        this.setState({
            input: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.search(this.state.input)
    }

    render() {
        return (
            <nav className="navbar sticky-top navbar-expand-lg bg-opacity-75 bg-body-tertiary">
                <div className="container-fluid ms-3">
                    <NavLink className="navbar-brand" to="/">News Wars</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-5 me-auto mb-2 mb-lg-0">
                        <li className="nav-item me-3">
                            <NavLink to="/" onClick={() => this.props.onCategoryChange('general')} className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>Home</NavLink>
                        </li>
                        <li className="nav-item dropdown me-3">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Category
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" onClick={() => this.props.onCategoryChange('business')} to="/business">business</Link></li>
                                <li><Link className="dropdown-item" onClick={() => this.props.onCategoryChange('entertainment')} to="/entertainment">entertainment</Link></li>
                                <li><Link className="dropdown-item" onClick={() => this.props.onCategoryChange('health')} to="/health">health</Link></li>
                                <li><Link className="dropdown-item" onClick={() => this.props.onCategoryChange('science')} to="/science">science</Link></li>
                                <li><Link className="dropdown-item" onClick={() => this.props.onCategoryChange('sports')} to="/sports">sports</Link></li>
                                <li><Link className="dropdown-item" onClick={() => this.props.onCategoryChange('technology')} to="/technology">technology</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item me-3">
                            <NavLink className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} to="/about">About</NavLink>
                        </li>
                        <li className="nav-item me-3">
                            <NavLink className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                    <form className="d-flex mt-2 me-5" role="search">
                        <input className="form-control me-2" type="search" onChange={this.handleOnChange} placeholder="Search News" aria-label="Search"/>
                        <button className="btn btn-outline-primary" onClick={this.handleSubmit}>Search</button>
                    </form>
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavBar;