import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Scraped Jobs</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          {/* <li className="navbar-item">
          <Link to="/" className="nav-link">Jobs</Link>
          </li> */}
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Create job</Link>
          </li>
          <li className="navbar-item">
          <Link to="/search" className="nav-link">Search job</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}