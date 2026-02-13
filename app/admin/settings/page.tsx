
import type { Metadata } from "next";
import SettingsClientPage from "./page-client";

export const metadata: Metadata = {
  title: "Settings | Admin Dashboard",
  description: "Configure application settings.",
};

export default function SettingsPage() {
    return <SettingsClientPage />;
}
