import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/shared/BackToTop";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Users, Clock, Heart, Award, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { volunteerService } from "@/services/api";

const Volunteer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    causes: [] as string[],
    availability: [] as string[],
    motivation: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { toast } = useToast();

  const causes = [
    { id: "education", label: "Education Programs" },
    { id: "plantation", label: "Tree Planting" },
    { id: "slum-development", label: "Community Development" },
    { id: "events", label: "Event Organization" },
    { id: "fundraising", label: "Fundraising" },
    { id: "social-media", label: "Social Media & Marketing" }
  ];

  const daysOfWeek = [
    { id: "monday", label: "Monday" },
    { id: "tuesday", label: "Tuesday" },
    { id: "wednesday", label: "Wednesday" },
    { id: "thursday", label: "Thursday" },
    { id: "friday", label: "Friday" },
    { id: "saturday", label: "Saturday" },
    { id: "sunday", label: "Sunday" }
  ];

  const opportunities = [
    {
      title: "Teaching Assistant",
      description: "Help children with their homework and reading in our education centers.",
      time: "2-4 hours/week",
      icon: Users
    },
    {
      title: "Tree Planting Coordinator",
      description: "Lead community tree planting events and environmental awareness programs.",
      time: "4-6 hours/week",
      icon: Heart
    },
    {
      title: "Community Outreach",
      description: "Visit communities to assess needs and build relationships with local leaders.",
      time: "3-5 hours/week",
      icon: Clock
    },
    {
      title: "Event Volunteer",
      description: "Help organize and run fundraising events and awareness campaigns.",
      time: "Variable",
      icon: Award
    }
  ];

  const handleCauseChange = (causeId: string, checked: boolean) => {
    if (checked) {
      setFormData({ ...formData, causes: [...formData.causes, causeId] });
    } else {
      setFormData({ ...formData, causes: formData.causes.filter(id => id !== causeId) });
    }
  };

  const handleAvailabilityChange = (day: string, checked: boolean) => {
    if (checked) {
      setFormData({ ...formData, availability: [...formData.availability, day] });
    } else {
      setFormData({ ...formData, availability: formData.availability.filter(d => d !== day) });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || formData.causes.length === 0) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields and select at least one cause.",
        variant: "destructive"
      });
      return;
    }

    try {
      setIsSubmitting(true);
      
      // Map the form values to the API expected format
      const volunteerData = {
        full_name: formData.name,
        email: formData.email,
        phone_number: formData.phone,
        preferred_causes: formData.causes,
        availability: formData.availability,
        motivation: formData.motivation || null
      };
      
      await volunteerService.submitApplication(volunteerData);
      
      toast({
        title: "Thank You!",
        description: "Your volunteer application has been submitted. We'll contact you soon with next steps.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        causes: [],
        availability: [],
        motivation: ""
      });
    } catch (error) {
      console.error('Volunteer application submission error:', error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your application. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <Users className="h-8 w-8 text-white" />
          </div>
          <h1 className="font-poppins font-bold text-4xl md:text-6xl text-foreground mb-6">
            Become a Volunteer
          </h1>
          <p className="font-opensans text-xl text-muted-foreground max-w-3xl mx-auto">
            Join our community of passionate volunteers and help us create positive change. 
            Your time and skills can make a real difference in people's lives.
          </p>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-foreground mb-4">
              Volunteer Opportunities
            </h2>
            <p className="font-opensans text-lg text-muted-foreground">
              Find the perfect way to contribute your skills and passion to our mission.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {opportunities.map((opportunity, index) => (
              <Card key={index} className="shadow-card hover:shadow-hero transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <opportunity.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-poppins font-semibold text-lg text-foreground mb-2">
                    {opportunity.title}
                  </h3>
                  <p className="font-opensans text-sm text-muted-foreground mb-3">
                    {opportunity.description}
                  </p>
                  <div className="text-xs text-primary font-medium">
                    Time commitment: {opportunity.time}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Application Form */}
      <section className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="font-poppins text-2xl text-foreground text-center">
                Volunteer Application
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your full name"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter your email"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Enter your phone number"
                      className="mt-1"
                    />
                  </div>
                </div>

                {/* Preferred Causes */}
                <div>
                  <Label>Preferred Causes * (Select all that interest you)</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                    {causes.map((cause) => (
                      <div key={cause.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={cause.id}
                          checked={formData.causes.includes(cause.id)}
                          onCheckedChange={(checked) => handleCauseChange(cause.id, checked as boolean)}
                        />
                        <Label htmlFor={cause.id} className="cursor-pointer">
                          {cause.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <div>
                  <Label>Availability (Select days when you're available)</Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3">
                    {daysOfWeek.map((day) => (
                      <div key={day.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={day.id}
                          checked={formData.availability.includes(day.id)}
                          onCheckedChange={(checked) => handleAvailabilityChange(day.id, checked as boolean)}
                        />
                        <Label htmlFor={day.id} className="cursor-pointer">
                          {day.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Motivation */}
                <div>
                  <Label htmlFor="motivation">Why do you want to volunteer with us?</Label>
                  <Textarea
                    id="motivation"
                    value={formData.motivation}
                    onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                    placeholder="Tell us about your motivation to volunteer and any relevant skills or experience you have..."
                    className="mt-1"
                    rows={4}
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    "Submit Application"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Volunteer */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-foreground mb-4">
              Why Volunteer with Us?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-poppins font-semibold text-xl text-foreground mb-3">
                Make Real Impact
              </h3>
              <p className="font-opensans text-muted-foreground">
                See the direct results of your efforts in the communities and lives you help transform.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-poppins font-semibold text-xl text-foreground mb-3">
                Join a Community
              </h3>
              <p className="font-opensans text-muted-foreground">
                Connect with like-minded individuals who share your passion for creating positive change.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-poppins font-semibold text-xl text-foreground mb-3">
                Develop Skills
              </h3>
              <p className="font-opensans text-muted-foreground">
                Gain valuable experience and develop new skills while contributing to meaningful causes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Volunteer;