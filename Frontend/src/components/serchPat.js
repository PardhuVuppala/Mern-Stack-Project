import React, { useState} from 'react'
//import Navbar from './Navbar'
import { Navigate } from "react-router-dom";
import axios from 'axios';

function SearchPat()
{
    const [Name, setPatName] = useState("");
    const [msg, setMessage] = useState("");
    const [Patlist, setPatList] = useState([]);
    const [status, setStatus] = useState(false);
    function viewPatList() {
        return Patlist.map((currentrow, index) => {
            return (
                <tr key={index}>
                    <td>{currentrow.regname}</td>
                    <td>{currentrow.regnumber}</td>
                    <td>{currentrow.reggender}</td>
                    <td>{currentrow.regrpv}</td>
                    <td>{currentrow.regdob}</td>
                    <td>{currentrow.regage}</td>
                    <td>{currentrow.regdescription}</td>
       
                  
                </tr>
            );
        });
    }





    const handleSubmit = (evt) => {
        evt.preventDefault();

        axios.get('http://localhost:4500/Pat/search/' + Name)
            .then(res => {
                console.log(res.data)
                setPatList(res.data)
                setStatus(true)
                setMessage('')
            })
            .catch(err => {
                console.log(err)
                setMessage('INVALID NAME')
                setStatus(false)
            })

        setPatName('')
    }







    let usertp = sessionStorage.getItem('Usertype')
    if (usertp == null) {
        return (<Navigate to="/doctorlogin"/>)
    }
    else {
        if (status === false) {
            return (
                <>
                  
                    <br />
                    <h3 style={{ color: 'brown' }}>ENTER NAME FOR SEARCH</h3>
                    <b style={{ color: "red" }}>{msg}</b>
                    <form onSubmit={handleSubmit}>
                        <input type="text" value={Name}
                            onChange={(e) => setPatName(e.target.value)}
                            placeholder="ENTER NAME"
                            required />
                        <br />
                        <br />
                        <input type="submit" value="SEARCH PATIENT" className="btn btn-success" />
                    </form>
                </>)
        }
        else {
            return (
                <>
                   
                    <br />
                    <h4 style={{ color: 'brown' }}>ENTER NAME FOR SEARCH</h4>
                    <b style={{ color: "red" }}>{msg}</b>
                    <form onSubmit={handleSubmit}>
                        <input type="text" value={Name}
                            onChange={(e) => setPatName(e.target.value)}
                            placeholder="ENTER NAME"
                            required />
                        <br />
                        <br />
                        <input type="submit" value="SEARCH PATIENT" className="btn btn-success" />
                    </form>
                    <br />
                    <div className='container'>

                        <h4 style={{ color: 'blue' }}>ALL PATIENT DETAILS</h4>

                        <table className="table table-bordered table-hover" align="center">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Number</th>
                                    <th>Gender</th>
                                    <th>Previously Visted</th>
                                    <th>Date Of Birth</th>
                                    <th>Age</th>
                                    <th>Description</th>
                                
                                </tr>
                            </thead>

                            <tbody>
                                {viewPatList()}
                            </tbody>
                        </table>
                    </div>
                </>)
        }

    }
}
export default SearchPat

