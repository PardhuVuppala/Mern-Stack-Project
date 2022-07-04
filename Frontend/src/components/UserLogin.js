//STEP 1 -- IMPORT REACT
import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import '../css/UserLogin.css';
//STEP 2 -- CREATE FUNCTIONAL COMPONENT
function UserLogin() 
{
  
    const [eemail,setPatientUserId]=useState("");
    const [epass, setPatientPassword] = useState("");
    const [msg, setMessage] = useState("")
    const navigate = useNavigate();
    const handleSubmit = (evt) => {
      evt.preventDefault();
      console.log(`Patient Email:${eemail}`);
      console.log(`Password:${epass}`);
      const emplogininfo ={
        empemail:eemail,
        emppass:epass
      }
      axios.post('http://localhost:4500/reg/logincheck',emplogininfo)
      .then(res =>
        {
          console.log(res.data)
                sessionStorage.setItem("Usertype", 'USER')
                sessionStorage.setItem("useremail", res.data[0].empemail)
                sessionStorage.setItem("username", res.data[0].empname)
                navigate('/userafterlogin')
        })
        .catch(err=> {
          console.log(err)
          setMessage('Invalid Uid Or Password')
        })
    setPatientUserId('')
    setPatientPassword('')
    
}


    
    return (
            <div className="App123">
            <div className="wrapper">
              <form onSubmit={handleSubmit}>
             <div className="header-text">Login Here</div>
             <h3>{msg}</h3>
             <input type="text" placeholder="Enter your Email id" value={eemail} onChange={(e)=>setPatientUserId(e.target.value)}/>
             <input type="password" placeholder="Enter Your Password" value={epass}
               onChange={(e)=>setPatientPassword(e.target.value)}/>
             <input type="checkbox" id="terms"/>
             <label for="terms"></label><span>Agree with <Link to="/aboutus">terms and conditions</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link to="#">forget password</Link></span>
             <input type="submit" className='button' value="LOGIN" />
             </form>
           </div>
           </div>
       )
 }
        


//STEP 3 -- EXPORT IT TO USE IT
export default UserLogin