import React from 'react'
import logo from './images/logo-bookmark.svg'

const Nav = () => {
  return (
    <div>
      <nav className="navbar container">
        <img className="logo-img" src={logo} alt="" />

        <ul className="nav-link ">
          <li className="nav-item ">
            <a className='' href="">Features</a>
          </li>
          <li className="nav-item">
            <a href="">Pricing</a>
          </li>
          <li className="nav-item">
            <a href="">Contact</a>
          </li>
          <li className="nav-item">
            <a  href="">Login</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav