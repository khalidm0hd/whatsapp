import React, { useState, useEffect } from 'react';
import './planet.css';
import { Link } from "react-router-dom";


import { FaBars, FaTimes } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi'

import logo from '../astro/logo.png';

const Planet = () => {

    
  const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)


    //change nav color scrolling
    const [color, setColor] = useState(false);

const changeColor = () => {
  if (window.scrollY >= 90) {
    setColor(true);
  } else {
    setColor(false);
  }
};

window.addEventListener('scroll', changeColor)




  return (
    <div className={color ? 'header header-bg' :'header'}>
      <div className='solo'>
        <a href="/"><img src={logo} alt='' className='chase'/></a>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li><a href='/'>Features</a></li>
          <li><a href='/Privacy'>Privacy</a></li>
          <li><a href='/'>Help Center</a></li>
          <li><a href='/blog'>Blog</a></li>
          <li><a href='/'>for business</a></li>
        </ul>
        <div className='btn-big'>
          <button className='btn'><HiDownload className='view'/></button>
        </div>
        <div className='hamburger' onClick={handleClick}>
          {click ? (<FaTimes size={20} style={{color: '#333'}} />) :  (<FaBars size={20} style={{color: '#333'}}/>)}
        </div>
      </div>
    </div>
  );
}

export default Planet;