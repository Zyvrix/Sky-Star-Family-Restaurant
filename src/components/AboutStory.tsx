import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

export function AboutStory() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container-app px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="font-script text-3xl md:text-4xl text-primary mb-2">
            Discover
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-wide">
            OUR STORY
          </h2>
          <p className="text-foreground text-lg md:text-xl mt-4 max-w-3xl mx-auto font-medium">
            Sky Star Family Restaurant & Hotel stands as the best Restaurant in Karoli, Haryana.
          </p>
        </div>

        {/* Logo - Centered */}
        <div className="flex justify-center items-center mb-12">
          <img
            src={logo}
            alt="Sky Star Logo"
            className="w-48 max-w-full md:w-64 h-auto object-contain"
            loading="lazy"
          />
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
            From the moment you step inside Sky Star Restaurant, you are greeted by an ambiance that is warm and inviting. The restaurant's classic décor, including vintage accents and elegant lighting, creates a cozy atmosphere that makes guests feel at home. The restaurant's staff is also known for their warm hospitality, going above and beyond to ensure that each guest's dining experience is memorable.
          </p>

          {/* CTA Button */}
          <Link to="/menu">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 py-6 text-lg tracking-wide"
            >
              CHECK OUR MENU
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}