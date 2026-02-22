import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const PHONE_NUMBER = "+919671286810";

export function Footer() {
  const handleDirections = () => {
    window.open(
      "https://maps.app.goo.gl/2VbTr9ddGZyskuxM6",
      "_blank"
    );
  };

  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="container-app px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          {/* Left Column - Info */}
          <div className="space-y-6">
            {/* Logo */}
            <img src={logo} alt="Sky Star Hotel" className="h-20 w-auto" />

            {/* Address */}
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">Address</p>
                <p className="text-footer-foreground/70 text-sm">
                  Karoli, Kanina - Kosli Road,<br />
                  Rewari, Haryana, 123303
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-footer-foreground/70 text-sm">
                  <a href="tel:+919671286810" className="hover:text-primary transition-colors">+919671286810</a>
                  <br />
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-footer-foreground/70 text-sm">
                  <a href="mailto:info@skystarfamily.in" className="hover:text-primary transition-colors">
                    info@skystarfamily.in
                  </a>
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">Opening Hours</p>
                <p className="text-footer-foreground/70 text-sm">
                  Daily: 6:00 AM – 12:00 AM
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
            </div>

            {/* Get Directions Button */}
            <Button
              onClick={handleDirections}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            >
              <MapPin className="w-4 h-4 mr-2" />
              Get Directions
            </Button>
          </div>

          {/* Right Column - Map */}
          <div className="h-64 md:h-full min-h-[250px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.203923508123!2d76.3471788!3d28.3696588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391299c0a5ee0185%3A0xc66d449a00a421df!2sSky%20Star%20Family%20Restaurant!5e0!3m2!1sen!2sin!4v1708666578000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sky Star Location"
            />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-app px-4 py-4">
          <p className="text-center text-sm text-footer-foreground/60">
            © {new Date().getFullYear()} Sky Star Family Restaurant & Hotel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}