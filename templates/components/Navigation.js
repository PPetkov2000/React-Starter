module.exports = `import React from "react"
import { Link } from "react-router-dom"

const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-brand-link">App Logo</Link>
      </div>
      <ul className="navbar-items">
        <li className="navbar-item">
          <Link to="/" className="navbar-item-link">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/register" className="navbar-item-link">Register</Link>
        </li>
        <li className="navbar-item">
          <Link to="/login" className="navbar-item-link">Login</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
`
