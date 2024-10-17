import React from 'react';
import { Link,useLocation } from "react-router-dom";
import './Home.css';
import './Nav.css'

const Nav = () => {

    const location = useLocation();
    console.log("Current path:", location.pathname);

  return (

    <>
        <div className="navbar">

            <h1>GOLEARN</h1>

            <ul>
            <li>
                <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
                <button className={`${location.pathname === '/' ? 'active-button' : ''}`}>Home</button>
                </Link>
            </li>
            <li> 
                <Link to="/Courses" className={`nav-link ${location.pathname === '/Courses' ? 'active' : ''}`}>
                <button className={`${location.pathname === '/Courses' ? 'active-button' : ''}`}>All Courses</button>
                </Link> 
            </li>
            <li> 
                <Link to="/About" className={`nav-link ${location.pathname === '/About' ? 'active' : ''}`}>
                <button className={`${location.pathname === '/About' ? 'active-button' : ''}`}>About us</button>
                </Link> 
            </li>
            <li> 
                <Link to="/Pricing" className={`nav-link ${location.pathname === '/Pricing' ? 'active' : ''}`}>
                <button className={`${location.pathname === '/Pricing' ? 'active-button' : ''}`}>Pricing</button>
                </Link> 
            </li>
            <li> 
                <Link to="/Contactus" className={`nav-link ${location.pathname === '/Contactus' ? 'active' : ''}`}>
                <button className={`${location.pathname === '/Contactus' ? 'active-button' : ''}`}>Contact us</button>
                </Link> 
            </li>
            </ul>

            <div className="register">

                <button id="signup_btn">Sign Up</button>

            </div>

        </div>

    </>
  )
}

export default Nav;