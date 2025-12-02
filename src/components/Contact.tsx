import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AdmissionDialog from "./AdmissionDialog";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-4">
            Let's Connect
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-6">
            {/* Address */}
            <div className="bg-card rounded-2xl p-5 sm:p-6 border border-border/50 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-base sm:text-lg mb-1">Visit Us</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    P&T Colony, Venkatapuram<br />
                    Hyderabad, Telangana
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-card rounded-2xl p-5 sm:p-6 border border-border/50 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-base sm:text-lg mb-1">Call Us</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    +91 XXXXX XXXXX<br />
                    Mon - Sat: 9:00 AM - 4:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-card rounded-2xl p-5 sm:p-6 border border-border/50 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-base sm:text-lg mb-1">Email Us</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    info@newhorizenhigh.edu<br />
                    admissions@newhorizenhigh.edu
                  </p>
                </div>
              </div>
            </div>

            {/* Admissions CTA */}
            <div className="rounded-2xl bg-gradient-hero text-primary-foreground p-6 sm:p-8 shadow-lg">
              <h3 className="font-bold text-xl sm:text-2xl mb-3">Admissions Open</h3>
              <p className="mb-5 opacity-90 text-sm sm:text-base">
                Join us for the upcoming academic year. Limited seats available for Nursery to High School.
              </p>
              <AdmissionDialog>
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 font-bold w-full sm:w-auto">
                  Apply Now
                </Button>
              </AdmissionDialog>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-6 sm:p-8 border border-border/50 shadow-sm">
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">First Name</label>
                  <Input placeholder="John" className="h-11" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Last Name</label>
                  <Input placeholder="Doe" className="h-11" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Email</label>
                <Input type="email" placeholder="john.doe@example.com" className="h-11" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Phone</label>
                <Input type="tel" placeholder="+91 XXXXX XXXXX" className="h-11" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Message</label>
                <Textarea
                  placeholder="Tell us about your inquiry..."
                  className="min-h-[120px] resize-none"
                />
              </div>

              <Button type="submit" size="lg" className="w-full bg-gradient-hero hover:opacity-90 text-primary-foreground font-bold">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
