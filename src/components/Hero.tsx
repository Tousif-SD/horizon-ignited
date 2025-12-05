import { ArrowRight, GraduationCap, Users, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import graduationImage from "@/assets/graduation.png";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 md:w-80 h-64 md:h-80 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-72 md:w-96 h-72 md:h-96 bg-accent/8 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container-custom py-24 md:py-32 lg:py-40 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in space-y-6 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-sm font-bold text-primary">
              Since 1999 - Knowledge Is Power
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Inspiring Minds.
              <br />
              <span className="gradient-text">Shaping Futures.</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
              New Horizen High School is a forward-thinking, co-educational institution committed to nurturing confident, knowledgeable, and responsible young learners.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-gradient-hero hover:opacity-90 text-primary-foreground font-bold px-6 py-6 text-base shadow-lg">
                Explore Programs
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold px-6 py-6 text-base">
                Contact Us
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-8 max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto lg:mx-0 mb-2">
                  <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <p className="text-2xl sm:text-3xl font-bold text-foreground">25+</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Years Excellence</p>
              </div>

              <div className="text-center lg:text-left">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto lg:mx-0 mb-2">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                </div>
                <p className="text-2xl sm:text-3xl font-bold text-foreground">500+</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Happy Students</p>
              </div>

              <div className="text-center lg:text-left">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto lg:mx-0 mb-2">
                  <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />
                </div>
                <p className="text-2xl sm:text-3xl font-bold text-foreground">50+</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Awards Won</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={graduationImage}
                alt="New Horizen Graduation Ceremony"
                className="w-full h-auto object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
