import React from 'react';
import logo from '../src/assets/default.png';
import './Navbar.css';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);

  return (
    <header className="main-header">
  <div className="nav-container">
    <div className="logo-section">
      <img src={logo} alt="Popcart Logo" className="nav-logo" />
    </div>
    <nav className={`nav-links ${isOpen ? 'active' : ''}`}>
      <div className="dropdown">
        <button className="dropbtn">Categories</button>
        <div className="dropdown-content">
          <a href="#">Electronics</a>
          <a href="#">Jewelry</a>
          <a href="#">Men's Clothing</a>
          <a href="#">Women's Clothing</a>
        </div>
      </div>
      <a className="menu" href="#deals">Deals</a>
      <a className="menu" href="#new">What's New?</a>
      <a className="menu" href="#Delivery">Delivery</a>
      <div className="side-actions">
        <button className="mobile-search-trigger" onClick={() => setIsSearchOpen(!isSearchOpen)}>
          🔍 Search
        </button>
        <button className="cart-icon">
          🛒 <span className="cart-count">0</span> Cart
        </button>
        <button className="account-btn">
          👤 Account
        </button>
      </div>
    </nav>

    <div className="nav-actions">
      <div className="search-bar desktop-only">
        <input type="text" placeholder="Search products..." />
      </div>
      <button className="cart-icon desktop-only">
        🛒 <span className="cart-count">0</span>
      </button>
      <button className="account-btn desktop-only">
        👤 Account
      </button>

      <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '✕' : '☰'}
      </button>
    </div>
  </div>

  <div className={`mobile-search-overlay ${isSearchOpen ? 'active' : ''}`}>
    <input type="text"  placeholder="Search products..." />
    <button  onClick={() => setIsSearchOpen(false)}>✕</button>
  </div>
  
  <div className={`sidebar-backdrop ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(false)}></div>
</header>
  );
};

export default Header;