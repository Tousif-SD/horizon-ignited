import { GraduationCap, Users, Trophy, Award } from "lucide-react";
import { useScrollAnimation, useCounter } from "@/hooks/useScrollAnimation";

const stats = [
  { icon: GraduationCap, value: 25, suffix: "+", label: "Years Excellence", color: "primary" },
  { icon: Users, value: 500, suffix: "+", label: "Happy Students", color: "accent" },
  { icon: Trophy, value: 50, suffix: "+", label: "Awards Won", color: "secondary" },
  { icon: Award, value: 30, suffix: "+", label: "Expert Teachers", color: "primary" },
];

const StatCard = ({ stat, isVisible, index }: { stat: typeof stats[0]; isVisible: boolean; index: number }) => {
  const count = useCounter(stat.value, 2000, isVisible);
  const Icon = stat.icon;

  return (
    <div
      className={`relative group text-center p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-xl ${
        isVisible ? 'animate-fade-in' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className={`relative w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${
        stat.color === 'primary' ? 'bg-primary/10' :
        stat.color === 'accent' ? 'bg-accent/10' :
        'bg-secondary/10'
      }`}>
        <Icon className={`w-8 h-8 ${
          stat.color === 'primary' ? 'text-primary' :
          stat.color === 'accent' ? 'text-accent' :
          'text-secondary'
        }`} />
      </div>
      
      <div className="relative">
        <p className="text-4xl md:text-5xl font-bold text-foreground mb-1">
          {count}{stat.suffix}
        </p>
        <p className="text-sm md:text-base text-muted-foreground font-medium">
          {stat.label}
        </p>
      </div>
    </div>
  );
};

const AnimatedCounter = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section className="section-padding bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10" ref={ref}>
        {/* Section Header */}
        <div className={`text-center mb-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-4">
            Our Achievements
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Numbers That <span className="gradient-text">Speak</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Our track record of excellence speaks for itself
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} isVisible={isVisible} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedCounter;
