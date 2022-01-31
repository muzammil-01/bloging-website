import './Navbar.css'
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { useAuthContext } from '../hooks/useAuthContext'
import Avatar from './Avatar';


export default function Navbar() {
 const {user} = useAuthContext()
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (

    <nav className='navbar'>
        <div className='logo'>
            <h1>NORDIC ROSE</h1>
        </div>

        <div  className={
            showMediaIcons ? "menu-links mobile-menu-link" : "menu-links"
          }>
        <ul className='hover-links'>
            <li><Link to='/'>Blog</Link></li>
            <li><Link to='/about'>About</Link></li>
          {!user &&(
            <li>
              <Link to='/login' className='log-sig'>Login/Signup</Link>
            </li>
          )}
          {user &&(
            <>
            <Avatar src={user.photoURL} />
            <li>{user.displayName}</li>
            </>
          )}

        </ul>
        </div>
        <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
   </nav>
  );
}
