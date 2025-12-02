import { BookOpen, Users, Shield, Laptop, Heart, Lightbulb } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Student-Centered Learning",
    description: "Interactive, activity-based teaching focused on concept understanding rather than rote memorization.",
    color: "primary",
  },
  {
    icon: Users,
    title: "Expert Faculty",
    description: "Highly qualified and caring teachers committed to teaching with empathy, innovation, and dedication.",
    color: "accent",
  },
  {
    icon: Shield,
    title: "Safe Environment",
    description: "Clean, secure campus with CCTV monitoring, first-aid support, and child-friendly facilities.",
    color: "secondary",
  },
  {
    icon: Laptop,
    title: "Smart Classrooms",
    description: "Digital and technology-based learning with audiovisual aids for enhanced understanding.",
    color: "primary",
  },
  {
    icon: Heart,
    title: "Holistic Development",
    description: "Focus on academic excellence, life skills, sports, arts, and character building.",
    color: "accent",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Creativity",
    description: "Encouraging critical thinking, problem-solving, and creative expression in every student.",
    color: "secondary",
  },
];

const Features = () => {
  return (
    <section className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-4">
            Our Strengths
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="gradient-text">New Horizen?</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide a nurturing environment where every child can thrive academically, socially, and emotionally.
          </p>
        </div>

        {/* Features Grid - Fixed Alignment */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <div
                key={index}
                className="group bg-card rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-primary/30"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 ${
                  feature.color === 'primary' ? 'bg-primary/10' :
                  feature.color === 'accent' ? 'bg-accent/10' :
                  'bg-secondary/10'
                }`}>
                  <Icon className={`w-7 h-7 ${
                    feature.color === 'primary' ? 'text-primary' :
                    feature.color === 'accent' ? 'text-accent' :
                    'text-secondary'
                  }`} />
                </div>
                
                {/* Content */}
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
