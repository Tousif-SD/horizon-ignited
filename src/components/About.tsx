import { Target, Eye, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import classroomImage from "@/assets/classroom.png";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative animate-fade-in-left">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={classroomImage}
                alt="Classroom Activity"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-hero rounded-full blur-3xl opacity-30 -z-10" />
          </div>

          {/* Right - Content */}
          <div className="animate-fade-in-right">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">New Horizen</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              New Horizen High School is an innovative English-medium school offering a well-structured curriculum designed to meet global education standards. We combine academic excellence with values, technology, and real-world learning to prepare students for lifelong success.
            </p>

            <div className="space-y-6">
              <Card className="border-l-4 border-l-primary hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Eye className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Our Vision</h3>
                      <p className="text-muted-foreground">
                        To empower students with knowledge, values, and skills that help them grow into confident, compassionate, and capable leaders of tomorrow.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-accent hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-accent/10">
                      <Target className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                      <p className="text-muted-foreground">
                        Provide high-quality education through modern teaching methods, encourage critical thinking and creativity, foster discipline and moral values, and build a joyful learning environment where every student thrives.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-secondary hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-secondary/10">
                      <Award className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Core Values</h3>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {["Integrity", "Respect", "Excellence", "Innovation", "Responsibility"].map((value) => (
                          <span
                            key={value}
                            className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-semibold"
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
