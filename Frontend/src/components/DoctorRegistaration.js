import React, { useState } from 'react'
import axios from 'axios';
import '../css/DoctorReg.css';
import {useNavigate } from "react-router-dom";



function DoctorReg()
{
  const [Docname,SetDocName] =useState("");
  const[DocMs,SetDocMs]=useState("");
  const [DocExperience,SetDocExperience] =useState("");
  const[DocAge,SetDocAge]=useState("");
  const[DocGender,SetDocGender]=useState("");
  const [DocEmail,SetDocEmail] =useState("");
  const [DocDegree,SetDocDegree]=useState("");
  const [DocTs,SetDocTs]=useState("");
  const [Docpass,SetDocPass]=useState("");
  const [msg, setMessage] = useState("");
  const navigate = useNavigate();


 


  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(`Form Submitted`);
    console.log(`Name : ${Docname}`);
    console.log(`DocEmail:${DocEmail}`);

  


  const Docinfo= {
      Doctorname:Docname,
      DoctorMs:DocMs,
      DoctorExperience:DocExperience,
      DoctorAge:DocAge,
      DoctorGender:DocGender,
      DoctorEmail:DocEmail,
      DoctorDegree:DocDegree,
      DoctorTs:DocTs,
      Doctorpass:Docpass
        
  }

  axios.post('http://localhost:4500/Doc/Docregister', Docinfo)
 .then(res => {
        console.log(res.data)
        setMessage('REGISTRATION SUCCESSFUL')
        navigate('/')
    });
    
  SetDocName('')
  SetDocMs('')
  SetDocExperience('')
  SetDocAge('')
  SetDocGender('')
  SetDocEmail('')
  SetDocDegree('')
  SetDocTs('')
  SetDocPass('')






  }

 return(
     <div id="Doc16">
      <h1>{msg}</h1>
      <div className="row" id="Doc15" onSubmit={handleSubmit}>
  <div className="col-md-6 col-sm-8 mx-auto">
    <div className="card">
      <div className="card-body" >
                                                    
       <div className="text-center">
        
       </div>
              
       <div className="text-left">
                 
        <form>
         <div className="mb-2">
           <label  className="fw-bold text-primary" >NAME</label>
           <input type="text" name="fullname" value={Docname} onChange={(e)=>SetDocName(e.target.value)}
           className="form-control" placeholder="Enter Your Full Name" required / >
         </div>
                        
         <div className="mb-2">
           <label className="fw-bold text-primary">Medical Speaciality</label>
           <input type="text" value={DocMs} onChange={(e)=>SetDocMs(e.target.value)}
            className="form-control" placeholder="Enter Your Medical Speaciality" required z/>
         </div>
                        
         <div className="mb-2">
           <label  className="fw-bold text-primary">Experience</label>
           <input type="number"className="form-control"  value={DocExperience} onChange={(e)=>SetDocExperience(e.target.value)}
           placeholder="Enter Your Experience" required/>
         </div>

         <div className="mb-2">
           <label  className="fw-bold text-primary">Age</label>
           <input type="number"className="form-control" value={DocAge} onChange={(e)=>SetDocAge(e.target.value)}
           placeholder="Enter Your Age" required/>
         </div>
                        
         
                        
         <div className="mb-2">
            <label for="gender" className="fw-bold text-primary form-check-label">GENDER</label> &nbsp;&nbsp;&nbsp;
            <input type="radio" className="form-check-input" name="gender" value="Male" 
                checked={DocGender === 'Male'} onChange={(e) => SetDocGender(e.target.value)} />
                <span className="text-info">MALE</span> &nbsp;&nbsp;
                <span className="text-info">MALE</span> &nbsp;&nbsp;
            <input type="radio" className="form-check-input" name="gender" value="Female" 
            checked={DocGender === 'Female'} onChange={(e) => SetDocGender(e.target.value)} />
                <span className="text-info">FEMALE</span>
         </div>
                        
         <div className="mb-2">
            <label  className="fw-bold text-primary">Email</label>
            <input type="email" className="form-control" 
            value={DocEmail} onChange={(e)=>SetDocEmail(e.target.value)} required/>
         </div>


         <div className="mb-2">
           <label className="fw-bold text-primary">Degree</label>
           <input type="text"className="form-control" placeholder="Enter Your Degree" value={DocDegree} onChange={(e)=>SetDocDegree(e.target.value)}
           required/>
         </div>

        
         <div className="mb-2">
           <label  className="fw-bold text-primary">Time slot</label>
           <input type="text"className="form-control" placeholder="Enter Your Time slot" value={DocTs} onChange={(e)=>SetDocTs(e.target.value)}
           required/>
         </div>



         <div className="mb-2">
            <label  className="fw-bold text-primary">PASSWORD</label>
            <input  name="password" className="form-control" placeholder="Enter password" value={Docpass} onChange={(e)=>SetDocPass(e.target.value)}
            required/>
         </div>

        
         
         <div className="d-grid">		 
           <input type="submit" className="btn btn-primary" value="Register"/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         </div>
		</form>
       </div>
      </div> 
    </div> 
   </div> 
  </div>
  </div>

    
 )   
}
export default DoctorReg