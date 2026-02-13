import dbConnect from "@/app/lib/db";
import Vehicle from "@/app/models/Vehicle";
import VehicleForm from "../../form";
import { notFound } from "next/navigation";

// Force dynamic behavior since we are fetching from DB
export const dynamic = 'force-dynamic';

export default async function EditVehiclePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  await dbConnect();
  
  // Need to JSON.stringify and parse to avoid "Only plain objects can be passed to Client Components" error 
  // because Mongoose returns a complex object with methods.
  let vehicle = await Vehicle.findById(id).lean();

  if (!vehicle) {
    notFound();
  }
  
  // Convert _id to string and date to string if needed
  vehicle = JSON.parse(JSON.stringify(vehicle));

  return <VehicleForm initialData={vehicle} isEdit />;
}
