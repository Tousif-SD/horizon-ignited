import { useState } from "react";
import { Card } from "@/components/ui/card";
import graduation from "@/assets/graduation.png";
import studentsGroup from "@/assets/students-group.png";
import awareness from "@/assets/awareness-campaign.png";
import teachersDay from "@/assets/teachers-day.png";
import teachersDayCollage from "@/assets/teachers-day-collage.png";
import awards from "@/assets/awards.png";
import independenceDay from "@/assets/independence-day.png";
import flagCeremony from "@/assets/flag-ceremony.png";

const galleryImages = [
  { src: graduation, title: "Graduation Ceremony", category: "Events" },
  { src: studentsGroup, title: "Our Vibrant Student Community", category: "Campus Life" },
  { src: awareness, title: "Social Awareness Campaign", category: "Activities" },
  { src: teachersDay, title: "Teacher's Day Celebration", category: "Events" },
  { src: teachersDayCollage, title: "Teacher's Day Moments", category: "Events" },
  { src: awards, title: "District Level Winners", category: "Achievements" },
  { src: independenceDay, title: "Independence Day", category: "Events" },
  { src: flagCeremony, title: "Flag Hoisting Ceremony", category: "Events" },
];

const categories = ["All", "Events", "Activities", "Achievements", "Campus Life"];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <section id="gallery" className="section-padding bg-gradient-to-b from-muted/20 via-muted/30 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20">
            <span className="text-sm font-bold text-secondary">Memories</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Our <span className="gradient-text">Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Moments that define our journey of excellence and growth
          </p>
        </div>

        {/* Premium Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-8 py-3 rounded-full font-bold transition-all duration-500 shadow-md ${
                selectedCategory === category
                  ? "bg-gradient-hero text-primary-foreground shadow-xl scale-110 -rotate-1"
                  : "glass-dark hover:scale-105 text-foreground hover:shadow-lg"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Premium Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image, index) => (
            <Card
              key={index}
              className="premium-card group overflow-hidden animate-scale-in border-2 border-border/50 hover:border-primary/30"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-xs font-bold mb-3 shadow-lg">
                      {image.category}
                    </span>
                    <h3 className="text-white font-extrabold text-xl leading-tight">{image.title}</h3>
                  </div>
                </div>
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
