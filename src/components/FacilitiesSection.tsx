import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

import heroImage from "@/assets/luxury.png";
import roomFamily from "@/assets/hall.png";
import roomDeluxe from "@/assets/cater.jpg";

const PHONE_NUMBER = "+919671286810";

const facilities = [
  {
    title: "Luxury Restaurant",
    image: heroImage,
    features: [
      "Quality of Food",
      "Rapid Service",
      "Joyful Ambience",
      "Consistency of Taste",
      "Photogenic Views",
    ],
    cta: "RESERVE TABLE",
    reverse: false,
  },
  {
    title: "Spacious Event Hall",
    image: roomFamily,
    features: [
      "Ample space for guests and activities",
      "Versatile layout options",
      "Modern and well-maintained facilities",
      "Accessible location with ample parking",
      "Professional and attentive staff",
      "State-of-the-art audio and visual equipment",
      "Flexible catering options",
      "Climate-controlled environment",
      "Customizable decor options",
    ],
    cta: "BOOK HALL",
    reverse: true,
  },
  {
    title: "Catering Services",
    image: roomDeluxe,
    features: [
      "High-quality food and beverages",
      "Professional and attentive staff",
      "Flexibility and customization options",
      "Timeliness and punctuality",
      "Attention to detail and presentation",
      "Ability to handle large events and crowds",
      "Strong communication skills",
      "Cleanliness and sanitation practices",
    ],
    cta: "GET QUOTE",
    reverse: false,
  },
];

export function FacilitiesSection() {
  const handleCall = () => {
    window.location.href = `tel:${PHONE_NUMBER}`;
  };

  return (
    <section id="facilities" className="py-16 md:py-24 bg-background">
      <div className="container-app px-4">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="font-script text-3xl md:text-4xl text-primary mb-2">
            Check Out
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-wide">
            OUR FACILITIES
          </h2>
        </div>

        {/* Facilities List */}
        <div className="space-y-16 md:space-y-24 max-w-6xl mx-auto">
          {facilities.map((facility, index) => (
            <div
              key={facility.title}
              className={`flex flex-col ${
                facility.reverse ? "md:flex-row-reverse" : "md:flex-row"
              } gap-8 md:gap-12 items-center animate-fade-in`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Content */}
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground italic">
                  {facility.title}
                </h3>
                <ul className="space-y-2">
                  {facility.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="pt-4">
                  <Button
                    onClick={handleCall}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold tracking-wide"
                    size="lg"
                  >
                    {facility.cta}
                  </Button>
                </div>
              </div>

              {/* Image */}
              <div className="w-full md:w-1/2">
                <div className="overflow-hidden rounded-lg shadow-elevated">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-64 md:h-80 object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}