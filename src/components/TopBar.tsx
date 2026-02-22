import { Clock, MapPin, Phone } from "lucide-react";

export function TopBar() {
  return (
    <div className="bg-accent text-accent-foreground py-2 text-sm">
      <div className="container-app px-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 md:gap-6">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">MON-SUN</span>
              <span>06:00 AM - 12:00 AM</span>
            </div>
            <div className="hidden md:flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              <span>Karoli, Kanina, Haryana 123303</span>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5" />
            <span>RESERVATION:</span>
            <a href="tel:+919671286810" className="font-semibold hover:underline">
              +91 9671286810
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}