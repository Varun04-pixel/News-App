import { Component } from "react";

class NavBar extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid ms-3">
                    <a class="navbar-brand" href="#">News Wars</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-5 me-auto mb-2 mb-lg-0">
                        <li class="nav-item me-3">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item me-3">
                            <a class="nav-link" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                    <form class="d-flex mt-2 me-5" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search News" aria-label="Search"/>
                        <button class="btn btn-outline-primary" type="submit">Search</button>
                    </form>
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavBar;