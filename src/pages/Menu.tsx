import { useState } from "react";
import { TopBar } from "@/components/TopBar";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Download, Phone, ChevronLeft, ChevronRight } from "lucide-react";
import menu1 from "@/assets/menu-page.png";
import menu2 from "@/assets/menu2.jpg";
import menu3 from "@/assets/menu3.jpg";
import menu4 from "@/assets/menu4.jpg";
import menu5 from "@/assets/menu5.jpg";
import menu6 from "@/assets/menu6.jpg";
import menu7 from "@/assets/menu7.jpg";

const menuImages = [menu1, menu2, menu3, menu4, menu5, menu6, menu7];
const PHONE_NUMBER = "+919671286810";

export default function Menu() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleCall = () => {
    window.location.href = `tel:${PHONE_NUMBER}`;
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % menuImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + menuImages.length) % menuImages.length);
  };

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />

      {/* Header */}
      <section className="py-12 md:py-16 bg-charcoal-dark">
        <div className="container-app px-4 text-center">
          <p className="font-script text-3xl md:text-4xl text-white mb-2">
            Explore
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-widest">
            OUR COMPLETE MENU
          </h1>
          <p className="text-white/70 max-w-xl mx-auto mb-8">
            Explore our wide range of delicious dishes prepared with fresh ingredients
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleCall}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            >
              <Phone className="w-4 h-4 mr-2" />
              Order Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold "
              onClick={() => window.open("https://3nn5hf-my.sharepoint.com/:b:/g/personal/intr0vert_08_3nn5hf_onmicrosoft_com/IQBvIgQbfE87SYvYUUOHQmiRAYEB3qZpHCP8ddMSsoO4Auk?e=H7OcNR", "_blank")}
            >
              <Download className="w-4 h-4 mr-2" />
              Download Menu PDF
            </Button>
          </div>
        </div>
      </section>

      {/* PDF Viewer Section */}
      <section className="py-8 md:py-12 bg-secondary">
        <div className="container-app px-4">
          <div className="max-w-4xl mx-auto">
            {/* Menu Image Slider */}
            <div className="relative text-center group">
              <div className="relative w-full overflow-hidden rounded-xl shadow-elevated mb-8 bg-white flex justify-center items-center aspect-[3/4] md:aspect-[4/5] lg:aspect-auto min-h-[500px]">
                <img
                  src={menuImages[currentIndex]}
                  alt={`Sky Star Menu Page ${currentIndex + 1}`}
                  className="w-full h-auto object-contain bg-white transition-opacity duration-300"
                />

                {/* Left Arrow */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 md:p-3 backdrop-blur-sm transition-all md:opacity-0 md:group-hover:opacity-100"
                  aria-label="Previous menu page"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Right Arrow */}
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 md:p-3 backdrop-blur-sm transition-all md:opacity-0 md:group-hover:opacity-100"
                  aria-label="Next menu page"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Slider Dots */}
              <div className="flex justify-center gap-2 mb-8">
                {menuImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2.5 rounded-full transition-all ${currentIndex === index ? "w-6 bg-primary" : "w-2.5 bg-primary/30 hover:bg-primary/50"
                      }`}
                    aria-label={`Go to menu page ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 py-6 text-lg"
                onClick={() => window.open("https://3nn5hf-my.sharepoint.com/:b:/g/personal/intr0vert_08_3nn5hf_onmicrosoft_com/IQBvIgQbfE87SYvYUUOHQmiRAYEB3qZpHCP8ddMSsoO4Auk?e=H7OcNR", "_blank")}
              >
                <Download className="w-5 h-5 mr-3" />
                Download Full Menu
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-primary">
        <div className="container-app px-4 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Order?
          </h2>
          <p className="text-white/80 mb-6">
            Call us or order directly on WhatsApp
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleCall}
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
            <Button
              size="lg"
              className="bg-whatsapp hover:bg-whatsapp/90 text-white font-semibold"
              onClick={() => window.open("https://wa.me/919671286810?text=Hi, I would like to place an order.", "_blank")}
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 mr-2 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Order on WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}