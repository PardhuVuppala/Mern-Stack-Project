import React, { useState } from "react";
import '../css/Appointment.css';
import axios from 'axios';
import {useNavigate } from "react-router-dom";



function Registration1()

{     
    const[rname,Setrname]=useState("");
    const[rnumber,Setrnumber]=useState("");
    const[rgender,Setrgender]=useState("");
    const[rpv,Setrpv]=useState("");
    const[remail,Setremail]=useState("");
    const[rage,Setrage]=useState("");
    const[rdescription,setrdescription]=useState("")
    const [msg, setMessage] = useState("");
    const navigate = useNavigate();




    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(`Form Submitted`);
        console.log(`Name : ${rname}`);
        console.log(`Description:${rdescription}`);
    

    



   const reginfo={
          regname:rname,
          regnumber:rnumber,
          reggender:rgender,
          regrpv:rpv,
          regemail:remail,
          regage:rage,
          regdescription:rdescription
   }


   axios.post('http://localhost:4500/Pat/RegPat', reginfo)
   .then(res => {
          console.log(res.data)
          setMessage('APPOINTMENT SUCCESSFULLY BOOKED')
          navigate('/userafterlogin')
          
      });


      Setrage('')
      Setremail('')
      Setrgender('')
      Setrname('')
      Setrnumber('')
      Setrpv('')
      setrdescription('')


    }


    return(
    <div id="Reg3">
       
   <div id="Reg1">

    <form onSubmit={handleSubmit}>
        <center>
            <fieldset>
                <h1>{msg}</h1>
            <table>
              
            <tr>
            <td><label>Name:</label></td>
            <td><input type="text" id="Reg2" value={rname} onChange={(e)=>Setrname(e.target.value)} /></td>
            </tr>
            <br/>
            <tr>
            <td ><label >Number</label></td>
            <td><input type="tel" placeholder="xx-xxxx-xxxx" maxlength="10" minlength="10" id="Reg2" value={rnumber} onChange={(e)=>Setrnumber(e.target.value)} required/></td>
            </tr>
            <br/>
            <tr>
            <td><label>Gender:</label></td>
            <td><input type="radio" name="gender" value="male" checked={rgender === 'male'} onChange={(e) => Setrgender(e.target.value)}/>Male
            <input type="radio" name="gender" value="female" checked={rgender === 'female'} onChange={(e) => Setrgender(e.target.value)}/>Female
            <input type="radio" name="gender" value="others" checked={rgender === 'others'} onChange={(e) => Setrgender(e.target.value)}/>Others</td>
            </tr>
            <br/>
            <tr>
            <td>Previously Visted</td>
             <td><input type="checkbox" id="Reg2" value="yes" checked={rpv === 'yes'} onChange={(e) => Setrpv(e.target.value)}/>
             <label>Yes</label>
             <input type="checkbox" id="Reg2" value="no" checked={rpv === 'no'} onChange={(e) => Setrpv(e.target.value)}/>
             <label>No</label>
             </td> 
             </tr>
             <br/>
             <tr>
            <td><label>Email</label></td>
            <td><input type="email" name="email" id="Reg2" value={remail} onChange={(e)=>Setremail(e.target.value)} required/></td>
             </tr>
             <br/>
             <tr>
            <td><label>Age:</label></td>
           <td> <input type="age" placeholder="Enter Age" id="Reg2" value={rage} onChange={(e)=>Setrage(e.target.value)} required/></td>
            </tr>
            <br/>
            <tr>
                <td><label>Desicription</label></td>
                <td><textarea id="Reg2" value={rdescription} onChange={(e)=>setrdescription(e.target.value)} required></textarea></td>
            </tr>
          
            
           
            </table>
            <input type="submit"value="Book Appointment" className="btn btn-primary"id="Reg5"></input>
            </fieldset>
            
        </center>
        </form>
   </div>
   </div>
 ) 

}
export default Registration1