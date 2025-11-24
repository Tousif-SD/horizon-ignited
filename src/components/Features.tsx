import { BookOpen, Users, Shield, Laptop, Heart, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
    <section className="section-padding bg-gradient-to-b from-muted/20 via-muted/30 to-muted/20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <span className="text-sm font-bold text-primary">Our Strengths</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Why Choose <span className="gradient-text">New Horizen?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We provide a nurturing environment where every child can thrive academically, socially, and emotionally.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="premium-card group border-2 hover:border-primary/40 animate-scale-in glass-dark overflow-visible"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-10 pb-8 px-8 relative">
                  <div className="absolute -top-6 left-8">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br from-${feature.color}/30 to-${feature.color}/10 shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 border border-${feature.color}/20`}>
                      <Icon className={`w-7 h-7 text-${feature.color}`} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-extrabold mb-4 text-foreground group-hover:text-primary transition-colors mt-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
