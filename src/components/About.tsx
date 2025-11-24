import { Target, Eye, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import classroomImage from "@/assets/classroom.png";

const About = () => {
  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-hero rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-accent rounded-full blur-3xl opacity-20" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Premium Image */}
          <div className="relative animate-fade-in-left group">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_40px_100px_rgba(0,0,0,0.2)] transition-all duration-700">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
              <img
                src={classroomImage}
                alt="Classroom Activity"
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            </div>
            <div className="absolute -bottom-8 -right-8 w-56 h-56 bg-gradient-hero rounded-full blur-3xl opacity-40 -z-10 animate-pulse" />
            <div className="absolute -top-8 -left-8 w-48 h-48 bg-secondary/30 rounded-full blur-2xl -z-10 animate-float" />
          </div>

          {/* Right - Premium Content */}
          <div className="animate-fade-in-right space-y-8">
            <div>
              <div className="inline-block mb-4 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                <span className="text-sm font-bold text-accent">About Us</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                About <span className="gradient-text">New Horizen</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                New Horizen High School is an innovative English-medium school offering a well-structured curriculum designed to meet global education standards. We combine academic excellence with values, technology, and real-world learning to prepare students for lifelong success.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="premium-card border-l-4 border-l-primary glass-dark group">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-md">
                      <Eye className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-extrabold mb-3 group-hover:text-primary transition-colors">Our Vision</h3>
                      <p className="text-muted-foreground leading-relaxed text-base">
                        To empower students with knowledge, values, and skills that help them grow into confident, compassionate, and capable leaders of tomorrow.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="premium-card border-l-4 border-l-accent glass-dark group">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-md">
                      <Target className="w-7 h-7 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-extrabold mb-3 group-hover:text-accent transition-colors">Our Mission</h3>
                      <p className="text-muted-foreground leading-relaxed text-base">
                        Provide high-quality education through modern teaching methods, encourage critical thinking and creativity, foster discipline and moral values, and build a joyful learning environment where every student thrives.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="premium-card border-l-4 border-l-secondary glass-dark group">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-md">
                      <Award className="w-7 h-7 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-extrabold mb-3 group-hover:text-secondary transition-colors">Core Values</h3>
                      <div className="flex flex-wrap gap-3 mt-4">
                        {["Integrity", "Respect", "Excellence", "Innovation", "Responsibility"].map((value) => (
                          <span
                            key={value}
                            className="px-4 py-2 rounded-full bg-gradient-to-r from-secondary/20 to-secondary/10 text-secondary text-sm font-bold border border-secondary/20 hover:scale-105 transition-transform duration-300 cursor-default"
                          >
                            {value}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
