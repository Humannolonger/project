import React, { useState } from 'react';
import './login.css'
import { useNavigate } from 'react-router-dom';
function LoginPage() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  

  const handleLogin = (event) => {
    event.preventDefault();
    setUsername('');
    setPassword('');
    
  };

  return (
    <div className="login-page">
      <div className="container ">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <h1 className="text-center">Login </h1>
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

             
              <div className="text-center">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
                <div className="text-center">
                <button onClick={() => {
                  navigate("/register")
                }} type="submit" className="btn btn-primary">
                  Signup
                </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

