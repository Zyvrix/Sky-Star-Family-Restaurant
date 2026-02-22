import { TopBar } from "@/components/TopBar";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutStory } from "@/components/AboutStory";
import { MenuPreview } from "@/components/MenuPreview";
import { FacilitiesSection } from "@/components/FacilitiesSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import { BookStaySection } from "@/components/BookStaySection";
import { ReservationSection } from "@/components/ReservationSection";
import { GallerySection } from "@/components/GallerySection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      <Hero />
      <AboutStory />
      <MenuPreview />
      <FacilitiesSection />
      <WhyUsSection />
      <BookStaySection />
      <ReservationSection />
      <GallerySection />
      <Footer />
    </div>
  );
};

export default Index;