import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import MobileBottomNav from "../components/layout/MobileBottomNav";
import ChatWidget from "../components/ui/ChatWidget";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <ChatWidget />
      <MobileBottomNav />
    </>
  );
}
