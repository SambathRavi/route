import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#0aaa01' }}>
            <div className="container">
                <Link className="navbar-brand" to="/">Guvi</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">All</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/full-stack">Full Stack Development</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/data-science">Data Science</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cyber-security">Cyber Security</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/career">Career</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;