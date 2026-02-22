import { Droplets, UtensilsCrossed, Car, ThumbsUp } from "lucide-react";
import logo from "@/assets/logo.png";

const features = [
  {
    icon: Droplets,
    title: "PURITY",
    description: "In all types of cooking, we use desi ghee, peanut oil and mustard oil",
    position: "left-top",
  },
  {
    icon: UtensilsCrossed,
    title: "WIDE VARIETY OF MENU",
    description: "Our menu has something to satisfy every palate",
    position: "right-top",
  },
  {
    icon: Car,
    title: "SPACIOUS PARKING",
    description: "There is a lot of available space for parking vehicles",
    position: "left-bottom",
  },
  {
    icon: ThumbsUp,
    title: "SATISFIED CUSTOMERS",
    description: "Consistent positive reviews and recommendations from satisfied customers",
    position: "right-bottom",
  },
];

export function WhyUsSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container-app px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-script text-3xl md:text-4xl text-primary mb-2">
            Why Us
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-wide">
            WHY US
          </h2>
        </div>

        {/* Features Grid with Logo Center */}
        <div className="relative max-w-5xl mx-auto">
          {/* Desktop Layout */}
          <div className="hidden md:grid grid-cols-3 gap-8 items-center">
            {/* Left Column */}
            <div className="space-y-16">
              {features.filter(f => f.position.startsWith('left')).map((feature) => (
                <div key={feature.title} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Center Logo */}
            <div className="flex justify-center items-center">
              <div className="relative">
                <img
                  src={logo}
                  alt="Sky Star Logo"
                  className="w-64 h-auto"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-16">
              {features.filter(f => f.position.startsWith('right')).map((feature) => (
                <div key={feature.title} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden">
            {/* Logo */}
            <div className="flex justify-center mb-10">
              <img
                src={logo}
                alt="Sky Star Logo"
                className="w-48 h-auto"
                loading="lazy"
              />
            </div>
            
            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-4 p-4 bg-secondary rounded-lg">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-sm mb-1">{feature.title}</h3>
                    <p className="text-xs text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}