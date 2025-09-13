// src/components/ProfileCard.js
import React from "react";
import { Card, CardContent } from "./ui/card";
import { User, BusFront } from "lucide-react";

export default function ProfileCard({ profile }) {
  if (!profile) return null;

  return (
    <Card className="rounded-2xl shadow-md bg-white">
      <CardContent className="p-5">
        <div className="flex items-center gap-3 mb-3">
          <User className="w-6 h-6 text-blue-600" />
          <h2 className="text-lg font-semibold">My Profile</h2>
        </div>

        <p><strong>👤 Name:</strong> {profile.name}</p>
        <p><strong>🆔 Roll No:</strong> {profile.rollNumber}</p>
        <p><strong>🏫 Department:</strong> {profile.department}</p>
        <p><strong>📞 Contact:</strong> {profile.contact}</p>

        <div className="mt-3 border-t pt-3">
          <h3 className="font-medium flex items-center gap-2">
            <BusFront className="w-5 h-5 text-green-600" /> Assigned Bus
          </h3>
          <p><strong>Route:</strong> {profile.assignedRoute}</p>
          <p><strong>Driver:</strong> {profile.driverName} ({profile.driverPhone})</p>
          <p><strong>Faculty Incharge:</strong> {profile.facultyName} ({profile.facultyPhone})</p>
        </div>
      </CardContent>
    </Card>
  );
}
