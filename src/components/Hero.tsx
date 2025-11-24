import { ArrowRight, GraduationCap, Users, Trophy, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import studentsImage from "@/assets/students-group.png";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Premium Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-accent/8 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-40 right-1/4 w-60 h-60 bg-primary/5 rounded-full blur-2xl animate-float" style={{ animationDelay: "0.5s" }} />
      </div>

      <div className="container-custom py-32 md:py-40 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-left space-y-8">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-primary/30 mb-2 hover:scale-105 transition-transform duration-300">
              <Sparkles className="w-4 h-4 text-primary animate-glow" />
              <span className="text-sm font-bold text-primary tracking-wide">Since 1999 - Knowledge Is Power</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-[1.1] tracking-tight">
              Inspiring Minds.
              <br />
              <span className="gradient-text inline-block animate-slide-up" style={{ animationDelay: "0.2s" }}>Shaping Futures.</span>
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl leading-relaxed font-light">
              New Horizen High School is a forward-thinking, co-educational institution committed to nurturing confident, knowledgeable, and responsible young learners.
            </p>

            <div className="flex flex-wrap gap-4 mb-16">
              <Button size="lg" className="bg-gradient-hero hover:opacity-90 hover:scale-105 text-primary-foreground font-bold group px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                Explore Programs
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold px-8 py-6 text-lg hover:scale-105 transition-all duration-300 hover:shadow-lg">
                Contact Us
              </Button>
            </div>

            {/* Premium Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl">
              <div className="group cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-md">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <p className="text-3xl md:text-4xl font-extrabold text-foreground mb-1 group-hover:text-primary transition-colors">25+</p>
                <p className="text-sm font-medium text-muted-foreground">Years Excellence</p>
              </div>

              <div className="group cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 group-hover:from-accent/30 group-hover:to-accent/10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-md">
                    <Users className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <p className="text-3xl md:text-4xl font-extrabold text-foreground mb-1 group-hover:text-accent transition-colors">500+</p>
                <p className="text-sm font-medium text-muted-foreground">Happy Students</p>
              </div>

              <div className="group cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/5 group-hover:from-secondary/30 group-hover:to-secondary/10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-md">
                    <Trophy className="w-6 h-6 text-secondary" />
                  </div>
                </div>
                <p className="text-3xl md:text-4xl font-extrabold text-foreground mb-1 group-hover:text-secondary transition-colors">50+</p>
                <p className="text-sm font-medium text-muted-foreground">Awards Won</p>
              </div>
            </div>
          </div>

          {/* Premium Right Image */}
          <div className="relative animate-fade-in-right">
            <div className="relative z-10 group">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/40 rotate-1 hover:rotate-0 transition-all duration-700 hover:shadow-[0_30px_90px_rgba(0,0,0,0.15)] hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
                <img
                  src={studentsImage}
                  alt="New Horizen Students"
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            {/* Premium Decorative elements */}
            <div className="absolute -top-8 -right-8 w-48 h-48 bg-gradient-hero rounded-full blur-3xl opacity-40 -z-10 animate-pulse" />
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-gradient-accent rounded-full blur-3xl opacity-40 -z-10 animate-pulse" style={{ animationDelay: "1s" }} />
            <div className="absolute top-1/2 right-1/2 w-32 h-32 bg-secondary/20 rounded-full blur-2xl -z-10 animate-float" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
