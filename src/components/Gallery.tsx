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
    <section id="gallery" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Gallery</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Moments that define our journey of excellence and growth
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-hero text-primary-foreground shadow-lg scale-105"
                  : "bg-card hover:bg-muted text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-semibold mb-2">
                      {image.category}
                    </span>
                    <h3 className="text-white font-bold text-lg">{image.title}</h3>
                  </div>
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
