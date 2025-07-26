
import React, { useState } from 'react';
import axios from 'axios';



function Login() {

    const [UserEmail, updatedUserEmail] = useState("");
    const [password, updatedpassword] = useState("");
    const [token, settoken] = useState([]); //  now an array


    function getsubmit() {
        if (UserEmail === "1234" && password === "1234") {
            sendloginFromData(); // only fetch if login is correct
            console.log(UserEmail, password);
        } else {
            alert("Username is not found");
        }
    }



    async function sendloginFromData() {
        const res = await axios.post("https://api.escuelajs.co/api/v1/auth/login", {
            email: "john@mail.com",
            password: "changeme"
        });
        console.log(res.data, res);
        settoken(res.data.access_token);
        sessionStorage.setItem("name", res.data.access_token)
        sessionStorage.setItem("data", res.data.refresh_token)
        localStorage.setItem("name", res.data.access_token)
        localStorage.setItem("data", res.data.refresh_token)
    }

    async function getDetails() {
        try {
            const response = await axios.get('https://api.escuelajs.co/api/v1/auth/profile', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log(response.data);
        } catch (error) {
            console.error("Error fetching profile:", error);
        }
    };




    return (
        <div className="px-5">
            <h2>{token}</h2>
            <div className="container mt-5 p-5 border rounded shadow px-5 mx-5 w-100" style={{ backgroundColor: '#f8f9fa' }}>
                <h2 className="text-center mb-4">Login</h2>
                <div className="mb-3">
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" onChange={(e) => updatedUserEmail(e.target.value)} placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control mb-3" onChange={(e) => updatedpassword(e.target.value)} placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="d-grid">
                        <button className="btn btn-primary" onClick={getsubmit}>Login</button>
                    </div>
                    <button onClick={getDetails}> get submit</button>
                </div>
            </div>
        </div>
    );
}


export default Login;