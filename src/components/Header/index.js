// Write your JS code here
import './index.css'

const Header = () => (
  <nav className="navbar-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
      className="logo-img"
    />
    <ul className="nav-links-container">
      <li className="nav-link">Home</li>
      <li className="nav-link">Products</li>
      <li className="nav-link">Cart</li>
      <button type="button" className="logout-btn">
        Logout
      </button>
    </ul>
  </nav>
)

export default Header
