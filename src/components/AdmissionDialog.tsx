import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ReactNode } from "react";
import { useToast } from "@/hooks/use-toast";

interface AdmissionDialogProps {
  children: ReactNode;
}

const AdmissionDialog = ({ children }: AdmissionDialogProps) => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "We'll contact you within 24 hours.",
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-extrabold gradient-text">Admission Enquiry</DialogTitle>
          <DialogDescription className="text-base">
            Fill in the details below and we'll get back to you soon.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-5 mt-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="student-name" className="font-semibold">Student Name *</Label>
              <Input id="student-name" required className="border-2" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dob" className="font-semibold">Date of Birth *</Label>
              <Input id="dob" type="date" required className="border-2" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="grade" className="font-semibold">Class/Grade Applying For *</Label>
            <Select required>
              <SelectTrigger className="border-2">
                <SelectValue placeholder="Select grade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="nursery">Nursery</SelectItem>
                <SelectItem value="lkg">LKG</SelectItem>
                <SelectItem value="ukg">UKG</SelectItem>
                <SelectItem value="1">Class 1</SelectItem>
                <SelectItem value="2">Class 2</SelectItem>
                <SelectItem value="3">Class 3</SelectItem>
                <SelectItem value="4">Class 4</SelectItem>
                <SelectItem value="5">Class 5</SelectItem>
                <SelectItem value="6">Class 6</SelectItem>
                <SelectItem value="7">Class 7</SelectItem>
                <SelectItem value="8">Class 8</SelectItem>
                <SelectItem value="9">Class 9</SelectItem>
                <SelectItem value="10">Class 10</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="parent-name" className="font-semibold">Parent/Guardian Name *</Label>
              <Input id="parent-name" required className="border-2" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="font-semibold">Contact Number *</Label>
              <Input id="phone" type="tel" required className="border-2" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="font-semibold">Email Address *</Label>
            <Input id="email" type="email" required className="border-2" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address" className="font-semibold">Address</Label>
            <Input id="address" className="border-2" />
          </div>

          <Button type="submit" size="lg" className="w-full bg-gradient-hero hover:opacity-90 text-primary-foreground font-bold py-6 text-lg">
            Submit Application
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AdmissionDialog;
