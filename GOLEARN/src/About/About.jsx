import React from 'react'
import './About.css'

const About = () => {
  return (
    <>
    
    <div className="grid">


        <div className="back">

        </div>


        <div className="text">

            <h1>Benefits About Online learning Expertise</h1>


            <div className="adv">

              <div className="box">
                
                <div className="img">
                  <img src="./learning.png"></img>
                </div>
                
                <div className="dis">
                  <h4>Online Course</h4>
                  <p>Explore a wide range of online courses, designed to fit your schedule and help you grow.</p>
                </div>
                
              </div>

              <div className="box">
            
               <div className="img">
                  <img src="./certificate.png"></img>
                </div>
                
                <div className="dis">
                  <h4> Earn Certificate</h4>
                  <p>Earn valuable certificates that validate your expertise and enhance your career prospects.</p>
                </div>

              </div>

              <div className="box">
                
                <div className="img">
                  <img src="/expert.png"></img>
                </div>
                
                <div className="dis">
                  <h4>Learn with Experts</h4>
                  <p>Gain in-depth knowledge from industry experts who are passionate about teaching and your success.</p>
                </div>

              </div>


            </div>


        </div>

    </div>
    
    </>
  )
}

export default About;