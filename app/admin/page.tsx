
import type { Metadata } from "next";
import AdminDashboard from "./page-client";

export const metadata: Metadata = {
  title: "Dashboard Overview",
  description: "Admin overview.",
};

export default function Page() {
    return <AdminDashboard />;
}
