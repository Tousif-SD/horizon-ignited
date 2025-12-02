import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";
import { Phone, MessageCircle, Clock, MapPin } from "lucide-react";

interface AdmissionDialogProps {
  children: ReactNode;
}

const AdmissionDialog = ({ children }: AdmissionDialogProps) => {
  const phoneNumber = "+919876543210"; // Replace with actual number

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber.replace('+', '')}?text=Hi, I'm interested in admission for my child at New Horizen High School.`, '_blank');
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[420px]">
        <DialogHeader className="text-center">
          <DialogTitle className="text-2xl font-bold">Admissions Open!</DialogTitle>
          <DialogDescription className="text-base">
            Get in touch with us for enrollment details
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 mt-4">
          {/* Call Button */}
          <Button 
            onClick={handleCall}
            size="lg" 
            className="w-full bg-gradient-hero hover:opacity-90 text-primary-foreground font-bold py-6 text-lg gap-3"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </Button>

          {/* WhatsApp Button */}
          <Button 
            onClick={handleWhatsApp}
            size="lg" 
            variant="outline"
            className="w-full border-2 border-secondary text-secondary hover:bg-secondary hover:text-white font-bold py-6 text-lg gap-3"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Us
          </Button>

          {/* Info Cards */}
          <div className="mt-6 space-y-3">
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Clock className="w-4 h-4 text-primary" />
              <span>Mon - Sat: 9:00 AM - 4:00 PM</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              <span>P&T Colony, Venkatapuram</span>
            </div>
          </div>

          <p className="text-xs text-center text-muted-foreground mt-4">
            Nursery to Class 10 • Limited Seats Available
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AdmissionDialog;
