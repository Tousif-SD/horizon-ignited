import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Academics", href: "#academics" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled
          ? "glass-dark shadow-xl py-3 backdrop-blur-xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Premium Logo */}
          <a href="#home" className="flex items-center gap-4 group">
            <div className="w-16 h-16 rounded-2xl overflow-hidden ring-4 ring-primary/20 group-hover:ring-primary/60 transition-all duration-500 shadow-lg group-hover:shadow-xl group-hover:scale-110 group-hover:rotate-3">
              <img src={logo} alt="New Horizen High School" className="w-full h-full object-cover" />
            </div>
            <div className="hidden md:block">
              <h1 className="text-xl font-extrabold text-foreground leading-tight group-hover:text-primary transition-colors duration-300">
                New Horizen High School
              </h1>
              <p className="text-xs text-muted-foreground font-bold tracking-wide">Since 1999 - Knowledge Is Power</p>
            </div>
          </a>

          {/* Premium Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative text-sm font-bold text-foreground hover:text-primary transition-all duration-500 after:content-[''] after:absolute after:w-0 after:h-1 after:bg-gradient-hero after:left-0 after:-bottom-2 after:transition-all after:duration-500 hover:after:w-full after:rounded-full"
              >
                {item.label}
              </a>
            ))}
            <Button size="lg" className="bg-gradient-hero hover:opacity-90 hover:scale-110 text-primary-foreground font-bold px-6 shadow-lg hover:shadow-xl transition-all duration-500">
              Admissions Open
            </Button>
          </nav>

          {/* Premium Mobile Menu Button */}
          <button
            className="lg:hidden p-3 rounded-xl hover:bg-muted/50 transition-all duration-300 hover:scale-110"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={26} className="text-primary" /> : <Menu size={26} />}
          </button>
        </div>

        {/* Premium Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 mt-4 glass-dark rounded-2xl shadow-2xl mx-6 p-8 animate-fade-in border-2 border-border/50">
            <nav className="flex flex-col gap-5">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-primary font-bold transition-all duration-300 py-3 px-4 rounded-xl hover:bg-primary/10 text-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button className="bg-gradient-hero hover:opacity-90 hover:scale-105 text-primary-foreground font-bold py-6 text-lg shadow-lg transition-all duration-300">
                Admissions Open
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
