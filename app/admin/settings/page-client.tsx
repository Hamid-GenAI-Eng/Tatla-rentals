"use client";

import { useState } from "react";
import { Save, User, Lock, Bell, Globe, Shield } from "lucide-react";

export default function SettingsClientPage() {
  const [activeTab, setActiveTab] = useState("profile");
  const [loading, setLoading] = useState(false);

  const handleSave = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
        setLoading(false);
        alert("Settings saved successfully!");
    }, 1000);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white">Settings</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="md:col-span-1 space-y-2">
            {[
                { id: "profile", label: "Profile", icon: User },
                { id: "account", label: "Account", icon: Lock },
                { id: "notifications", label: "Notifications", icon: Bell },
                { id: "site", label: "Site Config", icon: Globe },
                { id: "security", label: "Security", icon: Shield },
            ].map((item) => (
                <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                        activeTab === item.id
                            ? "bg-primary text-white shadow-lg shadow-primary/20"
                            : "text-slate-400 hover:text-white hover:bg-white/5"
                    }`}
                >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                </button>
            ))}
        </div>

        {/* Content */}
        <div className="md:col-span-3 bg-white/5 border border-white/10 rounded-xl p-6 min-h-[500px]">
            {activeTab === "profile" && (
                <div className="space-y-6">
                    <h2 className="text-xl font-bold text-white border-b border-white/10 pb-4">Profile Settings</h2>
                    <div className="grid gap-4">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center text-2xl font-bold text-primary border border-primary/30">
                                A
                            </div>
                            <div>
                                <button className="text-xs bg-white/10 list-item hover:bg-white/20 px-3 py-1 rounded text-white transition-colors">Change Avatar</button>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs uppercase text-slate-500 mb-1">First Name</label>
                                <input type="text" defaultValue="Admin" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-2 text-white" />
                            </div>
                             <div>
                                <label className="block text-xs uppercase text-slate-500 mb-1">Last Name</label>
                                <input type="text" defaultValue="User" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-2 text-white" />
                            </div>
                        </div>
                         <div>
                            <label className="block text-xs uppercase text-slate-500 mb-1">Email</label>
                            <input type="email" defaultValue="admin@tatlarentals.com" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-2 text-white" disabled />
                        </div>
                        <div>
                            <label className="block text-xs uppercase text-slate-500 mb-1">Bio</label>
                            <textarea rows={3} className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-2 text-white" />
                        </div>
                    </div>
                </div>
            )}

             {activeTab === "site" && (
                <div className="space-y-6">
                    <h2 className="text-xl font-bold text-white border-b border-white/10 pb-4">Site Configuration</h2>
                    <div className="grid gap-4">
                         <div>
                            <label className="block text-xs uppercase text-slate-500 mb-1">Site Title</label>
                            <input type="text" defaultValue="Tatla Rent a Car" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-2 text-white" />
                        </div>
                         <div>
                            <label className="block text-xs uppercase text-slate-500 mb-1">Support Email</label>
                            <input type="email" defaultValue="support@tatlarentals.com" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-2 text-white" />
                        </div>
                        <div className="flex items-center gap-2">
                             <input type="checkbox" id="maintenance" className="w-4 h-4 rounded border-white/10 bg-black/20 text-primary focus:ring-primary" />
                             <label htmlFor="maintenance" className="text-sm text-slate-300">Enable Maintenance Mode</label>
                        </div>
                    </div>
                </div>
            )}
            
            {/* ... other tabs would go here ... */}
            
            <div className="mt-8 pt-4 border-t border-white/10 flex justify-end">
                <button 
                    onClick={handleSave} 
                    disabled={loading}
                    className="flex items-center gap-2 px-6 py-2 bg-primary text-white rounded-lg font-bold hover:bg-red-700 transition-all disabled:opacity-50"
                >
                    <Save className="w-4 h-4" />
                    {loading ? "Saving..." : "Save Changes"}
                </button>
            </div>
        </div>
      </div>
    </div>
  );
}
