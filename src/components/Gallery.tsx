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
    <section id="gallery" className="py-28 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in max-w-3xl mx-auto">
          <div className="inline-block px-5 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
            <span className="text-sm font-bold text-secondary">Memories</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            Our <span className="gradient-text">Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed font-medium">
            Moments that define our journey of excellence and growth
          </p>
        </div>

        {/* Premium Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-8 py-3 rounded-full font-bold text-sm transition-all duration-500 ${
                selectedCategory === category
                  ? "bg-gradient-hero text-white shadow-xl scale-110"
                  : "bg-card hover:bg-muted text-foreground border border-border/50 hover:border-primary/30 hover:scale-105"
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
              className="group overflow-hidden hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 animate-scale-in border-border/50 hover:border-primary/30 bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-hero text-white text-xs font-bold mb-3 shadow-lg">
                      {image.category}
                    </span>
                    <h3 className="text-white font-black text-xl leading-tight">{image.title}</h3>
                  </div>
                </div>
                
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
