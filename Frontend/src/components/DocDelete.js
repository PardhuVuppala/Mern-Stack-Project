import React, { useState } from 'react'

import { Navigate } from "react-router-dom";
import axios from 'axios'
function DocDelete()
{
    const [msg, setMessage] = useState("");
    const [email, setEmail] = useState("");



      
    const handleSubmit = (evt) => {
        evt.preventDefault();
        //console.log(`Form submitted:`);
        //console.log(`EMAIL ID: ${eemail}`);

        axios.delete('http://localhost:4500/Doc/remove/' +email)
            .then(res => {
                console.log(res.data)
                setMessage('DOCTOR SUCCESSFULLY DELETED')
            })
            .catch(err => {
                console.log(err)
                setMessage('INVALID EMAIL')
            })

        setEmail('')
    }
    let usertp = sessionStorage.getItem('Usertype')
    if (usertp == null) {
        return (<Navigate to="/doctorlogin" />)
    }
    else {
        return (
            <>
             
                <br />
                <h4 style={{ color: "#5fb2ce" }}>ENTER EMAIL FOR DELETE</h4>
                <b style={{ color: "#5fb2ce" }}>{msg}</b>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="ENTER EMAIL"
                        required />
                    <br />
                    <br />
                    <input type="submit" value="Delete Doctor" className="btn btn-danger" />
                </form>
            </>)
    }


}
export default DocDelete