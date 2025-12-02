import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 sm:py-16">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-10">
          {/* About */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Logo" className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg" />
              <div>
                <h3 className="font-bold text-base sm:text-lg">New Horizen</h3>
                <p className="text-xs opacity-70">High School</p>
              </div>
            </div>
            <p className="text-sm opacity-70 leading-relaxed mb-4">
              Inspiring minds and shaping futures since 1999.
            </p>
            <div className="flex gap-2">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-lg bg-background/10 hover:bg-primary flex items-center justify-center transition-colors">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-sm sm:text-base mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Academics", "Gallery", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-all">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-bold text-sm sm:text-base mb-4">Programs</h3>
            <ul className="space-y-2">
              {["Nursery", "Primary", "Middle School", "High School"].map((program) => (
                <li key={program}>
                  <span className="text-sm opacity-70">{program}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-bold text-sm sm:text-base mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-primary" />
                <span className="text-sm opacity-70">P&T Colony, Venkatapuram</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 flex-shrink-0 text-primary" />
                <span className="text-sm opacity-70">+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 flex-shrink-0 text-primary" />
                <span className="text-sm opacity-70">info@newhorizenhigh.edu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs sm:text-sm opacity-60">
            <p>© 2024 New Horizen High School. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
