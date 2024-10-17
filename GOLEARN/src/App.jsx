import { 
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
  
  import React from 'react';
  import About from './About/About.jsx';
  import Courses from './Courses/Courses';
  import Contactus from './Contactus/Contactus';
  import Home from "./Home/Home";
  import Nav from "./Home/Nav";
  import Pricing from "./Pricing/Pricing";
  import Award from "./Award/Award";
  
  const App = () => {
    return (
      <>
  
        <Router>
  
          <Nav />
  
          <Routes>
  
            <Route path="/" element={<Home />} exact />
            <Route path="/Courses" element={<Courses />} />
            <Route path="/About" element={<About />} />
            <Route path="/Pricing" element={<Pricing />} />
            <Route path="/Award" element={<Award />} />
            <Route path="/Contactus" element={<Contactus />} />
  
          </Routes>
  
        </Router>
          
      </>
    )
  }
  
  export default App;