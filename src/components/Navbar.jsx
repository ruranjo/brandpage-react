import React from 'react'
import logo from '../assets/brand_logo.png';

const Navbar = () => {
  
  return (
    <div className='navbar-containe'>
        <nav className='navbar'>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
        
        <ul className='toggle'>
            <li ><a href="#">Menu</a></li>
            <li ><a href="#">Location</a></li>
            <li ><a href="#">About</a></li>
            <li ><a href="#">Contact</a></li>
        </ul>
        <button>login</button>
        </nav>
    </div>
    
  )
}

export default Navbar;
