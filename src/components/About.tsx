import { Target, Eye, CheckCircle, Shield, Award, Users, Lightbulb, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "Building character through honesty and ethical behavior"
  },
  {
    icon: Heart,
    title: "Respect",
    description: "Valuing diversity and treating everyone with dignity"
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Striving for the highest standards in everything we do"
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Embracing creativity and new ideas"
  },
  {
    icon: Users,
    title: "Responsibility",
    description: "Taking ownership of our actions and commitments"
  }
];

const About = () => {
  return (
    <section id="about" className="py-28 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in max-w-3xl mx-auto">
          <div className="inline-block px-5 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <span className="text-sm font-bold text-accent">Our Story</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            About <span className="gradient-text">Us</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed font-medium">
            Building tomorrow's leaders through excellence in education since 1999
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 mb-20">
          <Card className="p-10 hover:shadow-2xl transition-all duration-700 border-border/50 animate-fade-in-left bg-gradient-to-br from-card via-card to-primary/5 hover:-translate-y-2 group">
            <div className="flex items-start gap-6 mb-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-hero flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-black mb-4 group-hover:gradient-text transition-all duration-500">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed text-lg font-medium">
                  To empower students with knowledge, values, and skills that help them grow into confident, 
                  compassionate, and capable leaders of tomorrow.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-10 hover:shadow-2xl transition-all duration-700 border-border/50 animate-fade-in-right bg-gradient-to-br from-card via-card to-accent/5 hover:-translate-y-2 group">
            <div className="flex items-start gap-6 mb-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-accent flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-black mb-4 group-hover:gradient-text transition-all duration-500">Our Mission</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-base font-medium">Provide high-quality education through modern teaching methods</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-base font-medium">Encourage critical thinking, creativity, and problem-solving</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-base font-medium">Foster discipline, respect, and moral values</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-base font-medium">Build a joyful learning environment where every student thrives</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-12 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 border-border/50 hover:shadow-2xl transition-all duration-700 animate-scale-in relative overflow-hidden">
          {/* Decorative gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700"></div>
          
          <h3 className="text-4xl md:text-5xl font-black mb-12 text-center relative z-10">
            Our Core <span className="gradient-text">Values</span>
          </h3>
          <div className="grid md:grid-cols-5 gap-8 relative z-10">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="text-center group hover:-translate-y-3 transition-all duration-500"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-20 h-20 mx-auto mb-5 rounded-2xl bg-gradient-hero flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="font-black text-xl mb-3 group-hover:gradient-text transition-all duration-500">{value.title}</h4>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
