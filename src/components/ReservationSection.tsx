import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const WHATSAPP_NUMBER = "919671286810";

export function ReservationSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [members, setMembers] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi, I would like to make a reservation.\n\nName: ${name}\nPhone: ${phone}\nNo. of Members: ${members}`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-charcoal-dark">
      <div className="container-app px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="font-script text-3xl md:text-4xl text-white mb-2">
            Online Booking
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-widest">
            RESERVATION
          </h2>
        </div>

        {/* Description */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <p className="text-white/90 text-base md:text-lg leading-relaxed">
            Welcome to our restaurant, where culinary delights await you at every turn! We take pride in offering an extensive and diverse food menu that caters to a wide range of tastes and preferences. Whether you're a fan of international cuisines, a health-conscious individual, or someone who enjoys traditional comfort food, our menu has something to satisfy every palate.
          </p>
          <p className="text-white/80 text-base md:text-lg leading-relaxed mt-4">
            Let's embark on a journey through our tantalizing food menu, where flavors from around the world blend harmoniously to create a memorable dining experience.
          </p>
        </div>

        {/* Reservation Form */}
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6 md:p-8 shadow-elevated">
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Your name *
                </label>
                <Input
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone *
                </label>
                <Input
                  type="tel"
                  placeholder="+91-999-999-9999"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  No. of Members *
                </label>
                <Select value={members} onValueChange={setMembers} required>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num} {num === 1 ? 'Person' : 'Persons'}
                      </SelectItem>
                    ))}
                    <SelectItem value="10+">10+ Persons</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="text-center">
              <Button
                type="submit"
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 tracking-wide"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}