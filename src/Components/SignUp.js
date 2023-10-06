import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css'; // Import the CSS file for styling
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast from react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import react-toastify CSS

const SignUp = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send data to API 1
      const response1 = await fetch('http://bd-userservice-lb-staging-233784656.us-east-1.elb.amazonaws.com/api/v1/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response1.status === 200) {
        // Send data to API 2
        const response2 = await fetch('http://3.84.171.136:5000/user/add', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...userData,
            usertype: 'app',
            role: 'user',
            status: 'active',
          }),
        });

        if (response2.status === 200) {
          alert('Sign-up successful!');
          navigate('/');
        } else {
          throw new Error('Error in API 2');
        }
      } else {
        throw new Error('Error in API 1');
      }
    } catch (error) {
      console.error('Sign-up failed:', error);
      toast.error('Sign-up failed. Please check your information.', {
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
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={userData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={userData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={userData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      {/* Toast container for displaying error messages */}
      <ToastContainer />
    </div>
  );
};

export default SignUp;
