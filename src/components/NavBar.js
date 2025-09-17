import { Component } from "react";

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid ms-3">
                    <a className="navbar-brand" href="/">News Wars</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-5 me-auto mb-2 mb-lg-0">
                        <li className="nav-item me-3">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item me-3">
                            <a className="nav-link" href="/">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Contact</a>
                        </li>
                    </ul>
                    <form className="d-flex mt-2 me-5" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search News" aria-label="Search"/>
                        <button className="btn btn-outline-primary" type="submit">Search</button>
                    </form>
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavBar;