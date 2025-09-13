// src/pages/RouteDetails.js
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent } from "../components/ui/card";
import BusMap from "../components/BusMap";
import { ArrowLeft } from "lucide-react";

const mockRoutes = [
  {
    id: 1,
    routeName: "Route 1 - Main City Loop",
    driver: "Ramesh Kumar",
    driverPhone: "9876543210",
    faculty: "Prof. S. Mehta",
    inchargePhone: "9123456789",
    stops: [
      { name: "Main Gate", time: "07:30 AM" },
      { name: "Central Park", time: "07:45 AM" },
      { name: "City Mall", time: "08:00 AM" },
      { name: "Campus", time: "08:20 AM" },
    ],
  },
  {
    id: 2,
    routeName: "Route 2 - South Campus Express",
    driver: "Suresh Nair",
    driverPhone: "9876501234",
    faculty: "Dr. R. Sharma",
    inchargePhone: "9000123456",
    stops: [
      { name: "South Gate", time: "07:15 AM" },
      { name: "IT Park", time: "07:35 AM" },
      { name: "City Signal", time: "07:55 AM" },
      { name: "Campus", time: "08:15 AM" },
    ],
  },
  // ✅ Add more routes same as Dashboard if needed
];

export default function RouteDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const route = mockRoutes.find((r) => r.id === Number(id));

  if (!route) {
    return (
      <div className="p-6 flex flex-col items-center justify-center">
        <p className="text-red-600 text-xl font-semibold">❌ Route not found</p>
        <button
          onClick={() => navigate("/dashboard")}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          ⬅ Back to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
      >
        <ArrowLeft className="w-5 h-5" /> Back
      </button>

      {/* Route Title */}
      <h1 className="text-3xl font-bold text-center text-blue-700">
        🚌 {route.routeName}
      </h1>

      {/* Route Info */}
      <Card className="rounded-2xl shadow-lg">
        <CardContent className="p-6 space-y-3">
          <p><strong>Driver:</strong> {route.driver} ({route.driverPhone})</p>
          <p><strong>Faculty In-Charge:</strong> {route.faculty} ({route.inchargePhone})</p>
        </CardContent>
      </Card>

      {/* Stop Timings */}
      <Card className="rounded-2xl shadow-lg">
        <CardContent className="p-6">
          <h2 className="text-lg font-semibold mb-3">🕒 Stop Timings</h2>
          <ul className="space-y-2">
            {route.stops.map((stop, index) => (
              <li
                key={index}
                className="flex justify-between items-center p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
              >
                <span className="font-medium">{stop.name}</span>
                <span className="text-gray-600">{stop.time}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Live Location */}
      <Card className="rounded-2xl shadow-lg">
        <CardContent className="p-6">
          <h2 className="text-lg font-semibold mb-3">📍 Live Bus Location</h2>
          <div style={{ height: "400px" }}>
            <BusMap />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
