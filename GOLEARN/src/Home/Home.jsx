import "./Home.css"
import React from 'react';
import { Link } from "react-router-dom";
import About from '../About/About.jsx';
import Courses from '../Courses/Courses';
import Contactus from '../Contactus/Contactus';
import Award from "../Award/Award";
import Pricing from "../Pricing/Pricing";

const Home = () => {
    return (

        <>

            <div className="container">

                <div className="discription"> 

                    <h3>Welcome to GOLEARN</h3>

                    <h1>Gain Knwoledge From the Industry Experts</h1>

                    <p>"Discover a world of knowledge at your fingertips. Empower your future with expert-led courses designed to help you grow and succeed. Start your learning journey today!"</p>
                    
                    <div className="btn">

                        <button id="start">Start Now </button>
                        <button id="courses">
                            <Link  to="/Courses" className="nav-link" activeClassName="active"> View Courses </Link> 
                        </button>
                
                    </div>

                </div>

            </div>

            <Courses />
            <About />
            <Pricing />
            <Award />
            <Contactus />
        </>


    )
}

export default Home;