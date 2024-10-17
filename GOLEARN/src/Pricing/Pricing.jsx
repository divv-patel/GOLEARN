import React from 'react'
import './Pricing.css'
import { Link } from "react-router-dom"
// import Nav from '../Home/Nav'

const Pricing = () => {
  return (
    <>

        <div className="contain">
     
            <h1>Most Populer Courses</h1>

            <div className="price">

                <div className="price_box">

                    <div className="course_id">

                    <img src="./webdev.jpg"></img>
                    <h5> Web Development (HTML, CSS, Javascript, React js...</h5>

                    </div>
                    
                    <div className="ratings">

                        <img src="./star.png" alt="ratings.png"></img>
                        <img src="./star.png" alt="ratings.png"></img>
                        <img src="./star.png" alt="ratings.png"></img>
                        <img src="./star.png" alt="ratings.png"></img>
                        <img src="./star.png" alt="ratings.png"></img>

                    </div>

                    <div className="notice">
                        <h5> Details </h5>
                        <ul>
                            <li>Daily Live Lectures</li>
                            <li>Doubt Classes</li>
                            <li>Weekly Asssignment</li>
                            <li>Monthly Exams</li>
                            <li>Projects</li>
                        </ul>

                        <button id="enroll">Enroll Now</button>
                    </div>
                    
                </div>

                <div className="price_box">
                    <div className="course_id">

                        <img src="./python.png" alt="computer.png"></img>
                        <h5> Python from Bigginer to Pro (Visualization, Statistical, Algo...</h5>

                    </div>

                    <div className="ratings">

                        <img src="./star.png" alt="ratings.png"></img>
                        <img src="./star.png" alt="ratings.png"></img>
                        <img src="./star.png" alt="ratings.png"></img>
                        <img src="./star.png" alt="ratings.png"></img>
                        <img src="./star.png" alt="ratings.png"></img>

                    </div>

                    <div className="notice">
                        <h5> Details </h5>
                        <ul>
                            <li>Daily Live Lectures</li>
                            <li>Doubt Classes</li>
                            <li>Asssignment</li>
                            <li>Weekly Exams</li>
                            <li>Projects</li>
                        </ul>

                        <button id="enroll">Enroll Now</button>
                    </div>
                </div>

                <div className="price_box">
                    <div className="course_id">

                        <img src="./ml.png" alt="computer.png"></img>
                        <h5> Machine Learning (Algorithems, Data Mining, NLP...</h5>

                    </div>

                    <div className="ratings">

                        <img src="./star.png" alt="ratings.png"></img>
                        <img src="./star.png" alt="ratings.png"></img>
                        <img src="./star.png" alt="ratings.png"></img>
                        <img src="./star.png" alt="ratings.png"></img>
                        <img src="./star.png" alt="ratings.png"></img>

                    </div>

                    <div className="notice">
                        <h5> Details </h5>
                        <ul>
                            <li>Weekly Live Lectures</li>
                            <li>One to one Assesment</li>
                            <li>Monthly Exams</li>
                            <li>Doubt Classes</li>
                            <li>Projects</li>
                        </ul>

                        <button id="enroll">Enroll Now</button>
                    </div>
                </div>


            </div>


        </div>

    </>
  )
}

export default Pricing
