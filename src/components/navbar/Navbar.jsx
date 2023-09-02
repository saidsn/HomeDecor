import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import './Navbar.scss';


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className='container'>
      <nav className="navbar">
        <ul className='navbar__list'>
          <li className='navbar__list--item'>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li className='navbar__list--item'>
            <NavLink to='/about'>About</NavLink>
          </li>
          <li className='navbar__list--item'>
            <NavLink to='/products'>Products</NavLink>
          </li>
          <li className='navbar__list--item'>
            <NavLink to='/collections'>Collections</NavLink>
          </li>
          <li className='navbar__list--item'>
            <NavLink to='/contact'>Contact</NavLink>
          </li>
        </ul>
        <button className='hamburger'>
          {
            isOpen ? 
            (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="#2D2D2B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            ) 
            : 
            (
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                <path d="M16.0128 14.8631C16.0883 14.9386 16.1482 15.0282 16.189 15.1269C16.2299 15.2255 16.2509 15.3312 16.2509 15.438C16.2509 15.5447 16.2299 15.6504 16.189 15.7491C16.1482 15.8477 16.0883 15.9373 16.0128 16.0128C15.9373 16.0883 15.8477 16.1482 15.7491 16.189C15.6504 16.2299 15.5447 16.2509 15.438 16.2509C15.3312 16.2509 15.2255 16.2299 15.1269 16.189C15.0282 16.1482 14.9386 16.0883 14.8631 16.0128L8.12545 9.27412L1.3878 16.0128C1.23534 16.1653 1.02856 16.2509 0.812952 16.2509C0.597344 16.2509 0.390566 16.1653 0.238108 16.0128C0.08565 15.8603 4.25015e-09 15.6536 0 15.438C-4.25015e-09 15.2223 0.08565 15.0156 0.238108 14.8631L6.97678 8.12545L0.238108 1.3878C0.08565 1.23534 -1.60641e-09 1.02856 0 0.812952C1.60641e-09 0.597344 0.08565 0.390566 0.238108 0.238108C0.390566 0.08565 0.597344 1.60641e-09 0.812952 0C1.02856 -1.60641e-09 1.23534 0.08565 1.3878 0.238108L8.12545 6.97678L14.8631 0.238108C15.0156 0.08565 15.2223 -4.25015e-09 15.438 0C15.6536 4.25015e-09 15.8603 0.08565 16.0128 0.238108C16.1653 0.390566 16.2509 0.597344 16.2509 0.812952C16.2509 1.02856 16.1653 1.23534 16.0128 1.3878L9.27412 8.12545L16.0128 14.8631Z" fill="#2D2D2B" />
              </svg>
            )
          }
        </button>
      </nav>
    </div>
  )
}

export default Navbar;