
import type { Metadata } from "next";
import InventoryPage from "./page-client"; // Assuming client component is separate or I wrap it

export const metadata: Metadata = {
  title: "Inventory | Admin Dashboard",
  description: "Manage your fleet.",
};

export default function Page() {
    return <InventoryPage />;
}
