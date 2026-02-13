import FleetCategoryClient from "../../../components/sections/FleetCategoryClient";

export async function generateStaticParams() {
  return [
    { category: "classic" },
    { category: "executive" },
    { category: "premium" },
    { category: "wedding" },
    { category: "trips" },
  ];
}

export async function generateMetadata(props: { params: Promise<{ category: string }> }) {
  const params = await props.params;
  const titles: Record<string, string> = {
     classic: "Classic Series",
     executive: "Executive Class",
     premium: "Premium Luxury",
     wedding: "Wedding Events",
     trips: "Trips & Tours"
  };
  
  const title = titles[params.category] || "Fleet Category";

  return {
    title: `${title} | Tatla Rent a Car`,
    description: `Explore our exclusive ${title} fleet. Premium vehicles tailored for your journey.`
  };
}

export default async function Page(props: { params: Promise<{ category: string }> }) {
  const params = await props.params;
  return <FleetCategoryClient category={params.category} />;
}
