import ServicesClient from "../components/sections/ServicesClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bespoke Services",
  description: "Daily rentals, chauffeur services, airport VIP transfers, and wedding events.",
};

export default function ServicesPage() {
  return <ServicesClient />;
}
