import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteFx from "@/components/SiteFx";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <SiteFx />
    </>
  );
}
