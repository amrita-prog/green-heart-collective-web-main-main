import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/shared/BackToTop";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { contactService } from "@/services/api";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const { toast } = useToast();

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: "123 Green Street, Eco City, EC 12345"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+1 (555) 123-4567"
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@greenheartcollective.org"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: "Mon-Fri: 9:00 AM - 6:00 PM"
    }
  ];

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    try {
      setIsSubmitting(true);
      
      // Map the form values to the API expected format
      const contactData = {
        full_name: formData.name,
        email: formData.email,
        message: formData.message
      };
      
      await contactService.sendMessage(contactData);
      
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: ""
      });
    } catch (error) {
      console.error('Contact message submission error:', error);
      toast({
        title: "Submission Failed",
        description: "There was an error sending your message. Please try again later.",
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
            <Mail className="h-8 w-8 text-white" />
          </div>
          <h1 className="font-poppins font-bold text-4xl md:text-6xl text-foreground mb-6">
            Get in Touch
          </h1>
          <p className="font-opensans text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about our work or want to get involved? We'd love to hear from you. 
            Reach out and let's start a conversation about creating positive change together.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="shadow-card text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-poppins font-semibold text-lg text-foreground mb-2">
                    {info.title}
                  </h3>
                  <p className="font-opensans text-muted-foreground">
                    {info.details}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="font-poppins text-2xl text-foreground">
                    Send Us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
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
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us how we can help you or how you'd like to get involved..."
                        className="mt-1"
                        rows={6}
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
                        "Send Message"
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-6">
              {/* Embedded Map */}
              <Card className="shadow-card">
                <CardContent className="p-0">
                  <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                      <p className="font-opensans text-muted-foreground">
                        Interactive map would be embedded here
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="font-poppins text-xl text-foreground">
                    Quick Contact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-opensans font-semibold text-foreground mb-2">
                      For General Inquiries:
                    </h4>
                    <p className="font-opensans text-sm text-muted-foreground">
                      info@greenheartcollective.org
                    </p>
                  </div>
                  <div>
                    <h4 className="font-opensans font-semibold text-foreground mb-2">
                      For Volunteer Opportunities:
                    </h4>
                    <p className="font-opensans text-sm text-muted-foreground">
                      volunteer@greenheartcollective.org
                    </p>
                  </div>
                  <div>
                    <h4 className="font-opensans font-semibold text-foreground mb-2">
                      For Partnerships:
                    </h4>
                    <p className="font-opensans text-sm text-muted-foreground">
                      partnerships@greenheartcollective.org
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Response Time */}
              <Card className="shadow-card bg-primary text-white">
                <CardContent className="p-6 text-center">
                  <Clock className="h-8 w-8 mx-auto mb-3" />
                  <h3 className="font-poppins font-semibold text-lg mb-2">
                    Quick Response
                  </h3>
                  <p className="font-opensans text-sm">
                    We typically respond to all inquiries within 24 hours during business days.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="font-opensans text-lg text-muted-foreground">
              Find quick answers to common questions about our organization and programs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h3 className="font-poppins font-semibold text-lg text-foreground">
                How can I volunteer?
              </h3>
              <p className="font-opensans text-muted-foreground">
                Visit our volunteer page to see current opportunities and fill out an application form. 
                We'll contact you with details about upcoming volunteer activities.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-poppins font-semibold text-lg text-foreground">
                Are donations tax-deductible?
              </h3>
              <p className="font-opensans text-muted-foreground">
                Yes, Green Heart Collective is a registered 501(c)(3) organization. 
                All donations are tax-deductible and you'll receive a receipt for your records.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-poppins font-semibold text-lg text-foreground">
                Where do you operate?
              </h3>
              <p className="font-opensans text-muted-foreground">
                We currently operate in three cities with plans to expand. 
                Check our causes page for specific locations of our active projects.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-poppins font-semibold text-lg text-foreground">
                How are funds used?
              </h3>
              <p className="font-opensans text-muted-foreground">
                85% of donations go directly to programs, 10% to administrative costs, 
                and 5% to fundraising. We publish annual reports detailing our financial transparency.
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

export default Contact;