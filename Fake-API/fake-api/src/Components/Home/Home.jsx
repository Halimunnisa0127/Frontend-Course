import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react';
import axios from 'axios';

function Home() {
    const navigate = useNavigate();
    const [UserEmail, updatedUserEmail] = useState("");
    const [password, updatedpassword] = useState("");
    const [data, setData] = useState([]); //  now an array

    function getuserEmail(event) {
        updatedUserEmail(event.target.value);
    }

    function getpassword(event) {
        updatedpassword(event.target.value);
    }

    function getsubmit() {
        if (UserEmail === "halima@gmail.com" && password === "1234") {
            sendloginFromData(); // only fetch if login is correct
            console.log(UserEmail, password);
            navigate("/Products");

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
        setData(res.data);

    }

    return (
        <div className="px-5">
            <div className="container mt-5 p-5 border rounded shadow px-5 mx-5" style={{ Width: '800px', backgroundColor: '#f8f9fa' }}>
                <h2 className="text-center mb-4">Login</h2>
                <div className="mb-3">
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" onChange={getuserEmail} placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control mb-3" onChange={getpassword} placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="d-grid">
                        <button className="btn btn-primary" onClick={getsubmit}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Home;