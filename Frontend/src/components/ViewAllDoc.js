import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import { Navigate } from "react-router-dom";
import axios from 'axios'
import DocDelete from './DocDelete';
import SearchDoc from './SearchDoc';
function ViewAllDoc()
{

    let usertp = sessionStorage.getItem('Usertype')
    const [Doclist, setDocList] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:4500/Doc')
            .then(response => {
                console.log(response.data)
                setDocList(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])




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




    if (usertp == null) {
        return (<Navigate to="/adminlogin" />)
    }
    else {
        return (
            <div id="Admin111">
                <div>
                <Navbar/>
                <DocDelete/>
                <SearchDoc/>
                </div>
            <div className='container'>
                <br />
                <h4 style={{ color: '#5fb2ce' }} >ALL DOCTORS DETAILS</h4>

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
            </div>)
    }
}





export default ViewAllDoc
