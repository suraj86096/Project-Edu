import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./SingnUp.css";

export default function Singnup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    let newErrors = {};
    let isValid = true;

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    if (!formData.agency) {
      newErrors.agency = "Please select an option";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      navigate("/account");
    }
  };

  return (
    <div className="signup-container">
      <div className="register-screen">
        <h2>
          Create your
          <br />
          PopX account
        </h2>

        <div className="input-group">
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
          <label>Full Name*</label>
          {errors.fullName && <small className="error">{errors.fullName}</small>}
        </div>

        <div className="input-group">
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <label>Phone number*</label>
          {errors.phone && <small className="error">{errors.phone}</small>}
        </div>

        <div className="input-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <label>Email address*</label>
          {errors.email && <small className="error">{errors.email}</small>}
        </div>

        <div className="input-group">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <label>Password*</label>
          {errors.password && <small className="error">{errors.password}</small>}
        </div>

        <div className="input-group">
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />
          <label>Company name</label>
        </div>

        <div className="radio-group">
          <label>Are you an Agency?*</label>
          <div className="radio-options">
            <label>
              <input
                type="radio"
                name="agency"
                value="yes"
                checked={formData.agency === "yes"}
                onChange={handleChange}
              />{" "}
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="agency"
                value="no"
                checked={formData.agency === "no"}
                onChange={handleChange}
              />{" "}
              No
            </label>
          </div>
          {errors.agency && <small className="error">{errors.agency}</small>}
        </div>

        <br />
        <button onClick={handleSubmit}>Create Account</button>
      </div>
    </div>
  );
}
