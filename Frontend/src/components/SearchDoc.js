import React, { useState} from 'react'
import { Navigate } from "react-router-dom";
import axios from 'axios'
function SearchDoc() {
    const [Email, setEmail] = useState("");
    const [msg, setMessage] = useState("");
    const [Doclist, setDocList] = useState([]);
    const [status, setStatus] = useState(false);
    function viewDocList() {
        return Doclist.map((currentrow, index) => {
            return (
                <tr key={index}>
                   <td>{currentrow.Doctorname}</td>
                    <td>{currentrow.DoctorMs}</td>
                    <td>{currentrow.DoctorExperience}</td>
                    <td>{currentrow.DoctorAge}</td>
                    <td>{currentrow.DoctorGender}</td>
                    <td>{currentrow.DoctorEmail}</td>
                    <td>{currentrow.DoctorDegree}</td>
                    <td>{currentrow.DoctorTs}</td>
                    <td>{currentrow.Doctorpass}</td>
       
                  
                </tr>
            );
        });
    }


    const handleSubmit = (evt) => {
        evt.preventDefault();

        axios.get('http://localhost:4500/Doc/search/' + Email)
            .then(res => {
                console.log(res.data)
                setDocList(res.data)
                setStatus(true)
                setMessage('')
            })
            .catch(err => {
                console.log(err)
                setMessage('INVALID NAME')
                setStatus(false)
            })

        setEmail('')
    }






    let usertp = sessionStorage.getItem('Usertype')
    if (usertp == null) {
        return (<Navigate to="/adminlogin"/>)
    }
    else {
        if (status === false) {
            return (
                <>
                    <br />
                    <h3 style={{ color: 'brown' }}>ENTER NAME FOR SEARCH</h3>
                    <b style={{ color: "red" }}>{msg}</b>
                    <form onSubmit={handleSubmit}>
                        <input type="email" value={Email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="ENTER EMAIL"
                            required />
                        <br />
                        <br />
                        <input type="submit" value="SEARCH DOCTOR" className="btn btn-success" />
                    </form>
                </>)
        }









        else {
            return (
                <>
                    
                    <br />
                    <h4 style={{ color: "#5fb2ce" }}>ENTER  EMAIL FOR SEARCH</h4>
                    <b style={{ color: "#5fb2ce" }}>{msg}</b>
                    <form onSubmit={handleSubmit}>
                        <input type="email" value={Email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="ENTER EMAIL"
                            required />
                        <br />
                        <br />
                        <input type="submit" value="SEARCH PATIENT" className="btn btn-success" />
                    </form>
                    <br />
                    <div className='container'>

                        <h4 style={{ color: '#5fb2ce' }}>SEARCHED DOCTOR DETAILS</h4>

                        <table className="table table-bordered table-hover" align="center">
                            <thead>
                                <tr>
                            <th>Name</th>
                            <th>Speciality</th>
                            <th>Experience</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Email</th>
                            <th>Degree</th>
                            <th>Time Slot</th>
                            <th>Password</th>
                        
                                
                                </tr>
                            </thead>

                            <tbody>
                                {viewDocList()}
                            </tbody>
                        </table>
                    </div>
                </>)
        }

    }







}
export default SearchDoc