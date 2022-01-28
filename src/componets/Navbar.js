import React, { Component } from 'react';

export class Navbar extends Component {
    render() {
        return (
            <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="/">NewsStar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" href="/">business</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">entertainment</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">general</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">health</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">science</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">sports</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">technology</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
