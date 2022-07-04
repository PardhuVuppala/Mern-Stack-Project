import React, { useState } from 'react'
//import Navbar from './Navbar'
import { Navigate } from "react-router-dom";
import axios from 'axios'
function PatDelete() {
    const [msg, setMessage] = useState("");
    const [Name, setPatName] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        //console.log(`Form submitted:`);
        //console.log(`EMAIL ID: ${eemail}`);

        axios.delete('http://localhost:4500/Pat/remove/' + Name)
            .then(res => {
                console.log(res.data)
                setMessage('PATIENT APPOINTMENT SUCCESSFULLY DELETED')
            })
            .catch(err => {
                console.log(err)
                setMessage('INVALID NAME')
            })

        setPatName('')
    }

    let usertp = sessionStorage.getItem('Usertype')
    if (usertp == null) {
        return (<Navigate to="/doctorlogin" />)
    }
    else {
        return (
            <>
             
                <br />
                <h4 style={{ color: 'brown' }}>ENTER NAME FOR CANCEL APPOINTMENT</h4>
                <b style={{ color: "red" }}>{msg}</b>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={Name}
                        onChange={(e) => setPatName(e.target.value)}
                        placeholder="ENTER NAME"
                        required />
                    <br />
                    <br />
                    <input type="submit" value="CANCEL APPOINTMENT" className="btn btn-danger" />
                </form>
            </>)
    }
}
export default PatDelete
