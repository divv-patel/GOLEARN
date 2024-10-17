import React from 'react'
import './Contactus.css'
import {Link} from 'react-router-dom'

const Contactus = () => {
  return (
    <>
        <div className="subscribe">

            <div className="subscribe_text">

                <h2 class="subs">Subscribe to get the latest updates</h2>
                <p class="subs">Stay Tuned!</p>

            </div>

            <div className="email">

                <input id="subs_mail" type="email" placeholder='Enter Your Email id...'></input>
                <button id="subs_btn">Subscribe</button>

            </div>

        </div>

        <div className="footer">

            <div className="footer_box" id="footer_box1">

                <h3>GOLEARN</h3>
                <p id="para">GOLEARN is your gateway to cutting-edge education with a global reach. Join us and experience why we're leading the way in e-learning innovation.</p>

                <div className="socialmedia_logo">
                    <img id="insta" src='./instagram.png' alt="Instagram"></img>
                    <img id="facebook" src='./facebook.png' alt="faceboook"></img>
                    <img id="twitter" src="./twitter.png" alt="twitter"></img>
                </div>

            </div>

            <div className="footer_box" id="footer_box2">

                <h3>Explore</h3>

                <ul id="explore">
                    <li><Link to="/" className="nav-link" activeClassName="active">Home </Link></li>
                    <li><Link to="/About" className="nav-link" activeClassName="active"> About Us </Link></li>
                    <li><Link to="/Pricing" className="nav-link" activeClassName="active">Price </Link></li>
                    <li><Link to="/Courses" className="nav-link" activeClassName="active"> Courses </Link></li>
                    <li><Link to="/Contactus" className="nav-link" activeClassName="active">Contact us </Link></li>
                </ul>

            </div>

            <div className="footer_box" id="footer_box3">

                <h3>Any Question?</h3>

                <p>We are here to help you anytime, Mentioned below are our contact details.</p>
                <p>Feel free to ask!</p>


                <div className="mail">
                    <img id="send" src="./telegram.png" alt="send.png"></img> 
                    <p>golearn@gmail.com </p>
                </div>



            </div>
                
        </div>

        <div className="copywrite">

            <img id="copywrite_logo" src="./copywrite.png" alt="copywrite"></img>
            <p>Developed by Diya, 2024</p>

        </div>
    
    
    
    
    </>
  )
}

export default Contactus