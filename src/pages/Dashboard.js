// src/pages/Dashboard.js
import React, { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { useNavigate } from "react-router-dom";
import sideImage from "../assets/college.jpg";
import { useDevice } from "../context/DeviceContext";
import { Phone, BusFront } from "lucide-react";

const mockRoutes = [
  {
    id: 1,
    routeName: "Route 1 - Main City Loop",
    driver: "Ramesh Kumar",
    driverPhone: "9876543210",
    faculty: "Prof. S. Mehta",
    inchargePhone: "9123456789",
  },
  {
    id: 2,
    routeName: "Route 2 - South Campus Express",
    driver: "Suresh Nair",
    driverPhone: "9876501234",
    faculty: "Dr. R. Sharma",
    inchargePhone: "9000123456",
  },
  {
    id: 3,
    routeName: "Route 3 - Hostel Pickup",
    driver: "Mahesh Gowda",
    driverPhone: "9876512345",
    faculty: "Prof. A. Iyer",
    inchargePhone: "9300456123",
  },
  {
    id: 4,
    routeName: "Route 4 - North Town",
    driver: "Vikram Singh",
    driverPhone: "9876598765",
    faculty: "Dr. R. Das",
    inchargePhone: "9550022001",
  },
  {
    id: 5,
    routeName: "Route 5 - Outer Ring",
    driver: "Mohan Lal",
    driverPhone: "9811122233",
    faculty: "Prof. B. Rao",
    inchargePhone: "9200001112",
  },
  {
    id: 6,
    routeName: "Route 6 - Tech Park Shuttle",
    driver: "Harish Patel",
    driverPhone: "9822233344",
    faculty: "Dr. K. Reddy",
    inchargePhone: "9300022991",
  },
  {
    id: 7,
    routeName: "Route 7 - City Center",
    driver: "Gopal Yadav",
    driverPhone: "9855501122",
    faculty: "Prof. L. Dutta",
    inchargePhone: "9998887776",
  },
  {
    id: 8,
    routeName: "Route 8 - West Campus",
    driver: "Sanjay Malhotra",
    driverPhone: "9876600112",
    faculty: "Dr. T. Kulkarni",
    inchargePhone: "9333445566",
  },
  {
    id: 9,
    routeName: "Route 9 - Market Road",
    driver: "Pradeep Sharma",
    driverPhone: "9899991234",
    faculty: "Prof. C. Menon",
    inchargePhone: "9445556677",
  },
  {
    id: 10,
    routeName: "Route 10 - East Town",
    driver: "Ravi Chauhan",
    driverPhone: "9888776655",
    faculty: "Dr. M. Pillai",
    inchargePhone: "9111223344",
  },
];

export default function Dashboard() {
  const { device } = useDevice();
  const navigate = useNavigate();
  const isMobile = device === "mobile";

  const handleViewRoute = (routeId) => {
    navigate(`/routes/${routeId}`); // will open detailed page later
  };

  return (
    <div className={`flex min-h-screen bg-gray-100 ${isMobile ? "flex-col" : "flex-row"}`}>
      {/* Left/Main Column */}
      <div className={`flex-1 p-6 space-y-6 ${isMobile ? "w-full" : ""}`}>
        <h1 className="text-3xl font-bold text-gray-800 text-center">
          🚍 Bus Routes Overview
        </h1>

        {/* Routes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {mockRoutes.map((route) => (
            <Card key={route.id} className="rounded-2xl shadow-lg bg-white hover:shadow-xl transition">
              <CardContent className="p-5">
                <h2 className="text-lg font-semibold text-blue-700 mb-2 flex items-center gap-2">
                  <BusFront className="w-5 h-5 text-blue-500" />
                  {route.routeName}
                </h2>
                <p className="text-gray-700 text-sm">
                  <strong>Driver:</strong> {route.driver} <br />
                  <strong>Driver Ph:</strong> {route.driverPhone} <br />
                  <strong>Faculty:</strong> {route.faculty} <br />
                  <strong>Incharge Ph:</strong> {route.inchargePhone}
                </p>

                <button
                  onClick={() => handleViewRoute(route.id)}
                  className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition"
                >
                  View Details
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Right Side Image */}
      {!isMobile && (
        <div className="hidden lg:block w-1/3 relative">
          <img src={sideImage} alt="Visual Background" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
        </div>
      )}
    </div>
  );
}
