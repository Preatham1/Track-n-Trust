// src/pages/Login.js
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { AuthContext } from "../context/AuthContext";
import { useDevice } from "../context/DeviceContext"; // ✅ ADDED for device detection
import collegeBg from "../assets/college.jpg";
import collegeLogo from "../assets/college-logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);
  const { device } = useDevice(); // ✅ detect mobile/laptop
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await login(email, password);
    if (result.success) {
      navigate("/dashboard"); // ✅ Go straight to dashboard
    } else {
      setError(result.message);
    }
  };

  const isMobile = device === "mobile";

  return (
    <div
      style={{
        backgroundImage: `url(${collegeBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        padding: isMobile ? "10px" : "0", // ✅ add breathing room on mobile
      }}
    >
      {/* Blur overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backdropFilter: "blur(4px)",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          zIndex: 0,
        }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          padding: isMobile ? "20px" : "40px", // ✅ smaller padding for mobile
          borderRadius: "15px",
          boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)",
          width: isMobile ? "95%" : "350px", // ✅ full width on small screen
          maxWidth: "400px",
          textAlign: "center",
          zIndex: 1,
        }}
      >
        <img
          src={collegeLogo}
          alt="College Logo"
          style={{
            width: isMobile ? "60px" : "80px", // ✅ smaller logo for phone
            marginBottom: "10px",
          }}
        />

        <h2
          style={{
            marginBottom: "20px",
            color: "#333",
            fontSize: isMobile ? "1.3rem" : "1.5rem",
          }}
        >
          Admin Login
        </h2>
        {error && <p style={{ color: "red", fontSize: "0.9rem" }}>{error}</p>}

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px", textAlign: "left" }}>
            <label style={{ fontSize: isMobile ? "0.9rem" : "1rem" }}>
              Email:
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                marginTop: "5px",
                fontSize: isMobile ? "0.9rem" : "1rem",
              }}
              required
            />
          </div>
          <div style={{ marginBottom: "20px", textAlign: "left" }}>
            <label style={{ fontSize: isMobile ? "0.9rem" : "1rem" }}>
              Password:
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                marginTop: "5px",
                fontSize: isMobile ? "0.9rem" : "1rem",
              }}
              required
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            style={{
              width: "100%",
              padding: isMobile ? "10px" : "12px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: isMobile ? "14px" : "16px",
              fontWeight: "bold",
            }}
          >
            Login
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
