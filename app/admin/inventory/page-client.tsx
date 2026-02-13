"use client";

import { useEffect, useState } from "react";
import { Vehicle } from "@/app/types/vehicle";
import Link from "next/link";
import { Plus, Pencil, Trash2, Search, BadgeCheck } from "lucide-react";
import { useRouter } from "next/navigation";

export default function InventoryClientPage() {
  const [vehicles, setVehicles] = useState<any[]>([]);
  const [filteredVehicles, setFilteredVehicles] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetchVehicles();
  }, []);

  useEffect(() => {
    const lower = search.toLowerCase();
    setFilteredVehicles(
      vehicles.filter(
        (v) =>
          v.name?.toLowerCase().includes(lower) ||
          v.category?.toLowerCase().includes(lower)
      )
    );
  }, [search, vehicles]);

  const fetchVehicles = () => {
    fetch("/api/vehicles")
      .then((res) => res.json())
      .then((data) => {
        setVehicles(data);
        setFilteredVehicles(data);
        setLoading(false);
      })
      .catch((err) => {
          console.error(err);
          setLoading(false);
      });
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this vehicle?")) return;

    const res = await fetch(`/api/vehicles?id=${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      fetchVehicles();
    } else {
      alert("Failed to delete vehicle");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Inventory Management</h1>
        <Link
          href="/admin/inventory/new"
          className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg font-bold text-sm hover:bg-red-700 transition-colors"
        >
          <Plus className="w-4 h-4" /> Add Vehicle
        </Link>
      </div>

      {/* Search & Filter */}
      <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            type="text"
            placeholder="Search vehicles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-black/20 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-primary/50"
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-400">
            <thead className="bg-white/5 text-white uppercase tracking-wider text-xs">
              <tr>
                <th className="px-6 py-4">Vehicle</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Specs</th>
                <th className="px-6 py-4">Badge</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {loading ? (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center">
                    Loading inventory...
                  </td>
                </tr>
              ) : filteredVehicles.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-slate-500">
                    No vehicles found.
                  </td>
                </tr>
              ) : (
                filteredVehicles.map((v) => (
                  <tr key={v._id || v.id} className="hover:bg-white/5 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg overflow-hidden bg-black/50 border border-white/10">
                           {v.image ? (
                               <img
                                   src={v.image}
                                   alt=""
                                   className="w-full h-full object-cover"
                               />
                           ) : (
                               <div className="w-full h-full flex items-center justify-center text-xs">No Img</div>
                           )}
                        </div>
                        <div>
                          <div className="font-bold text-white mb-0.5">
                            {v.name}
                          </div>
                          <div className="text-[10px] uppercase text-primary tracking-wider">
                            {v.subtitle}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 capitalize">
                      <span className="px-2 py-1 bg-white/5 rounded text-xs">
                        {v.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-xs">
                        <div>{v.specs?.year || 'N/A'} • {v.specs?.fuel || 'N/A'}</div>
                    </td>
                    <td className="px-6 py-4">
                       {v.badge ? (
                           <span className="flex items-center gap-1 text-primary text-xs font-bold uppercase">
                               <BadgeCheck className="w-4 h-4" /> {v.badge}
                           </span>
                       ) : (
                           <span className="text-slate-600 text-xs italic">None</span>
                       )}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/admin/inventory/edit/${v._id || v.id}`}
                          className="p-2 hover:bg-white/10 rounded-lg text-slate-400 hover:text-white transition-colors"
                          title="Edit"
                        >
                          <Pencil className="w-4 h-4" />
                        </Link>
                        <button
                          onClick={() => handleDelete(v._id || v.id)}
                          className="p-2 hover:bg-red-500/10 rounded-lg text-slate-400 hover:text-red-500 transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
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
