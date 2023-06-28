import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Store the session token (arbitrary value) in localStorage or state management
    const sessionToken = "someSessionToken";
    // You can use localStorage.setItem('sessionToken', sessionToken);

    // Redirect the user to the dashboard page
    navigate("/dashboard");
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login User</button>
    </div>
  );
};

export default Login;
