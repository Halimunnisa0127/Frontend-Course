import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleUsernameChange(event) {
    setUserName(event.target.value.trim());
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault(); // prevent form from refreshing
    console.log(userName, password);

    if (userName === "shaik Halimunnisa" && password === "1234") {
      alert("Login successful!");
      setError("");
    } else {
      setError("Invalid username or password.");
    }
  }

  return (
    <>
      <div className="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5" role="dialog" id="modalSignin">
        <div className="modal-dialog">
          <div className="modal-content rounded-4 shadow">
            <div className="modal-header justify-content-center p-5 pb-4 border-bottom-0">
              <h1 className="fw-bold mb-0">Login</h1>
            </div>
            <div className="modal-body p-5 pt-0">
              <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control rounded-3 mt-2"
                    id="floatingInput"
                    placeholder="UserName"
                    onChange={handleUsernameChange}
                    required
                  />
                  <label htmlFor="floatingInput">User Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control rounded-3"
                    id="floatingPassword"
                    placeholder="Password"
                    onChange={handlePasswordChange}
                    required
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>

                {error && (
                  <div className="alert alert-danger mt-2 py-2" role="alert">
                    {error}
                  </div>
                )}

                <button
                  className="w-100 mb-2 btn btn-lg rounded-3 btn-primary"
                  type="submit"
                >
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
