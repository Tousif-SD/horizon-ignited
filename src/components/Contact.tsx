import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-28 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Premium background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in max-w-3xl mx-auto">
          <div className="inline-block px-5 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm font-bold text-primary">Contact Us</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed font-medium">
            Ready to start your child's educational journey? Contact us today
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Premium Contact Form */}
          <Card className="p-10 hover:shadow-2xl transition-all duration-700 border-border/50 animate-fade-in-left bg-card backdrop-blur-xl hover:-translate-y-2">
            <h3 className="text-3xl font-black mb-8 gradient-text">Send us a Message</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-bold mb-3 text-foreground">Your Name</label>
                <input
                  type="text"
                  className="w-full px-5 py-4 rounded-xl border-2 border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 font-medium"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-3 text-foreground">Email Address</label>
                <input
                  type="email"
                  className="w-full px-5 py-4 rounded-xl border-2 border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 font-medium"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-3 text-foreground">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-5 py-4 rounded-xl border-2 border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 font-medium"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-3 text-foreground">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-5 py-4 rounded-xl border-2 border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 resize-none font-medium"
                  placeholder="Tell us about your inquiry..."
                ></textarea>
              </div>
              <Button className="w-full bg-gradient-hero hover:opacity-90 text-white font-bold py-6 text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500">
                Send Message
              </Button>
            </form>
          </Card>

          {/* Premium Contact Information */}
          <div className="space-y-6 animate-fade-in-right">
            <Card className="p-8 hover:shadow-2xl transition-all duration-700 border-border/50 group bg-gradient-to-br from-card via-card to-primary/5 hover:-translate-y-2">
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h4 className="font-black text-xl mb-3 group-hover:gradient-text transition-all duration-500">Our Location</h4>
                  <p className="text-muted-foreground text-base font-medium leading-relaxed">
                    P&T Colony, Venkatapuram<br />
                    Hyderabad, Telangana
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-2xl transition-all duration-700 border-border/50 group bg-gradient-to-br from-card via-card to-accent/5 hover:-translate-y-2">
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <Phone className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h4 className="font-black text-xl mb-3 group-hover:gradient-text transition-all duration-500">Phone</h4>
                  <p className="text-muted-foreground text-base font-medium leading-relaxed">
                    +91 XXXXX XXXXX<br />
                    +91 XXXXX XXXXX
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-2xl transition-all duration-700 border-border/50 group bg-gradient-to-br from-card via-card to-secondary/5 hover:-translate-y-2">
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <Mail className="w-8 h-8 text-secondary" />
                </div>
                <div>
                  <h4 className="font-black text-xl mb-3 group-hover:gradient-text transition-all duration-500">Email</h4>
                  <p className="text-muted-foreground text-base font-medium leading-relaxed">
                    info@newhorizenhighschool.edu<br />
                    admissions@newhorizenhighschool.edu
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-2xl transition-all duration-700 border-border/50 group bg-gradient-to-br from-card via-card to-primary/5 hover:-translate-y-2">
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h4 className="font-black text-xl mb-3 group-hover:gradient-text transition-all duration-500">Office Hours</h4>
                  <p className="text-muted-foreground text-base font-medium leading-relaxed">
                    Monday - Friday: 8:00 AM - 4:00 PM<br />
                    Saturday: 8:00 AM - 12:00 PM
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
