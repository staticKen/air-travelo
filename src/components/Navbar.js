import React, {useState, useEffect} from 'react';
import {Button} from './Button';
import {Link} from 'react-router-dom';
import './Navbar.css';
//  import {GiAirplaneDeparture} from 'react-icons/gi'
// import {GiAirplaneDeparture} from 'react-icons/md'

//  import TRVL from './images/TRVL.jpeg';
import SignUp from './pages/SignUp';

function Navbar () {
  const [click, setClick] = useState (false);
  const [button, setButton] = useState (true);

  const handleClick = () => setClick (! click);
  const closeMobileMenu = () => setClick (false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton (false);
    } else {
      setButton (true);
    }
  };

  useEffect (() => {
    showButton ();
  }, []);

  window.addEventListener ('resize', showButton);

  return (
    <>
      <nav className = 'navbar'>
        <div className = 'navbar-container'>
          <Link to = '/' className = 'navbar-logo' onClick = {closeMobileMenu}>
          <i class="fas fa-plane-departure" />
             TRAVELO
              
          </Link>
          <div className = 'menu-icon' onClick = {handleClick}>
            <i className = {click? 'fas fa-times': 'fas fa-bars'} />
          </div>
          <ul className = {click? 'nav-menu active': 'nav-menu'}>
            <li className = 'nav-item'>
              <Link to = '/' className = 'nav-links' onClick = {closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className = 'nav-item'>
              <Link
                to = '/about'
                className = 'nav-links'
                onClick = {closeMobileMenu}
              >
                About
              </Link>
            </li>
            {/* <li className = 'nav-item'>
              <Link
                to = '/explore'
                className = 'nav-links'
                onClick = {closeMobileMenu}
              >
                Explore
              </Link>
            </li> */}

            <li className='nav-item'>
              <Link
                to = '/book'
                className = 'nav-links'
                onClick = {closeMobileMenu}
              >
                Book Flight
              </Link>
            </li>

            <li >
              <div className='menuButton'>
            {/* <Button buttonStyle = 'btn - outline' className='menuButton'>  </Button>   */}
            </div>
            </li>

            <li>
              <Link
                to = '/signup'
                className = 'nav-links-mobile'
                onClick = {closeMobileMenu}
              >Sign Up
              </Link>
              
            </li>

            
          
            
  
   </ul>
   
          {button && <Button buttonStyle = 'btn - outline'> SIGN UP </Button>} 
        </div>
      </nav>
    </>
  );
}

export default Navbar;