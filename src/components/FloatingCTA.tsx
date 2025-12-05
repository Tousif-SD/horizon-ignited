import { Phone, X } from "lucide-react";
import { useState, useEffect } from "react";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000); // Show after 3 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleCall = () => {
    window.location.href = "tel:+919876543210"; // Replace with actual number
  };

  if (isDismissed || !isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 animate-fade-in">
      {/* Floating Call Button - Compact on mobile */}
      <div className="relative">
        <button
          onClick={() => setIsDismissed(true)}
          className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-5 h-5 md:w-6 md:h-6 rounded-full bg-foreground/80 text-background flex items-center justify-center hover:bg-foreground transition-colors"
        >
          <X className="w-3 h-3" />
        </button>
        
        {/* Mobile: Icon only | Desktop: Full button */}
        <button
          onClick={handleCall}
          className="flex items-center gap-2 md:gap-3 bg-primary text-primary-foreground p-3 md:px-5 md:py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-bold"
        >
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-foreground/20 flex items-center justify-center animate-pulse">
            <Phone className="w-4 h-4 md:w-5 md:h-5" />
          </div>
          <div className="hidden sm:block text-left pr-2">
            <p className="text-xs opacity-90">Admissions Open</p>
            <p className="text-sm font-bold">Call Now</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default FloatingCTA;
