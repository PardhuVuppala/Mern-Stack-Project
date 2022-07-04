//STEP 1 -- IMPORT REACT
import React from 'react'
import { Link } from 'react-router-dom';
//STEP 2 -- CREATE FUNCTIONAL COMPONENT
function AboutUs() {
    return (
        <>
                 <nav className="App2">
                <Link to="/" className="App1">HOME </Link> 
                <Link to="/registration" className="App1" >REG </Link>
                <Link to="/login" className="App1">LOGIN </Link> 
                <Link to="/contactus" className="App1">CONTACT US </Link> 
                <Link to="/adminlogin" className="App1">ADMIN </Link>
               
            </nav>
            <h3> THIS IS ABOUT US COMPONENT</h3>
        </>)
}

//STEP 3 -- EXPORT IT TO USE IT
export default AboutUs