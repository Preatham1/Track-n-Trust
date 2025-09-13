import React, { createContext, useContext, useState } from "react";

const DeviceContext = createContext();

export const DeviceProvider = ({ children }) => {
  const [device, setDevice] = useState(null);
  return (
    <DeviceContext.Provider value={{ device, setDevice }}>
      {children}
    </DeviceContext.Provider>
  );
};

export const useDevice = () => useContext(DeviceContext);
