import { ArrowRight, GraduationCap, Users, Trophy, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import studentsImage from "@/assets/students-group.png";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="w-4 h-4 text-primary animate-glow" />
              <span className="text-sm font-semibold text-primary">Since 1999 - Knowledge Is Power</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              Inspiring Minds.
              <br />
              <span className="gradient-text">Shaping Futures.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
              New Horizen High School is a forward-thinking, co-educational institution committed to nurturing confident, knowledgeable, and responsible young learners.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button size="lg" className="bg-gradient-hero hover:opacity-90 text-primary-foreground font-semibold group">
                Explore Programs
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold">
                Contact Us
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="group">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <p className="text-2xl font-bold text-foreground">25+</p>
                <p className="text-sm text-muted-foreground">Years Excellence</p>
              </div>

              <div className="group">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <Users className="w-5 h-5 text-accent" />
                  </div>
                </div>
                <p className="text-2xl font-bold text-foreground">500+</p>
                <p className="text-sm text-muted-foreground">Happy Students</p>
              </div>

              <div className="group">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-2 rounded-lg bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                    <Trophy className="w-5 h-5 text-secondary" />
                  </div>
                </div>
                <p className="text-2xl font-bold text-foreground">50+</p>
                <p className="text-sm text-muted-foreground">Awards Won</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in-right">
            <div className="relative z-10">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-white/50 rotate-2 hover:rotate-0 transition-transform duration-500">
                <img
                  src={studentsImage}
                  alt="New Horizen Students"
                  className="w-full h-auto"
                />
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-gradient-hero rounded-full blur-2xl opacity-50 -z-10" />
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-accent rounded-full blur-2xl opacity-50 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
