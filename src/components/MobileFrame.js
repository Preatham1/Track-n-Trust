// src/components/MobileFrame.js
import React from "react";

const MobileFrame = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(135deg, #e0eafc, #cfdef3)",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "390px", // ✅ iPhone 12/13/14 width
          height: "844px", // ✅ iPhone 12/13/14 height
          borderRadius: "50px",
          background: "#fff",
          boxShadow: "0 25px 60px rgba(0, 0, 0, 0.3)",
          overflow: "hidden", // ✅ no scrolling
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* ✅ Single Notch */}
        <div
          style={{
            position: "absolute",
            top: "12px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "160px",
            height: "28px",
            background: "#000",
            borderRadius: "20px",
            zIndex: 10,
          }}
        />

        {/* ✅ Fixed Content Area (no scroll) */}
        <div style={{ flex: 1, marginTop: "40px" }}>{children}</div>
      </div>
    </div>
  );
};

export default MobileFrame;
