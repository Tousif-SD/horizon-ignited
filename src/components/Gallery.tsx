import { useState } from "react";
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
    <section id="gallery" className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-bold mb-4">
            Memories
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Gallery</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Moments that define our journey of excellence and growth
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-hero text-primary-foreground shadow-md"
                  : "bg-card text-foreground hover:bg-muted border border-border/50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium mb-2">
                    {image.category}
                  </span>
                  <h3 className="text-white font-bold text-base sm:text-lg">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
