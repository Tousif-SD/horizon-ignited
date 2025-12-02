import { Target, Eye, Award, CheckCircle } from "lucide-react";
import classroomImage from "@/assets/classroom.png";

const coreValues = ["Integrity", "Respect", "Excellence", "Innovation", "Responsibility"];

const About = () => {
  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-4">
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Inspiring Minds. <span className="gradient-text">Shaping Futures.</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            An innovative English-medium school combining academic excellence with values, technology, and real-world learning.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <div className="relative animate-fade-in order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={classroomImage}
                alt="Interactive Learning Environment"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h4 className="text-xl font-bold text-white mb-1">Interactive Learning</h4>
                <p className="text-white/80 text-sm">Modern classrooms designed for engagement</p>
              </div>
            </div>
            {/* Decorative */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl -z-10" />
          </div>

          {/* Right - Vision & Mission */}
          <div className="space-y-6 order-1 lg:order-2">
            {/* Vision Card */}
            <div className="bg-card rounded-2xl p-6 md:p-8 border border-border/50 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Our Vision</h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    To empower students with knowledge, values, and skills that help them grow into confident, compassionate, and capable leaders of tomorrow.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-card rounded-2xl p-6 md:p-8 border border-border/50 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Our Mission</h3>
                  <ul className="space-y-2">
                    {[
                      "High-quality education through modern teaching methods",
                      "Encourage critical thinking and creativity",
                      "Foster discipline and moral values",
                      "Build a joyful learning environment"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm md:text-base">
                        <CheckCircle className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Core Values */}
            <div className="bg-card rounded-2xl p-6 md:p-8 border border-border/50 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Core Values</h3>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {coreValues.map((value) => (
                  <span
                    key={value}
                    className="px-4 py-2 rounded-full bg-muted text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
