// LoginForm.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../features/auth/authSlice';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { error } = useSelector(state => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ username, password }));
  };

  return (
    <div className='login-container'>
      <h2>Login Form</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>userName:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className='form-group'>
          <label>Password:</label>
          <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <button type='sumbit'>Login</button>
      </form>

      <div className='help-text'>
        <p>Try these credentials:</p>
        <p>Username:user1,Password:pass1</p>
        <p>Username:user2,Password:pass2</p>
      </div>
    </div>
  );
}

export default Login;