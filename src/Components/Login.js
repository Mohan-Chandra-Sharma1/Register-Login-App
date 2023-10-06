// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import the CSS file for styling
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast from react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import react-toastify CSS

const Login = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Send login data to API 1
      const response1 = await fetch('http://bd-userservice-lb-staging-233784656.us-east-1.elb.amazonaws.com/api/v1/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (response1.status === 200) {
        const data = await response1.json();
        // Assuming the JWT token is stored in the response
        const token = data.token;
        
        // Send login data to API 2
        const response2 = await fetch('http://3.84.171.136:5000/user/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: loginData.username,
            password: loginData.password,
            role: 'user',
            usertype: 'app',
          }),
        });

        if (response2.status === 200) {
          // Assuming the login was successful in API 2
          alert('Login successful!');
          // Redirect to the homepage after successful login
          navigate('/');
          } else {
          throw new Error('Error in API 2');
          }
          } else {
          throw new Error('Error in API 1');
          }
          } catch (error) {
          console.error('Login failed:', error);
          toast.error('Login failed. Please check your credentials.', {
          position: 'top-right',
          autoClose: 5000, // Close after 5 seconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          });
          }
          };
          
          const handleChange = (e) => {
          const { name, value } = e.target;
          setLoginData({
          ...loginData,
          [name]: value,
          });
          };


  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={loginData.username}
            onChange={handleChange}
            required
            className="input-field" // Add a CSS class for 3D effect
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            required
            className="input-field" // Add a CSS class for 3D effect
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
      {/* Toast container for displaying error messages */}
      <ToastContainer />
    </div>
  );
};

export default Login;
