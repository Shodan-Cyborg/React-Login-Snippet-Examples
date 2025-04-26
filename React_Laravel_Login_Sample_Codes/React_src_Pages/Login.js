import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    if (token) {
      alert("Already logged in. Please log out first.");
      return;
    }
    try {
      const res = await axios.post("http://localhost:8000/api/login", {
        username,
        password,
      });
      
      const token = res.data;
      localStorage.setItem("token", token);
      console.log("Login successful!");
      navigate("/show-student");
    } catch (err) {
      console.log("Login failed: " + err.response.data.message);
    }
  };

  return (
    <>
      <center>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          Username:{" "}
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />{" "}
          <br />
          <br />
          Password:{" "}
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />{" "}
          <br />
          <br />
          <input type="submit" />
        </form>
        <br />
        <br />
      </center>
    </>
  );
}

export default Login;
