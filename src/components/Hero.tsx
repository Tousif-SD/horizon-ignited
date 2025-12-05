import { ArrowRight, GraduationCap, Users, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import graduationImage from "@/assets/graduation.png";
import TypeWriter from "@/components/TypeWriter";
import { useScrollAnimation, useCounter } from "@/hooks/useScrollAnimation";

const StatItem = ({ icon: Icon, value, label, color, isVisible, delay }: {
  icon: typeof GraduationCap;
  value: number;
  label: string;
  color: string;
  isVisible: boolean;
  delay: number;
}) => {
  const count = useCounter(value, 2000, isVisible);
  
  return (
    <div 
      className={`text-center lg:text-left transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${color} flex items-center justify-center mx-auto lg:mx-0 mb-2 magnetic-hover`}>
        <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
      </div>
      <p className="text-2xl sm:text-3xl font-bold text-foreground">{count}+</p>
      <p className="text-xs sm:text-sm text-muted-foreground">{label}</p>
    </div>
  );
};

const Hero = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 md:w-80 h-64 md:h-80 bg-primary/10 rounded-full blur-3xl float-slow" />
        <div className="absolute bottom-20 right-10 w-72 md:w-96 h-72 md:h-96 bg-accent/8 rounded-full blur-3xl float-medium" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom py-24 md:py-32 lg:py-40 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-6 text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-sm font-bold text-primary pulse-glow">
              Since 1999 - Knowledge Is Power
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <TypeWriter 
                words={["Inspiring Minds.", "Building Leaders.", "Creating Futures."]} 
                className="glow-text"
              />
              <br />
              <span className="gradient-text">Shaping Futures.</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
              New Horizen High School is a forward-thinking, co-educational institution committed to nurturing confident, knowledgeable, and responsible young learners.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="shimmer-button bg-gradient-hero hover:opacity-90 text-primary-foreground font-bold px-6 py-6 text-base shadow-lg magnetic-hover">
                Explore Programs
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold px-6 py-6 text-base magnetic-hover">
                Contact Us
              </Button>
            </div>

            {/* Stats with animated counters */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-8 max-w-lg mx-auto lg:mx-0">
              <StatItem 
                icon={GraduationCap} 
                value={25} 
                label="Years Excellence" 
                color="bg-primary/10 text-primary"
                isVisible={isVisible}
                delay={200}
              />
              <StatItem 
                icon={Users} 
                value={500} 
                label="Happy Students" 
                color="bg-accent/10 text-accent"
                isVisible={isVisible}
                delay={400}
              />
              <StatItem 
                icon={Trophy} 
                value={50} 
                label="Awards Won" 
                color="bg-secondary/10 text-secondary"
                isVisible={isVisible}
                delay={600}
              />
            </div>
          </div>

          {/* Right Image - Now visible on all screens */}
          <div className={`relative order-first lg:order-last transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl mx-auto max-w-sm lg:max-w-none gradient-border magnetic-hover">
              <img
                src={graduationImage}
                alt="New Horizen Graduation Ceremony"
                className="w-full h-48 sm:h-64 lg:h-auto object-cover"
                loading="eager"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 w-20 lg:w-32 h-20 lg:h-32 bg-primary/20 rounded-full blur-2xl -z-10 float-slow" />
            <div className="absolute -top-4 -left-4 lg:-top-6 lg:-left-6 w-20 lg:w-32 h-20 lg:h-32 bg-accent/20 rounded-full blur-2xl -z-10 float-medium" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
