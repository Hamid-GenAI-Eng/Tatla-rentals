"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Car, CheckCircle, AlertCircle, BarChart3, Plus } from "lucide-react";
import { Vehicle } from "@/app/types/vehicle";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/vehicles")
      .then((res) => res.json())
      .then((data) => {
          setVehicles(data);
          setLoading(false);
      })
      .catch((err) => setLoading(false));
  }, []);

  const totalVehicles = vehicles.length;
  const categories = Array.from(new Set(vehicles.map((v) => v.category)));
  // @ts-ignore
  const recentVehicles = vehicles.slice(0, 5);

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white">Dashboard Overview</h1>
            <p className="text-slate-400 mt-1">Welcome back, Admin</p>
        </div>
        <Link
            href="/admin/inventory/new"
            className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg font-bold text-sm hover:bg-red-700 transition-colors"
        >
            <Plus className="w-4 h-4" /> Add Vehicle
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-primary/20 rounded-xl text-primary">
              <Car className="w-6 h-6" />
            </div>
            <div>
              <div className="text-slate-400 text-sm">Total Fleet</div>
              <div className="text-2xl font-bold text-white">{loading ? "-" : totalVehicles}</div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-green-500/20 rounded-xl text-green-500">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div>
              <div className="text-slate-400 text-sm">Active Listings</div>
              <div className="text-2xl font-bold text-white">{loading ? "-" : totalVehicles}</div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-500/20 rounded-xl text-blue-500">
              <BarChart3 className="w-6 h-6" />
            </div>
            <div>
              <div className="text-slate-400 text-sm">Categories</div>
              <div className="text-2xl font-bold text-white">{loading ? "-" : categories.length}</div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
            <div className="flex items-center gap-4">
                <div className="p-3 bg-yellow-500/20 rounded-xl text-yellow-500">
                    <AlertCircle className="w-6 h-6" />
                </div>
                <div>
                   <div className="text-slate-400 text-sm">Alerts</div>
                   <div className="text-2xl font-bold text-white">0</div>
                </div>
            </div>
        </div>
      </div>

      {/* Recent Vehicles */}
      <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm">
        <div className="p-6 border-b border-white/10">
          <h2 className="text-xl font-bold text-white">Recent Additions</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-slate-400 text-sm">
            <thead className="bg-white/5 text-white uppercase tracking-wider text-xs">
              <tr>
                <th className="px-6 py-4">Vehicle</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Date Added</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
                {loading ? (
                    <tr><td colSpan={3} className="px-6 py-4 text-center">Loading...</td></tr>
                ) : (
                    recentVehicles.map((v) => (
                        <tr key={v.id || v._id} className="hover:bg-white/5 transition-colors">
                            <td className="px-6 py-4 font-medium text-white">{v.name}</td>
                            <td className="px-6 py-4 capitalize">{v.category}</td>
                            <td className="px-6 py-4 text-xs opacity-70">Recently</td>
                        </tr>
                    ))
                )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
