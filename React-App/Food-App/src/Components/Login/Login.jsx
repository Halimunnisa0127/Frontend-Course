import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Login() {
    const navigate = useNavigate();
    const [UserName, updatedUserName] = useState("");
    const [password, updatedpassword] = useState("");

    function getuserName(event) {
        updatedUserName(event.target.value)

    }
    function getpassword(event) {
        updatedpassword(event.target.value)
    }
    function getsubmit() {
        console.log(UserName, password)
        if (UserName === "sk Halimunnisa" && password ==="1234") {
            alert("Login successs")
            navigate('/Home')
        }
        else {
            alert(" In valid userName")
        }

    }
    return (
        <>
            <div className="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5"
                tabIndex="-1" role="dialog" id="modalSignin">
                <div className="modal-dialog">
                    <div className="modal-content rounded-4 shadow">
                        <div className="modal-header justify-content-center p-5 pb-4 border-bottom-0">
                            <h1 className="fw-bold mb-0   ">Login</h1>
                        </div>
                        <div className="modal-body p-5 pt-0">
                            <form className="">
                                <div className="form-floating mb-3">
                                 
                                    <input type="text" className="form-control rounded-3" id="floatingInput"
                                        placeholder="UserName" onChange={getuserName} />
                                    <label for="floatingInput">UserName</label>
                                </div>
                                <div className="form-floating mb-3">
                                  
                                    <input type="password" className="form-control rounded-3" id="floatingPassword"
                                        placeholder="Password" onChange={getpassword} />
                                    <label for="floatingPassword">Password</label>
                                </div>
                                <button className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit"
                                    onClick={getsubmit}>Sign up</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
export default Login;