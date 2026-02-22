import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import roomDeluxe from "@/assets/room-deluxe.jpg";

const PHONE_NUMBER = "+919671286810";

const roomFeatures = [
  "Comfortable bed and bedding",
  "Clean and well-maintained bathroom",
  "Temperature control options (air conditioning/heating)",
  "Soundproofing for a peaceful night's sleep",
  "Desk or workspace for business travelers",
  "High-speed internet connectivity",
];

export function BookStaySection() {
  const handleCall = () => {
    window.location.href = `tel:${PHONE_NUMBER}`;
  };

  return (
    <section id="stay" className="py-16 md:py-24 bg-background">
      <div className="container-app px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <p className="font-script text-3xl md:text-4xl text-primary mb-2">
            Happy Rooms
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-wide">
            BOOK YOUR STAY
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            • Rooms • Conference • Banquet • Weddings
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-5xl mx-auto">
          {/* Room Image */}
          <div className="overflow-hidden rounded-lg shadow-elevated">
            <img
              src={roomDeluxe}
              alt="Comfortable Hotel Room"
              className="w-full h-64 md:h-96 object-cover"
              loading="lazy"
            />
          </div>

          {/* Features */}
          <div className="space-y-6">
            <ul className="space-y-3">
              {roomFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            <Button
              onClick={handleCall}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold tracking-wide"
            >
              <Phone className="w-4 h-4 mr-2" />
              BOOK STAY
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}