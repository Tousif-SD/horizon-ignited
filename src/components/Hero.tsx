import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Award } from "lucide-react";
import classroom from "@/assets/classroom.png";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-primary/5 to-accent/5">
      {/* Premium animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float opacity-60"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl animate-float opacity-60" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-3xl animate-float opacity-60" style={{ animationDelay: '2s' }}></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in-left">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30 backdrop-blur-sm animate-pulse-slow">
              <Sparkles className="w-4 h-4 text-primary animate-glow" />
              <span className="text-sm font-bold text-primary tracking-wide">Welcome to Excellence</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-shadow">
              New Horizen{" "}
              <span className="gradient-text block mt-2">High School</span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-foreground/90 font-semibold max-w-2xl leading-relaxed">
              Inspiring Minds. Shaping Futures.
            </p>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl font-medium">
              A forward-thinking, co-educational institution nurturing confident, knowledgeable, and responsible young learners since 1999.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-6">
              <Button size="lg" className="bg-gradient-hero hover:opacity-90 text-white font-bold text-lg px-10 py-7 shadow-xl hover:shadow-2xl transition-all duration-500 group hover:scale-105">
                Admissions Open
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-10 py-7 font-bold border-2 border-primary/30 hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:scale-105">
                Explore Campus
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-10 max-w-xl mx-auto lg:mx-0">
              <div className="text-center lg:text-left p-4 rounded-xl bg-gradient-to-br from-primary/5 to-transparent border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105">
                <div className="text-4xl md:text-5xl font-black gradient-text mb-1">25+</div>
                <div className="text-xs md:text-sm text-muted-foreground font-semibold">Years of Excellence</div>
              </div>
              <div className="text-center lg:text-left p-4 rounded-xl bg-gradient-to-br from-accent/5 to-transparent border border-accent/10 hover:border-accent/30 transition-all duration-300 hover:scale-105">
                <div className="text-4xl md:text-5xl font-black gradient-text mb-1">500+</div>
                <div className="text-xs md:text-sm text-muted-foreground font-semibold">Happy Students</div>
              </div>
              <div className="text-center lg:text-left p-4 rounded-xl bg-gradient-to-br from-secondary/5 to-transparent border border-secondary/10 hover:border-secondary/30 transition-all duration-300 hover:scale-105">
                <div className="text-4xl md:text-5xl font-black gradient-text mb-1">50+</div>
                <div className="text-xs md:text-sm text-muted-foreground font-semibold">Expert Faculty</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative animate-fade-in-right">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)] transition-all duration-700 hover:-translate-y-3 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <img
                src={classroom}
                alt="Modern Classroom at New Horizen High School"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            </div>
            
            {/* Premium floating badge */}
            <div className="absolute -bottom-8 -left-8 bg-card p-7 rounded-2xl shadow-2xl border border-border/50 backdrop-blur-xl animate-float hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-hero flex items-center justify-center shadow-lg">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="font-black text-xl text-foreground">Co-Educational</div>
                  <div className="text-sm text-muted-foreground font-semibold">English Medium</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
