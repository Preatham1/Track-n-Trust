import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { DeviceProvider, useDevice } from "./context/DeviceContext";

import DeviceSelect from "./pages/DeviceSelect";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import RouteManagement from "./pages/RouteManagement";
import PrivateRoute from "./components/PrivateRoute";
import Layout from "./components/Layout";
import MobileLanding from "./pages/MobileLanding";
import MobileLayout from "./components/MobileLayout";
import RouteDetails from "./pages/RouteDetails";

const AppRoutes = () => {
  const { device } = useDevice();

  if (!device) {
    return (
      <Routes>
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/" element={<DeviceSelect />} />
      </Routes>
    );
  }

  if (device === "mobile") {
    return (
      <MobileLayout>
        <Routes>
          <Route path="/mobile-landing" element={<MobileLanding />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="/dashboard/routes" element={<RouteManagement />} />
          {/* ✅ Add route details here for mobile as well */}
          <Route path="/routes/:id" element={<RouteDetails />} />
        </Routes>
      </MobileLayout>
    );
  }

  // Laptop view
  return (
    <Routes>
      <Route path="/landing" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="routes" element={<RouteManagement />} />
      </Route>

      {/* ✅ Add route details at root level so it works on desktop */}
      <Route path="/routes/:id" element={<RouteDetails />} />

      <Route path="/" element={<DeviceSelect />} />
    </Routes>
  );
};

function App() {
  return (
    <AuthProvider>
      <DeviceProvider>
        <AppRoutes />
      </DeviceProvider>
    </AuthProvider>
  );
}

export default App;
