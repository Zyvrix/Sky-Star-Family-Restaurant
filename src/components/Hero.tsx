import { useState, useEffect } from "react";
import heroImage from "@/assets/hero-restaurant.jpg";
import h1Image from "@/assets/h1.jpeg";
import h2Image from "@/assets/h2.jpeg";
import h3Image from "@/assets/h3.jpeg";

const images = [heroImage, h1Image, h2Image, h3Image];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // 4 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative w-full bg-zinc-900 overflow-hidden">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((imgSrc, index) => (
          <div key={index} className="w-full flex-shrink-0 relative flex justify-center bg-zinc-900">
            <img
              src={imgSrc}
              alt={`Sky Star Family Restaurant & Hotel - Slide ${index + 1}`}
              className={`w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[800px] object-cover ${index === 0 ? "object-top" : "object-center"
                }`}
            />
          </div>
        ))}
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-white scale-125 shadow-md" : "bg-white/50 hover:bg-white/70"
              }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}


export default Hero;
