import { BookOpen, Users, Trophy, Lightbulb, Heart, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: BookOpen,
    title: "Student-Centered Learning",
    description: "Modern teaching methods focused on individual growth and development",
    gradient: "from-primary/20 via-primary/10 to-transparent"
  },
  {
    icon: Users,
    title: "Expert Faculty",
    description: "Highly qualified and caring teachers dedicated to student success",
    gradient: "from-accent/20 via-accent/10 to-transparent"
  },
  {
    icon: Trophy,
    title: "Holistic Development",
    description: "Academic excellence combined with sports, arts, and life skills",
    gradient: "from-secondary/20 via-secondary/10 to-transparent"
  },
  {
    icon: Lightbulb,
    title: "Smart Classrooms",
    description: "Technology-enabled learning with modern teaching aids",
    gradient: "from-primary/20 via-primary/10 to-transparent"
  },
  {
    icon: Heart,
    title: "Safe Environment",
    description: "Secure campus with CCTV monitoring and caring staff",
    gradient: "from-accent/20 via-accent/10 to-transparent"
  },
  {
    icon: Globe,
    title: "Global Standards",
    description: "Curriculum aligned with international educational practices",
    gradient: "from-secondary/20 via-secondary/10 to-transparent"
  },
];

const Features = () => {
  return (
    <section id="academics" className="py-28 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in max-w-3xl mx-auto">
          <div className="inline-block px-5 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm font-bold text-primary">Our Strengths</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            Why Choose <span className="gradient-text">Us</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed font-medium">
            Discover what makes New Horizen High School the perfect choice for your child's educational journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-700 border-border/50 hover:border-primary/40 hover:-translate-y-3 animate-scale-in bg-card backdrop-blur-xl overflow-hidden relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                
                <CardContent className="p-8 relative z-10">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    <Icon className="w-10 h-10 text-primary group-hover:text-accent transition-colors duration-500" />
                  </div>
                  <h3 className="text-2xl font-black mb-4 text-foreground group-hover:gradient-text transition-all duration-500">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-base font-medium">
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
