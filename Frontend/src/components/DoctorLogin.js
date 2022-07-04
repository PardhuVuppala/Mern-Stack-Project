import React, { useState } from 'react'
import '../css/Doctorlogin.css';
import { useNavigate } from "react-router-dom";
import {Link } from "react-router-dom";
import axios from 'axios';
function DoctorLogin()
{
    //CREATE VARIABLES ACCORDING TO THE UI
    const [doctoruserid, setDoctorUserId] = useState("");
    const [doctorpassword, setDoctorPassword] = useState("")
    const [msg, setMessage] = useState("")
    const navigate = useNavigate();


    const handleSubmit = (evt) => {
        evt.preventDefault();

        console.log(`DoctorUID: ${doctoruserid}`);
        console.log(`PASSWORD: ${doctorpassword}`);
        const Doclogininfo = {
            DoctorEmail:doctoruserid,
            Doctorpass:doctorpassword
        }

         

        axios.post('http://localhost:4500/Doc/logincheck',Doclogininfo)
      .then(res =>
        {
          console.log(res.data)
                sessionStorage.setItem("Usertype", 'Doctor')
                sessionStorage.setItem("useremail", res.data[0].DoctorEmail)
                sessionStorage.setItem("username", res.data[0].Docname)
                navigate('/doctorafterlogin')
        })
        .catch(err=> {
          console.log(err)
          setMessage('Invalid Uid Or Password')
        })





       
        setDoctorUserId('')
        setDoctorPassword('')
        
    }

    return (
        <div>
          
            <div className="bg_image1">
            <div className="container" id="App9">

<br />
<br />

<div className="row" id="F1">
    <div>
        <div  id="App500">
            <div className="card-body" id="F2">
                <div className="text-center">
                    <h4 className="fw-bold text-primary" >DOCTOR LOGIN</h4>
                </div>

                <b style={{ color: "red" }}>{msg}</b>

                <div className="text-left">
                    <form onSubmit={handleSubmit} name='login'>

                        <div className="mb-4">
                            <label htmlFor="email" className="fw-bold text-primary">Doctor ID *</label>
                            <input type="text" value={doctoruserid}
                                onChange={(e) => setDoctorUserId(e.target.value)}
                                name="adminid" className="form-control" placeholder="Enter User Id" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="password" className="fw-bold text-primary">Password *</label>
                            <input type="password" value={doctorpassword}
                                onChange={(e) => setDoctorPassword(e.target.value)}
                                name="password" className="form-control" placeholder="Enter Password" />
                        </div>
                        <div className="mb-4">
                        <input type="checkbox"></input>
                        <label for="terms"></label><span> Agree terms & conditions &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>   
                        <Link to="#" className="Admin1">forget password</Link> 
                        
                        </div>
                        
                        

                        <div className="d-grid">

                            <input type="submit" className="btn btn-primary" value="LOGIN" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
       
      </div>

       

        </div>
        )
}

export default DoctorLogin