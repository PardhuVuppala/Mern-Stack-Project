import Delete from './Delete';
import '../css/Admin.css';
import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import { Navigate } from "react-router-dom";
import axios from 'axios'
import Search from './search';
//import Delete from './Delete'

function ViewAll()
{
    let usertp = sessionStorage.getItem('Usertype')
    const [emplist, setEmpList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4500/reg')
            .then(response => {
                console.log(response.data)
                setEmpList(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    function viewEmpList() {
        return emplist.map((currentrow, index) => {
            return (
                <tr key={index}>
                    <td>{currentrow.empname}</td>
                    <td>{currentrow.empemail}</td>
                    <td>{currentrow.empmobile}</td>
                    <td>{currentrow.empdob}</td>
                    <td>{currentrow.empgender}</td>
                    <td>{currentrow.empcountry}</td>
                    <td>{currentrow.empaddress}</td>
                    <td>{currentrow.empLanguage}</td>
                  
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
                <Delete/>
                <Search/>
                </div>
            <div className='container'>
                <br />
                <h3>ALL EMPLOYEE DETAILS</h3>

                <table className="table table-bordered table-hover" align="center">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>DOB</th>
                            <th>Gender</th>
                            <th>Country</th>
                            <th>Address</th>
                            <th>Language</th>
                        
                        </tr>
                    </thead>

                    <tbody>
                        {viewEmpList()}
                    </tbody>
                </table>
            </div>
            </div>)
    }
}
export default ViewAll