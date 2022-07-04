//STEP 1 -- IMPORT REACT
import React from 'react'
import { Link } from 'react-router-dom';
import {FaFacebook,FaInstagram,FaTwitter,FaYoutube,FaAddressBook,FaDirections} from 'react-icons/fa';
import '../css/contactus.css';
//STEP 2 -- CREATE FUNCTIONAL COMPONENT
function ContactUs() {
    return (
        <div className='cont7'>
        <div>
         <nav className="App2">
                <Link to="/" className="App1">HOME </Link> 
                <Link to="/registration" className="App1" >REG </Link>
                <Link to="/login" className="App1">LOGIN </Link> 
                <Link to="/adminlogin" className="App1">ADMIN </Link>
        </nav>
        </div>
        <br/>
        
        <br/>
           <div className='parent'>
             <div id="cont4">
                <ui>
                <li id="cont5"><h5><FaAddressBook/> Address</h5></li>
                <li id="cont5"><FaDirections/>Hyderbad,Telengana</li>
                <li id="cont5"><FaDirections/>Opposite Cyber Gateway Beside Ibis Hotel, Opposite Cyber Gateway, <br/>&nbsp;&nbsp;&nbsp;&nbsp;Huda Techno Enclave, Hitec City</li>
                <li id="cont5">&nbsp;&nbsp;&nbsp;&nbsp;<ins>Phone Number</ins></li>
                <li id="cont5">&nbsp;&nbsp;&nbsp;&nbsp;0815615484</li>
                <li id="cont5">&nbsp;&nbsp;&nbsp;&nbsp;9594966262</li>
           
                </ui>
             </div>
             <div>
                 <input type="name" placeholder="Enter Name" id="cont6"></input>
                 <br></br>
                 <input type="email" placeholder='Enter Email' id="cont6"></input>
                 <br></br>
                 <input type="phonenumber" placeholder="EnterPhoneNumber" id="cont6"></input>
                 <br/>
                 <br/>
                 <input type="submit" value="Send"></input>
                 </div>
            </div>
             <br/>
             <h4>You can Follow Has This Websites</h4>
        <div className='social-container' >
         <a href="#" className="YouTube social" id="Cont">
            <FaFacebook size="30px"/> 
         </a>
         <a href="#" className="YouTube social" id="Cont">
            <FaInstagram size="30px" color='pink' /> 
         </a>
         <a href="#" className="YouTube social" id="Cont">
            <FaYoutube size="30px" color='red'/> 
         </a>
         <a href="#" className="YouTube social" id="Cont">
            <FaTwitter size="30px"/> 
         </a>
        </div>
        <br/>
            
             </div>
    
    )
}

//STEP 3 -- EXPORT IT TO USE IT
export default ContactUs