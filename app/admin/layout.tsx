import Link from "next/link";
import { LayoutDashboard, Car, Settings, LogOut, FileText } from "lucide-react";
import { logout } from "@/app/lib/auth";
import { redirect } from "next/navigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-black text-slate-200 font-sans">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/10 bg-black/95 fixed h-full z-10 hidden md:flex flex-col">
        <div className="p-6 border-b border-white/10">
          <Link href="/admin" className="block">
             <div className="text-2xl font-bold text-white italic tracking-wider">
               TATLA
             </div>
             <div className="text-[10px] tracking-[0.3em] text-primary font-bold mt-1">
               ADMIN PANEL
             </div>
          </Link>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <Link
            href="/admin"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium hover:bg-white/5 hover:text-white transition-colors text-slate-400"
          >
            <LayoutDashboard className="w-5 h-5" />
            Dashboard
          </Link>
          <Link
            href="/admin/inventory"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium hover:bg-white/5 hover:text-white transition-colors text-slate-400"
          >
            <Car className="w-5 h-5" />
            Inventory
          </Link>
           <Link
            href="/admin/settings"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium hover:bg-white/5 hover:text-white transition-colors text-slate-400"
          >
            <Settings className="w-5 h-5" />
            Settings
          </Link>
        </nav>

        <div className="p-4 border-t border-white/10">
           <form action={async () => {
             "use server";
             await logout();
             redirect("/admin/login");
           }}>
              <button type="submit" className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-sm font-medium text-red-400 hover:bg-red-500/10 transition-colors">
                <LogOut className="w-5 h-5" />
                Logout
              </button>
           </form>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 p-8">
        {children}
      </main>
    </div>
  );
}
