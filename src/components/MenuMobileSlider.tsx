import { useEffect, useState } from "react";

interface ImageItem {
  src: string;
  alt: string;
}

interface Props {
  images: ImageItem[];
}

export default function MenuMobileSlider({ images }: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full overflow-hidden rounded-xl">
      <img
        src={images[index].src}
        alt={images[index].alt}
        className="w-full h-64 object-cover transition-opacity duration-700"
      />

      {/* dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full transition-all ${
              i === index ? "bg-red-600 scale-110" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
