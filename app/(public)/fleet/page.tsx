import FleetClient from "../../components/sections/FleetClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Fleet",
  description: "Explore our collection of executive, SUV, and utility vehicles available for rent.",
};

export default function FleetPage() {
  return <FleetClient initialVehicles={[]} />;
}
