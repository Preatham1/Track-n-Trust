import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useDevice } from "../context/DeviceContext";
import busesBg from "../assets/tracker.jpg"; // background image

const DeviceSelect = () => {
  const navigate = useNavigate();
  const { setDevice } = useDevice();

  const handleSelect = (device) => {
    setDevice(device);
    if (device === "laptop") navigate("/landing");
    else navigate("/mobile-landing");
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${busesBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.4)",
          backdropFilter: "blur(6px)",
        }}
      />

      <div style={{ zIndex: 1, textAlign: "center", color: "#fff" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: "700", marginBottom: "40px" }}>
          Choose Your View
        </h1>
        <div style={{ display: "flex", gap: "40px", justifyContent: "center" }}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleSelect("laptop")}
            style={{
              background: "rgba(255,255,255,0.1)",
              borderRadius: "20px",
              padding: "40px 60px",
              cursor: "pointer",
              fontSize: "3rem",
              fontWeight: "900",
              boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
            }}
          >
             Laptop View
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleSelect("mobile")}
            style={{
              background: "rgba(255,255,255,0.1)",
              borderRadius: "20px",
              padding: "40px 60px",
              cursor: "pointer",
              fontSize: "3rem",
              fontWeight: "900",
              boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
            }}
          >
             Mobile View
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DeviceSelect;
