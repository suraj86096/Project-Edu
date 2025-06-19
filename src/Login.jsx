import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleLogin = () => {
    const newErrors = { email: "", password: "" };
    let valid = true;

    // Email validation
    if (!email) {
      newErrors.email = "Email is required.";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Enter a valid email address.";
      valid = false;
    }

    // Password validation
    if (!password) {
      newErrors.password = "Password is required.";
      valid = false;
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      navigate("/account");
    }
  };

  return (
    <div className="login-screen">
      <h2>Signin to your<br />PopX account</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>

      <div className="input-group">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email address"
        />
        <label>Email Address</label>
        {errors.email && <small className="error">{errors.email}</small>}
      </div>

      <div className="input-group">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />
        <label>Password</label>
        {errors.password && <small className="error">{errors.password}</small>}
      </div>

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
