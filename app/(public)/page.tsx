
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import Fleet from "../components/sections/Fleet";

export const metadata = {
  title: "Home",
  description: "Premier Luxury Car Rental Services in Pakistan.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      {/* @ts-ignore */}
      <Fleet initialVehicles={[]} />
      <Services />
    </main>
  );
}
