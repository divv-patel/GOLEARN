import React from 'react'
import "./Courses.css"

const Courses = () => {
  return (
    <>
        <div className="course">

            <h4>OUR COURSES</h4>

            <p>Explore Our Diverse Range of Courses and Find the Perfect Path to Your Success</p>
            <div className="panel">

                <div className="course_box">
                    <img src="./react.png"></img>
                    <h3>React JS</h3>
                    <p>34k Students already Enrolled</p>
                </div>
                <div className="course_box">                    
                    <img src="./python.png"></img>
                    <h3>Python</h3>
                    <p>61k Students already Enrolled</p>
                </div>
                <div className="course_box">
                    <img src="./ml.png"></img>
                    <h3>Machine Learning</h3>
                    <p>20k Students already Enrolled</p>
                </div>
                <div className="course_box">
                    <img src="./php.png"></img>
                    <h3>PHP</h3>
                    <p> 1k Students already Enrolled</p>
                </div>
                <div className="course_box">
                    <img src="./webdev.jpg"></img>
                    <h3>Web Development</h3>
                    <p>94k Students already Enrolled</p>
                </div>

            </div>

            <div className="panel">

                <div className="course_box">
                    <img src="./java.png"></img>
                    <h3>Java</h3>
                    <p>5k Students already Enrolled</p>
                </div>
                <div className="course_box">                    
                    <img id="mern" src="./mern.jpeg"></img>
                    <h3 className= "mern_h3">MERN Stack</h3>
                    <p className='mern_para'>23k Students already Enrolled</p>
                </div>
                <div className="course_box">
                    <img src="./ruby.png"></img>
                    <h3>Ruby</h3>
                    <p>2k Students already Enrolled</p>
                </div>
                <div className="course_box">
                    <img src="./angular.jpeg"></img>
                    <h3>Angular</h3>
                    <p>47k Students already Enrolled</p>
                </div>
                <div className="course_box">
                    <img src="./c++.png"></img>
                    <h3>C++</h3>
                    <p> 3k Students already Enrolled</p>
                </div>

            </div>

        </div>
    </>
  )
}

export default Courses;