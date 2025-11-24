import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <span className="text-sm font-bold text-primary">Let's Connect</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Premium Contact Info */}
          <div className="space-y-6 animate-fade-in-left">
            <Card className="premium-card border-2 border-border/50 hover:border-primary/40 glass-dark">
              <CardContent className="p-8">
                <div className="flex items-start gap-5">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 shadow-lg">
                    <MapPin className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-extrabold text-xl mb-2">Visit Us</h3>
                    <p className="text-muted-foreground text-base leading-relaxed">
                      P&T Colony, Venkatapuram<br />
                      Hyderabad, Telangana
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="premium-card border-2 border-border/50 hover:border-accent/40 glass-dark">
              <CardContent className="p-8">
                <div className="flex items-start gap-5">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 shadow-lg">
                    <Phone className="w-7 h-7 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-extrabold text-xl mb-2">Call Us</h3>
                    <p className="text-muted-foreground text-base leading-relaxed">
                      +91 XXXXX XXXXX<br />
                      Mon - Sat: 9:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="premium-card border-2 border-border/50 hover:border-secondary/40 glass-dark">
              <CardContent className="p-8">
                <div className="flex items-start gap-5">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/5 shadow-lg">
                    <Mail className="w-7 h-7 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-extrabold text-xl mb-2">Email Us</h3>
                    <p className="text-muted-foreground text-base leading-relaxed">
                      info@newhorizenhigh.edu<br />
                      admissions@newhorizenhigh.edu
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="p-10 rounded-3xl bg-gradient-hero text-primary-foreground shadow-2xl hover:shadow-[0_30px_90px_rgba(0,0,0,0.2)] transition-all duration-500 hover:scale-[1.02] relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <h3 className="font-extrabold text-3xl mb-4">Admissions Open</h3>
                <p className="mb-8 opacity-95 text-lg leading-relaxed">
                  Join us for the upcoming academic year. Limited seats available for Nursery to High School.
                </p>
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 font-bold px-8 py-6 text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  Apply Now
                </Button>
              </div>
            </div>
          </div>

          {/* Premium Contact Form */}
          <Card className="premium-card border-2 border-border/50 animate-fade-in-right glass-dark overflow-hidden">
            <CardContent className="p-10">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold mb-3 text-foreground">First Name</label>
                    <Input placeholder="John" className="border-2 h-12 focus:border-primary transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-3 text-foreground">Last Name</label>
                    <Input placeholder="Doe" className="border-2 h-12 focus:border-primary transition-colors" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-3 text-foreground">Email</label>
                  <Input type="email" placeholder="john.doe@example.com" className="border-2 h-12 focus:border-primary transition-colors" />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-3 text-foreground">Phone</label>
                  <Input type="tel" placeholder="+91 XXXXX XXXXX" className="border-2 h-12 focus:border-primary transition-colors" />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-3 text-foreground">Message</label>
                  <Textarea
                    placeholder="Tell us about your inquiry..."
                    className="border-2 min-h-[150px] focus:border-primary transition-colors resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-gradient-hero hover:opacity-90 hover:scale-105 text-primary-foreground font-bold py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
