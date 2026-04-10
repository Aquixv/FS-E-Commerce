import React from 'react';
import logo from '../src/assets/default.png';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useCart } from '../src/CartContext';
import cartimg from '../src/assets/cart.svg'
import { useAuth } from '../src/AuthContext';


const Header = () => {

  const [isOpen, setIsOpen] = React.useState(false);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  // const [user, setUser] = React.useState(null);
const {cartCount} = useCart();
// React.useEffect(() => {
//   const userInfo = localStorage.getItem('userInfo');
//   if (userInfo) {
//     setUser(JSON.parse(userInfo));
//   }
// }, []);
const {user} = useAuth();
  return (
    <header className="main-header">
  <div className="nav-container">
   <div className="logo-section">
  <Link to="/" onClick={() => setIsOpen(false)}>
    <img src={logo} alt="Popcart Logo" className="nav-logo" />
  </Link>
</div>
    <nav className={`nav-links ${isOpen ? 'active' : ''}`}>
      <div className="dropdown">
  <button 
    className="dropbtn" 
    onClick={(e) => {
      e.preventDefault(); 
      setIsDropdownOpen(!isDropdownOpen);
    }}
  >
    Categories {isDropdownOpen ? '' : ''}
  </button>
  <div className={`dropdown-content ${isDropdownOpen ? 'show' : ''}`}>
    <Link to="/category/electronics" onClick={() => setIsOpen(false)}>Electronics</Link>
    <Link to="/category/mens-fashion" onClick={() => setIsOpen(false)}>Men's Fashion</Link>
    <Link to="/category/womens-fashion" onClick={() => setIsOpen(false)}>Women's Fashion</Link>
  </div>
</div>
      <Link to='/deals' className="menu">Deals</Link>
      <Link to='/new' className="menu">What's New?</Link>
      <Link to='/delivery' className="menu">Delivery</Link>
      <Link className="menu mobile-only" to="/" onClick={() => setIsOpen(false)}>Home</Link>
      <div className="side-actions">
        <button className="mobile-search-trigger" style={{backgroundColor:'transparent', border:'transparent'}} onClick={() => setIsSearchOpen(!isSearchOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg> Search
        </button>
        <Link to={'/checkout'} style={{backgroundColor:'transparent', border:'transparent'}} className="cart-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="Black" className="bi bi-cart3" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg> <span style={{textDecoration:'none', fontSize:'10px'}} className="cart-count">{cartCount}</span>
        </Link>
        <Link to="/account" style={{backgroundColor:'transparent', border:'transparent', textDecoration:'none'}} className="account-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
</svg>
{user ? `Hi, ${user.name.split(' ')[0]}` : 'Account'}
        </Link>
      </div>
    </nav>

    <div className="nav-actions">
      <div className="search-bar desktop-only">
        <input type="text" placeholder="Search for products..." />
      </div>
      <Link to={'/checkout'}  className="cart-icon desktop-only">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000" className="bi bi-cart3" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg> <span style={{textDecoration:'none', fontSize:'10px'}} className="cart-count">{cartCount}</span>
      </Link>
      <Link to="/account" style={{textDecoration:'none'}} className="account-btn desktop-only">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
</svg>
{user ? ` ${user.name.split(' ')[0]}` : 'Account'}
      </Link>

      <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '✕' : '☰'}
      </button>
    </div>
  </div>

  <div className={`mobile-search-overlay ${isSearchOpen ? 'active' : ''}`}>
    <input type="text"  placeholder="Search for products..." />
    <button className='close' onClick={() => setIsSearchOpen(false)}>✕</button>
  </div>
  
  <div className={`sidebar-backdrop ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(false)}></div>
</header>
  );
};

export default Header;