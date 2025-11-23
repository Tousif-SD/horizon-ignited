import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-foreground to-foreground/90 text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Logo" className="w-12 h-12 rounded-full" />
              <div>
                <h3 className="font-bold text-lg">New Horizen</h3>
                <p className="text-xs opacity-80">High School</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed mb-4">
              Inspiring minds and shaping futures since 1999. A co-educational institution committed to excellence.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary flex items-center justify-center transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary flex items-center justify-center transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary flex items-center justify-center transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary flex items-center justify-center transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "About Us", "Academics", "Admissions", "Gallery", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(" ", "-")}`} className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-bold text-lg mb-6">Programs</h3>
            <ul className="space-y-3">
              {["Nursery", "Primary School", "Middle School", "High School", "Co-curricular", "Sports"].map((program) => (
                <li key={program}>
                  <a href="#" className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all">
                    {program}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-primary" />
                <span className="text-sm opacity-80">P&T Colony, Venkatapuram, Hyderabad</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-1 flex-shrink-0 text-primary" />
                <span className="text-sm opacity-80">+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-1 flex-shrink-0 text-primary" />
                <span className="text-sm opacity-80">info@newhorizenhigh.edu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-80">
            <p>© 2024 New Horizen High School. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
