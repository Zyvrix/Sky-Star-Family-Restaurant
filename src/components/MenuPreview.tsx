import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

import paneerButterMasala from "@/assets/dish-paneer-butter-masala.jpg";
import butterChicken from "@/assets/dish-butter-chicken.jpg";
import tandooriChicken from "@/assets/dish-tandoori-chicken.jpg";

import MenuMobileSlider from "./MenuMobileSlider";

const menuImages = [
  { src: paneerButterMasala, alt: "Paneer Butter Masala" },
  { src: butterChicken, alt: "Butter Chicken" },
  { src: tandooriChicken, alt: "Tandoori Chicken" },
];

export function MenuPreview() {
  return (
    <section id="menu" className="py-16 md:py-24 bg-charcoal-dark">
      <div className="container-app px-4">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-12">
          <p className="font-script text-3xl md:text-4xl text-white mb-2">
            Explore
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-widest">
            OUR MENU
          </h2>
        </div>

        {/* ================= MOBILE SLIDER ================= */}
        <div className="block sm:hidden max-w-sm mx-auto mb-12">
          <MenuMobileSlider images={menuImages} />
        </div>

        {/* ================= DESKTOP GRID ================= */}
        <div className="hidden sm:grid grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto mb-12">
          {menuImages.map((image, index) => (
            <div
              key={image.alt}
              className="aspect-square overflow-hidden rounded-lg animate-fade-in"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* ================= DESCRIPTION ================= */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <p className="text-white/90 italic text-base md:text-lg leading-relaxed">
            Welcome to our restaurant, where culinary delights await you at every turn! 
            We take pride in offering an extensive and diverse food menu that caters to 
            a wide range of tastes and preferences.
          </p>
          <p className="text-white/80 italic text-base md:text-lg leading-relaxed mt-4">
            Let’s embark on a journey through our tantalizing food menu, where flavors 
            from around the world blend harmoniously to create a memorable dining experience.
          </p>
        </div>

        {/* ================= CTA ================= */}
        <div className="flex items-center justify-center gap-6 max-w-3xl mx-auto">
          <div className="flex-1 h-px bg-white/30" />
          <Link to="/menu">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 py-6 text-lg tracking-wide"
            >
              CHECK OUR MENU
            </Button>
          </Link>
          <div className="flex-1 h-px bg-white/30" />
        </div>

      </div>
    </section>
  );
}
