import { Target, Eye, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import classroomImage from "@/assets/classroom.png";

const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-background via-muted/10 to-background relative overflow-hidden">
      {/* Premium Decorative Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-0 w-[700px] h-[700px] bg-gradient-hero rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-gradient-accent rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block mb-6 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border-2 border-primary/20 backdrop-blur-sm">
            <span className="text-sm font-extrabold gradient-text uppercase tracking-wider">About New Horizen</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">
            Inspiring Minds. <span className="gradient-text">Shaping Futures.</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            An innovative English-medium school combining academic excellence with values, technology, and real-world learning to prepare students for lifelong success.
          </p>
        </div>

        {/* Premium Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
          {/* Left - Vision & Mission Cards */}
          <div className="space-y-8 animate-fade-in-left">
            <Card className="premium-card border-2 border-primary/20 glass-dark group hover:border-primary/50 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-hero" />
              <CardContent className="p-10">
                <div className="flex items-start gap-6">
                  <div className="p-5 rounded-3xl bg-gradient-to-br from-primary/30 to-primary/10 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 shadow-xl border border-primary/30">
                    <Eye className="w-10 h-10 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-extrabold mb-4 group-hover:text-primary transition-colors">Our Vision</h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      To empower students with knowledge, values, and skills that help them grow into confident, compassionate, and capable leaders of tomorrow.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="premium-card border-2 border-accent/20 glass-dark group hover:border-accent/50 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-accent" />
              <CardContent className="p-10">
                <div className="flex items-start gap-6">
                  <div className="p-5 rounded-3xl bg-gradient-to-br from-accent/30 to-accent/10 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 shadow-xl border border-accent/30">
                    <Target className="w-10 h-10 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-extrabold mb-4 group-hover:text-accent transition-colors">Our Mission</h3>
                    <ul className="space-y-3 text-muted-foreground text-lg">
                      <li className="flex items-start gap-3">
                        <span className="mt-2 w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                        <span>Provide high-quality education through modern teaching methods</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-2 w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                        <span>Encourage critical thinking and creativity</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-2 w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                        <span>Foster discipline and moral values</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-2 w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                        <span>Build a joyful learning environment where every student thrives</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right - Core Values & Image */}
          <div className="space-y-8 animate-fade-in-right">
            <Card className="premium-card border-2 border-secondary/20 glass-dark group hover:border-secondary/50 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary via-primary to-accent" />
              <CardContent className="p-10">
                <div className="flex items-start gap-6 mb-8">
                  <div className="p-5 rounded-3xl bg-gradient-to-br from-secondary/30 to-secondary/10 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 shadow-xl border border-secondary/30">
                    <Award className="w-10 h-10 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-extrabold mb-2 group-hover:text-secondary transition-colors">Core Values</h3>
                    <p className="text-muted-foreground text-lg">The principles that guide our community</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {["Integrity", "Respect", "Excellence", "Innovation", "Responsibility"].map((value, index) => (
                    <div
                      key={value}
                      className="px-5 py-4 rounded-2xl bg-gradient-to-br from-secondary/20 via-primary/10 to-accent/10 border-2 border-secondary/20 hover:border-secondary/40 hover:scale-105 transition-all duration-300 cursor-default text-center backdrop-blur-sm group/value"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <span className="text-base font-extrabold text-foreground group-hover/value:text-secondary transition-colors">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="relative animate-scale-in group/img">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_40px_100px_rgba(0,0,0,0.3)] transition-all duration-700 border-4 border-border/20 hover:border-primary/30">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-accent/30 opacity-0 group-hover/img:opacity-100 transition-opacity duration-700 z-10" />
                <img
                  src={classroomImage}
                  alt="Interactive Learning Environment"
                  className="w-full h-auto transform group-hover/img:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                  <h4 className="text-2xl font-extrabold text-white mb-2">Interactive Learning</h4>
                  <p className="text-white/90 text-lg">Modern classrooms designed for engagement</p>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-gradient-hero rounded-full blur-3xl opacity-40 -z-10 animate-pulse" />
              <div className="absolute -top-10 -left-10 w-56 h-56 bg-secondary/40 rounded-full blur-3xl -z-10 animate-float" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
