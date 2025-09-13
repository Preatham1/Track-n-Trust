import React from "react";

const PhoneFrame = ({ children }) => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="relative w-[390px] h-[844px] rounded-[50px] border-[12px] border-black bg-white shadow-2xl overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[180px] h-[30px] bg-black rounded-b-3xl z-10" />
        {/* Content */}
        <div className="h-full overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export default PhoneFrame;
