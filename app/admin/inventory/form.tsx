"use client";

import { useState, useEffect } from "react";
import { Vehicle } from "@/app/types/vehicle";
import { useRouter } from "next/navigation";
import { Save, ArrowLeft, Plus, X, Upload } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface VehicleFormProps {
  initialData?: any; // Use any for now as DB structure might slightly differ (e.g. _id)
  isEdit?: boolean;
}

const emptyVehicle = {
  name: "",
  subtitle: "",
  category: "suv",
  image: "",
  badge: "",
  overview: "",
  gallery: [],
  specs: { year: "", seats: "", engine: "", fuel: "", transmission: "" },
  rental: { minDuration: "", availability: "" },
};

export default function VehicleForm({ initialData, isEdit = false }: VehicleFormProps) {
  const [formData, setFormData] = useState<any>(initialData || emptyVehicle);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  // Custom spec state
  const [newSpecKey, setNewSpecKey] = useState("");
  const [newSpecValue, setNewSpecValue] = useState("");

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setFormData((prev: any) => ({
        ...prev,
        [parent]: { ...prev[parent], [child]: value },
      }));
    } else {
      setFormData((prev: any) => ({ ...prev, [name]: value }));
    }
  };

  // --- Dynamic Specs Logic ---
  const handleAddSpec = () => {
    if (!newSpecKey || !newSpecValue) return;
    setFormData((prev: any) => ({
      ...prev,
      specs: { ...prev.specs, [newSpecKey]: newSpecValue }
    }));
    setNewSpecKey("");
    setNewSpecValue("");
  };

  const handleRemoveSpec = (key: string) => {
    const newSpecs = { ...formData.specs };
    delete newSpecs[key];
    setFormData((prev: any) => ({ ...prev, specs: newSpecs }));
  };

  // --- File Upload Logic ---
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, field: 'image' | 'gallery') => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const data = new FormData();
    data.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      
      if (res.ok) {
        if (field === 'image') {
          setFormData((prev: any) => ({ ...prev, image: json.url }));
        } else {
          setFormData((prev: any) => ({ ...prev, gallery: [...(prev.gallery || []), json.url] }));
        }
      } else {
        alert("Upload failed: " + json.error);
      }
    } catch (err) {
      alert("Upload failed");
    } finally {
      setUploading(false);
    }
  };

  const handleRemoveGalleryImage = (index: number) => {
    setFormData((prev: any) => ({
      ...prev,
      // @ts-ignore
      gallery: prev.gallery.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const url = "/api/vehicles";
    const method = isEdit ? "PUT" : "POST";

    // Ensure _id is passed if editing
    const payload = isEdit ? { ...formData, id: formData._id || formData.id } : formData;

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      router.push("/admin/inventory");
      router.refresh();
    } else {
      alert("Failed to save vehicle");
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-5xl mx-auto pb-12">
      <div className="flex items-center justify-between sticky top-0 z-10 bg-black/80 backdrop-blur-md py-4 border-b border-white/10">
        <div className="flex items-center gap-4">
          <Link
            href="/admin/inventory"
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </Link>
          <h1 className="text-2xl font-bold text-white">
            {isEdit ? "Edit Vehicle" : "Add New Vehicle"}
          </h1>
        </div>
        <button
          type="submit"
          disabled={loading || uploading}
          className="flex items-center gap-2 px-6 py-2 bg-primary text-white rounded-lg font-bold hover:bg-red-700 transition-all disabled:opacity-50"
        >
          <Save className="w-4 h-4" />
          {loading ? "Saving..." : "Save Vehicle"}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Media & Core Info */}
        <div className="lg:col-span-2 space-y-8">
            {/* Basic Info */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-xl space-y-4">
                <h3 className="text-lg font-bold text-white border-b border-white/10 pb-2">Basic Info</h3>
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs uppercase text-slate-500 mb-1">Name</label>
                        <input name="name" value={formData.name} onChange={handleChange} className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-2 text-white" required />
                    </div>
                     <div>
                        <label className="block text-xs uppercase text-slate-500 mb-1">Subtitle</label>
                        <input name="subtitle" value={formData.subtitle} onChange={handleChange} className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-2 text-white" required />
                    </div>
                     <div>
                        <label className="block text-xs uppercase text-slate-500 mb-1">Category</label>
                        <select name="category" value={formData.category} onChange={handleChange} className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-2 text-white">
                            <option value="suv">SUV</option>
                            <option value="executive">Executive</option>
                            <option value="trips">Trips / Group</option>
                            <option value="classic">Classic / Utility</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-xs uppercase text-slate-500 mb-1">Badge</label>
                        <input name="badge" value={formData.badge || ""} onChange={handleChange} placeholder="e.g. Featured" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-2 text-white" />
                    </div>
                </div>
                <div>
                     <label className="block text-xs uppercase text-slate-500 mb-1">Overview Description</label>
                     <textarea name="overview" value={formData.overview} onChange={handleChange} rows={3} className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-2 text-white text-sm" />
                </div>
            </div>

            {/* Media Uploads */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-xl space-y-6">
                <h3 className="text-lg font-bold text-white border-b border-white/10 pb-2">Media</h3>
                
                {/* Main Image */}
                <div>
                    <label className="block text-xs uppercase text-slate-500 mb-2">Main Image (Required)</label>
                    <div className="flex gap-4 items-start">
                        <div className="w-32 h-20 bg-black/40 rounded-lg border border-white/10 flex items-center justify-center overflow-hidden relative">
                             {formData.image ? (
                                 <img src={formData.image} alt="Main" className="w-full h-full object-cover" />
                             ) : (
                                 <span className="text-xs text-slate-500">No Image</span>
                             )}
                        </div>
                        <div className="flex-1">
                             <input 
                                type="file" 
                                accept="image/*"
                                onChange={(e) => handleFileUpload(e, 'image')}
                                className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-red-700" 
                             />
                             <p className="text-xs text-slate-600 mt-1">{uploading ? "Uploading..." : "Upload new image to replace"}</p>
                        </div>
                    </div>
                </div>

                {/* Gallery */}
                <div>
                    <label className="block text-xs uppercase text-slate-500 mb-2">Gallery</label>
                     <div className="grid grid-cols-4 gap-2 mb-4">
                        {formData.gallery?.map((img: string, i: number) => (
                            <div key={i} className="relative aspect-video group">
                                <img src={img} alt="" className="w-full h-full object-cover rounded border border-white/10" />
                                <button type="button" onClick={() => handleRemoveGalleryImage(i)} className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                                    <X className="w-3 h-3" />
                                </button>
                            </div>
                        ))}
                    </div>
                    <label className="flex items-center justify-center w-full h-24 border-2 border-dashed border-white/10 rounded-lg cursor-pointer hover:border-primary/50 transition-colors">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <Upload className="w-6 h-6 text-slate-400 mb-2" />
                            <p className="text-xs text-slate-500">Click to upload gallery image</p>
                        </div>
                        <input type="file" accept="image/*" className="hidden" onChange={(e) => handleFileUpload(e, 'gallery')} />
                    </label>
                </div>
            </div>
        </div>

        {/* Right Column: Dynamic Specs & Rental */}
        <div className="space-y-8">
             {/* Flexible Specs */}
             <div className="bg-white/5 border border-white/10 p-6 rounded-xl space-y-4">
                <h3 className="text-lg font-bold text-white border-b border-white/10 pb-2">Specifications</h3>
                <p className="text-xs text-slate-400">Add any custom specifications for this vehicle type.</p>
                
                <div className="space-y-3">
                    {Object.entries(formData.specs || {}).map(([key, value]) => (
                         <div key={key} className="flex items-center gap-2 bg-black/20 p-2 rounded-lg border border-white/5">
                             <div className="flex-1">
                                 <div className="text-[10px] uppercase text-slate-500">{key}</div>
                                 <div className="text-sm text-white">{value as string}</div>
                             </div>
                             <button type="button" onClick={() => handleRemoveSpec(key)} className="text-slate-500 hover:text-red-500">
                                 <X className="w-4 h-4" />
                             </button>
                         </div>
                    ))}
                </div>

                <div className="pt-4 border-t border-white/10">
                    <div className="grid grid-cols-2 gap-2 mb-2">
                        <input value={newSpecKey} onChange={(e) => setNewSpecKey(e.target.value)} placeholder="Field (e.g. Range)" className="bg-black/40 text-xs px-2 py-1 rounded border border-white/10 text-white" />
                        <input value={newSpecValue} onChange={(e) => setNewSpecValue(e.target.value)} placeholder="Value (e.g. 500km)" className="bg-black/40 text-xs px-2 py-1 rounded border border-white/10 text-white" />
                    </div>
                    <button type="button" onClick={handleAddSpec} className="w-full py-1 bg-white/10 text-xs text-white rounded hover:bg-white/20">
                        + Add Spec
                    </button>
                </div>
            </div>

            {/* Rental Info */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-xl space-y-4">
                <h3 className="text-lg font-bold text-white border-b border-white/10 pb-2">Rental Details</h3>
                <div>
                  <label className="block text-xs uppercase text-slate-500 mb-1">Min Duration</label>
                  <input name="rental.minDuration" value={formData.rental?.minDuration || ""} onChange={handleChange} className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-2 text-white" />
                </div>
                <div>
                  <label className="block text-xs uppercase text-slate-500 mb-1">Availability</label>
                  <input name="rental.availability" value={formData.rental?.availability || ""} onChange={handleChange} className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-2 text-white" />
                </div>
            </div>
        </div>
      </div>
    </form>
  );
}
