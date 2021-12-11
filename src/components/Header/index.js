// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="header-card">
    <div className="logo-image-container">
      <img
        className="logo-style"
        alt="wave"
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
      />
      <h1 className="logo-heading-style">Wave</h1>
    </div>
    <div className="links-container">
      <Link className="link-style-item" to="/">
        Home
      </Link>
      <Link className="link-style-item" to="/about">
        About
      </Link>
      <Link className="link-style-item" to="/contact">
        Contact
      </Link>
    </div>
  </div>
)

export default Header
