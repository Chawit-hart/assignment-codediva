import React, { useState } from 'react';
import logo from './img/logo.png'
import './navbar.css';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Register from '../register';
import Login from '../login';

const Navbar = () => {
  const [language, setLanguage] = useState('TH');
  const [loggedInUser, setLoggedInUser] = useState(null);

  const toggleLanguage = () => {
    setLanguage(language === 'TH' ? 'EN' : 'TH');
  };

  return (
    <header className="navbar">
      <Link to="/">
        <img src={logo} className='logo' />
        </Link>
      <nav>
        <ul className="menu">
          <li className="location">กรุณาเลือกที่อยู่จัดส่ง</li>
          <Link to="/register">
            <li className='reg'>สมัครสมาชิก</li>
            </Link>
          <Link to="Login">
            <li className='log'>เข้าสู่ระบบ</li>
          </Link>
          <li className="dropdown">
            <div className='dropdown-title'>
            {language}
            </div>
            <ul className="dropdown-menu">
              <div className='TH'>
              <li onClick={toggleLanguage}>TH</li>
              </div>
              <div className='EN'>
              <li onClick={toggleLanguage}>EN</li>
              </div>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
