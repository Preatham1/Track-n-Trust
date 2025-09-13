import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { AuthContext } from "../context/AuthContext";
import busImg from "../assets/bus.png";
import headImg from "../assets/head.png";
import driverImg from "../assets/driver.png";
import facultyImg from "../assets/faculty.png";
import studentImg from "../assets/student.png";
import busParkedImg from "../assets/buses.jpg"; // 🚌 Add your parked bus image here

const roles = [
  { label: "Transport Head", img: headImg, role: "head" },
  { label: "Driver", img: driverImg, role: "driver" },
  { label: "Faculty", img: facultyImg, role: "faculty" },
  { label: "Student", img: studentImg, role: "student" },
];

const Landing = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  const handleRoleClick = (role) => {
    navigate(`/login?role=${role}`);
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Left Column: Content */}
      <div
        style={{
          flex: 1,
          padding: "60px 40px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "linear-gradient(to bottom right, #fdfbfb, #ebedee)",
        }}
      >
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            fontSize: "3.5rem",
            fontWeight: "900",
            color: "#222",
            marginBottom: "20px",
            lineHeight: "1.2",
          }}
        >
           Welcome to <span style={{ color: "#ff5722" }}>Track n Trust</span>
          <br />
          <span style={{ fontSize: "3rem", fontWeight: "500", color: "#555" }}>
            Smart Campus Bus Tracker
          </span>
        </motion.h1>

        {/* Animated Bus */}
        <motion.img
          src={busImg}
          alt="Bus"
          initial={{ x: "-150%", rotate: -20 }}
          animate={{ x: 0, rotate: 0 }}
          transition={{ type: "spring", stiffness: 60, damping: 10 }}
          style={{
            width: "300px",
            marginBottom: "40px",
          }}
        />

        {/* Role Selection */}
        <div style={{ display: "flex", gap: "25px", flexWrap: "wrap" }}>
          {roles.map((r) => (
            <motion.div
              key={r.role}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleRoleClick(r.role)}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                cursor: "pointer",
                backgroundColor: "#fff",
                padding: "12px 18px",
                borderRadius: "16px",
                boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
                width: "100px",
                transition: "all 0.3s ease",
              }}
            >
              <img
                src={r.img}
                alt={r.label}
                style={{
                  width: "80px",
                  height: "80px",
                  objectFit: "cover",
                  borderRadius: "50%",
                  marginBottom: "10px",
                }}
              />
              <span
                style={{
                  fontWeight: "600",
                  fontSize: "15px",
                  color: "#333",
                  textAlign: "center",
                }}
              >
                {r.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right Column: Visual */}
      <div
        style={{
          flex: 1,
          backgroundImage: `url(${busParkedImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            backdropFilter: "blur(3px)",
          }}
        />
      </div>
    </div>
  );
};

export default Landing;
