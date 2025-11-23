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
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="gradient-text">New Horizen?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide a nurturing environment where every child can thrive academically, socially, and emotionally.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-primary/50 animate-scale-in bg-card/50 backdrop-blur-sm"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-8 pb-6 px-6">
                  <div
                    className={`inline-flex p-4 rounded-2xl mb-6 bg-${feature.color}/10 group-hover:bg-${feature.color}/20 transition-all duration-300 group-hover:scale-110`}
                  >
                    <Icon className={`w-8 h-8 text-${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
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
