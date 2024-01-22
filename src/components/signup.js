import React, { useState } from "react";
import "../styles/signup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlesubmit = async(e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!formData.name.trim()) {
      validationErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Email is invalid";
    }
    if (!formData.password.trim()) {
      validationErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      validationErrors.password = "Password should be at least 6 characters";
    }
    if (formData.confirmPassword !== formData.password) {
      validationErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try{
        const response = await axios.post("https://blogapi-se2j.onrender.com/api/v1/users", formData);
        alert('you are successfuly registered');
        navigate('/login')
      }
       catch(err){
        console.log(err)
      }
  }
};
  

  return (
    <div className="signup-container">
      <div className="signup">
        <h1>Sign Up</h1>
        <form className="signup-form" onSubmit={handlesubmit}>
          <div className="signup-form-input">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className={`input-box ${errors.name ? "error" : ""}`}
              onChange={handlechange}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>

          <div className="signup-form-input">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className={`input-box ${errors.email ? "error" : ""}`}
              onChange={handlechange}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="signup-form-input">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className={`input-box ${errors.password ? "error" : ""}`}
              onChange={handlechange}
            />
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>

          <div className="signup-form-input">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              className={`input-box ${errors.confirmPassword ? "error" : ""}`}
              onChange={handlechange}
            />
            {errors.confirmPassword && (
              <span className="error-message">{errors.confirmPassword}</span>
            )}
          </div>

          <button className="signup-form-button">Sign Up</button>
        </form>
      </div>
    </div>
  );
}
