import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => (
  <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
    <Link className="navbar-brand" to="/">
      Building Apps React Redux
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarCollapse"
      aria-controls="navbarCollapse"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink exact className="nav-link" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-link" to="/courses">
            Courses
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
