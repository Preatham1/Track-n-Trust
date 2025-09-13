import React from "react";
import MobileFrame from "../components/MobileFrame";
import busImg from "../assets/bus.png";
import headImg from "../assets/head.png";
import driverImg from "../assets/driver.png";
import facultyImg from "../assets/faculty.png";
import studentImg from "../assets/student.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const roles = [
  { label: "Transport Head", img: headImg, role: "head" },
  { label: "Driver", img: driverImg, role: "driver" },
  { label: "Faculty", img: facultyImg, role: "faculty" },
  { label: "Student", img: studentImg, role: "student" },
];

const MobileLanding = () => {
  const navigate = useNavigate();

  const handleRoleClick = (role) => {
    navigate(`/login?role=${role}`); // redirect to same login page
  };

  return (
    <MobileFrame>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "1.8rem", fontWeight: "700", marginBottom: "10px" }}>
          🚍 Track n Trust
        </h1>
        <p style={{ fontSize: "1rem", color: "#777", marginBottom: "20px" }}>
          Smart Campus Bus Tracker
        </p>
        <motion.img
          src={busImg}
          alt="Bus"
          initial={{ x: "-150%" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 50, damping: 12 }}
          style={{ width: "200px", margin: "0 auto 30px" }}
        />

        {/* Roles */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
          {roles.map((r) => (
            <motion.div
              key={r.role}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleRoleClick(r.role)}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                background: "#f8f9fa",
                padding: "10px",
                borderRadius: "16px",
                cursor: "pointer",
                boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={r.img}
                alt={r.label}
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  marginBottom: "8px",
                }}
              />
              <span style={{ fontSize: "0.9rem", fontWeight: "600" }}>{r.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </MobileFrame>
  );
};

export default MobileLanding;
