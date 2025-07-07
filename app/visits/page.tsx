"use client";

import { useEffect, useState } from "react";

interface Visit {
  id: string;
  ip: string;
  userAgent: string;
  page: string;
  counts: number;
  metadata?: string;
  referrer?: string;
  country?: string;
  city?: string;
  firstVisitAt?: string;
  lastVisitAt?: string;
  createdAt: string;
  updatedAt: string;
}

export default function VisitsPage() {
  const [visits, setVisits] = useState<Visit[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://portfolio-production-3fc3.up.railway.app/api/events")
      .then((res) => res.json())
      .then((data) => {
        setVisits(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching visits:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-10 text-gray-500">Loading visits...</p>;

  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Visitor Logs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {visits.map((visit) => (
            <div
              key={visit.id}
              className="bg-slate-800 rounded-lg p-5 shadow hover:bg-slate-700 transition-all"
            >
              <p><span className="font-semibold text-sky-300">IP:</span> {visit.ip}</p>
              <p>
                <span className="font-semibold text-sky-300">City:</span>{" "}
                {visit.city || "Unknown"}, {visit.country || "Unknown"}
              </p>
              <p><span className="font-semibold text-sky-300">Page:</span> {visit.page}</p>
              <p><span className="font-semibold text-sky-300">Referrer:</span> {visit.referrer || "N/A"}</p>
              <p><span className="font-semibold text-sky-300">Visits (30m):</span> {visit.counts}</p>
              <p><span className="font-semibold text-sky-300">User Agent:</span> {visit.userAgent}</p>
              <p>
                <span className="font-semibold text-sky-300">First Visit:</span>{" "}
                {new Date(visit.firstVisitAt || visit.createdAt).toLocaleString()}
              </p>
              <p>
                <span className="font-semibold text-sky-300">Last Visit:</span>{" "}
                {new Date(visit.lastVisitAt || visit.updatedAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}