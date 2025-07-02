import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Users, Clock, Coffee, Phone, Mail, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ReservationPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReservationPopup = ({ isOpen, onClose }: ReservationPopupProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    specialRequests: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.time || !formData.guests) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Simulate reservation submission
    toast({
      title: "Reservation Confirmed! ☕",
      description: `Thank you ${formData.name}! Your table for ${formData.guests} on ${formData.date} at ${formData.time} has been reserved.`,
    });

    // Reset form and close popup
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "",
      specialRequests: ""
    });
    onClose();
  };

  const timeSlots = [
    "8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
    "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM",
    "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM",
    "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM"
  ];

  const guestOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10+"];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md bg-gradient-to-br from-cream-beige/95 to-amber-50/95 backdrop-blur-sm border-amber-300/50 shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Coffee Bean Decorations */}
        <div className="absolute top-4 right-4 w-3 h-4 bg-amber-400/30 rounded-full transform rotate-12"></div>
        <div className="absolute bottom-4 left-4 w-2 h-3 bg-caramel-orange/20 rounded-full transform -rotate-45"></div>
        
        <DialogHeader className="text-center">
          <div className="flex justify-center items-center mb-4">
            <div className="bg-gradient-to-r from-caramel-orange to-amber-600 rounded-full p-3 shadow-lg">
              <Calendar className="h-6 w-6 text-white" />
            </div>
          </div>
          <DialogTitle className="text-coffee-brown text-xl font-bold flex items-center justify-center">
            <Coffee className="h-5 w-5 mr-2 text-caramel-orange" />
            Reserve Your Table
          </DialogTitle>
          <p className="text-espresso-black/80 text-sm mt-2">
            Book your perfect coffee experience at Lion's Café ☕
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-6">
          {/* Personal Information */}
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-coffee-brown font-medium flex items-center">
                <User className="h-4 w-4 mr-1 text-caramel-orange" />
                Full Name *
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="border-amber-300 focus:border-caramel-orange focus:ring-caramel-orange bg-white/80 backdrop-blur-sm"
                placeholder="Your full name"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-coffee-brown font-medium flex items-center">
                <Mail className="h-4 w-4 mr-1 text-caramel-orange" />
                Email *
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="border-amber-300 focus:border-caramel-orange focus:ring-caramel-orange bg-white/80 backdrop-blur-sm"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-coffee-brown font-medium flex items-center">
                <Phone className="h-4 w-4 mr-1 text-caramel-orange" />
                Phone Number *
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="border-amber-300 focus:border-caramel-orange focus:ring-caramel-orange bg-white/80 backdrop-blur-sm"
                placeholder="(555) 123-4567"
                required
              />
            </div>
          </div>

          {/* Reservation Details */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date" className="text-coffee-brown font-medium flex items-center">
                <Calendar className="h-4 w-4 mr-1 text-caramel-orange" />
                Date *
              </Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => handleInputChange("date", e.target.value)}
                className="border-amber-300 focus:border-caramel-orange focus:ring-caramel-orange bg-white/80 backdrop-blur-sm"
                min={new Date().toISOString().split('T')[0]}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="time" className="text-coffee-brown font-medium flex items-center">
                <Clock className="h-4 w-4 mr-1 text-caramel-orange" />
                Time *
              </Label>
              <Select value={formData.time} onValueChange={(value) => handleInputChange("time", value)}>
                <SelectTrigger className="border-amber-300 focus:border-caramel-orange bg-white/80 backdrop-blur-sm">
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent className="bg-white/95 backdrop-blur-sm border-amber-300/50">
                  {timeSlots.map((time) => (
                    <SelectItem key={time} value={time}>
                      {time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="guests" className="text-coffee-brown font-medium flex items-center">
              <Users className="h-4 w-4 mr-1 text-caramel-orange" />
              Number of Guests *
            </Label>
            <Select value={formData.guests} onValueChange={(value) => handleInputChange("guests", value)}>
              <SelectTrigger className="border-amber-300 focus:border-caramel-orange bg-white/80 backdrop-blur-sm">
                <SelectValue placeholder="Select party size" />
              </SelectTrigger>
              <SelectContent className="bg-white/95 backdrop-blur-sm border-amber-300/50">
                {guestOptions.map((guests) => (
                  <SelectItem key={guests} value={guests}>
                    {guests} {guests === "1" ? "Guest" : "Guests"}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="specialRequests" className="text-coffee-brown font-medium">
              Special Requests (Optional)
            </Label>
            <Textarea
              id="specialRequests"
              value={formData.specialRequests}
              onChange={(e) => handleInputChange("specialRequests", e.target.value)}
              className="border-amber-300 focus:border-caramel-orange focus:ring-caramel-orange bg-white/80 backdrop-blur-sm resize-none"
              placeholder="Any special dietary needs, seating preferences, or celebration details..."
              rows={3}
            />
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 border-amber-300 text-coffee-brown hover:bg-amber-100"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-gradient-to-r from-coffee-brown to-amber-800 hover:from-coffee-brown/90 hover:to-amber-800/90 text-cream-beige shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Calendar className="h-4 w-4 mr-2" />
              Reserve Table
            </Button>
          </div>
        </form>

        {/* Footer Info */}
        <div className="bg-amber-100/50 rounded-lg p-3 mt-4 border border-amber-200/50">
          <div className="flex items-center justify-center space-x-2 text-coffee-brown/80">
            <Coffee className="h-4 w-4 text-caramel-orange" />
            <p className="text-xs text-center">
              We'll confirm your reservation within 30 minutes via email or phone
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ReservationPopup;
