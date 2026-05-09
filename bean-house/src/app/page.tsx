import TopNavBar from "@/components/TopNavBar";
import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
import HoursLocationSection from "@/components/HoursLocationSection";
import ReviewsSection from "@/components/ReviewsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <TopNavBar />
      <main className="pt-[80px]">
        <HeroSection />
        <MenuSection />
        <HoursLocationSection />
        <ReviewsSection />
      </main>
      <Footer />
    </>
  );
}
