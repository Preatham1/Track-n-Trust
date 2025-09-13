import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const MobileLayout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(to bottom right, #f0f4f8, #d9e2ec)",
      }}
    >
      {/* iPhone Frame */}
      <div
        style={{
          background: "#fff",
          borderRadius: "48px",
          boxShadow: "0px 30px 60px rgba(0,0,0,0.3)",
          width: "390px", // iPhone 12 Pro width
          height: "844px", // iPhone 12 Pro height
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Top Notch */}
        <div
          style={{
            height: "35px",
            width: "160px",
            background: "#000",
            borderRadius: "20px",
            position: "absolute",
            top: "12px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 10,
          }}
        />

        {/* Screen */}
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            style={{ flex: 1, overflowY: "auto", paddingTop: "50px" }}
          >
            {children}
          </motion.div>
        </AnimatePresence>

        {/* Bottom Home Indicator */}
        <div
          style={{
            height: "6px",
            width: "120px",
            background: "#000",
            borderRadius: "3px",
            margin: "8px auto",
          }}
        />
      </div>
    </div>
  );
};

export default MobileLayout;
