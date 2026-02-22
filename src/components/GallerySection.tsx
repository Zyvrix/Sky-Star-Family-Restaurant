import paneerButterMasala from "@/assets/dish-paneer-butter-masala.jpg";
import butterChicken from "@/assets/dish-butter-chicken.jpg";
import tandooriChicken from "@/assets/dish-tandoori-chicken.jpg";
import dalMakhani from "@/assets/dish-dal-makhani.jpg";
import vegPizza from "@/assets/dish-veg-pizza.jpg";
import heroImage from "@/assets/hero-restaurant.jpg";
// import roomDeluxe from "@/assets/room-deluxe.jpg";
// import roomFamily from "@/assets/room-family.jpg";

const galleryImages = [
  { src: paneerButterMasala, alt: "Paneer Butter Masala" },
  { src: butterChicken, alt: "Butter Chicken" },
  { src: heroImage, alt: "Restaurant Exterior" },
  { src: tandooriChicken, alt: "Tandoori Chicken" },
  { src: dalMakhani, alt: "Dal Makhani" },
  // { src: roomDeluxe, alt: "Deluxe Room" },
  { src: vegPizza, alt: "Veg Pizza" },
  // { src: roomFamily, alt: "Family Room" },
];

export function GallerySection() {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-secondary">
      <div className="container-app px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="font-script text-3xl md:text-4xl text-primary mb-2">
            Our
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-wide">
            GALLERY
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <div
              key={image.alt}
              className="aspect-square overflow-hidden rounded-lg animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
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
      </div>
    </section>
  );
}