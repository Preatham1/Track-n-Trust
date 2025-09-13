// src/pages/RouteManagement.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { Card, CardContent } from "../components/ui/card";

export default function RouteManagement() {
  const [routes, setRoutes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchRoutes();
  }, []);

  const fetchRoutes = async () => {
    try {
      const res = await api.get("/routes");
      setRoutes(res.data);
    } catch (err) {
      console.error("Error fetching routes:", err);
    }
  };

  const handleDeleteRoute = async (id) => {
    try {
      await api.delete(`/routes/${id}`);
      fetchRoutes();
    } catch (err) {
      console.error("Error deleting route:", err);
    }
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">🚌 Route Management</h1>

      {/* Routes Table */}
      <Card className="rounded-2xl shadow-md">
        <CardContent className="p-6">
          {routes.length === 0 ? (
            <p className="text-gray-500 text-center">No routes available</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-3 text-left">Route Name</th>
                    <th className="p-3 text-left">Driver</th>
                    <th className="p-3 text-left">Driver Contact</th>
                    <th className="p-3 text-left">Faculty Incharge</th>
                    <th className="p-3 text-left">Incharge Contact</th>
                    <th className="p-3 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {routes.map((route) => (
                    <tr
                      key={route._id}
                      className="border-t hover:bg-gray-50 transition"
                    >
                      <td className="p-3 font-medium">{route.name}</td>
                      <td className="p-3">{route.driverName || "—"}</td>
                      <td className="p-3">{route.driverNumber || "—"}</td>
                      <td className="p-3">{route.facultyName || "—"}</td>
                      <td className="p-3">{route.facultyNumber || "—"}</td>
                      <td className="p-3 flex justify-center gap-3">
                        <button
                          onClick={() => navigate(`/routes/${route._id}`)}
                          className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                        >
                          View Details
                        </button>
                        <button
                          onClick={() => handleDeleteRoute(route._id)}
                          className="px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
