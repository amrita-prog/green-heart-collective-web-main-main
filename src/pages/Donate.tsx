import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/shared/BackToTop";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Heart, CreditCard, Smartphone, Building, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { donationService } from "@/services/api";
import { Textarea } from "@/components/ui/textarea";

const Donate = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cause: "",
    amount: "",
    paymentMethod: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { toast } = useToast();

  const predefinedAmounts = [25, 50, 100, 250, 500, 1000];

  const causes = [
    { value: "education", label: "Education for All" },
    { value: "plantation", label: "Green Plantation" },
    { value: "slum-development", label: "Slum Development" },
    { value: "general", label: "General Fund" }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.cause || !formData.amount || !formData.paymentMethod) {
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
      const donationData = {
        full_name: formData.name,
        email: formData.email,
        cause: formData.cause === 'education' ? 'Education for All' :
               formData.cause === 'plantation' ? 'Green Plantation' :
               formData.cause === 'slum-development' ? 'Slum Development' : 'General Fund',
        amount: parseFloat(formData.amount),
        payment_method: formData.paymentMethod === 'upi' ? 'UPI' :
                        formData.paymentMethod === 'card' ? 'Card' : 'Bank',
        message: formData.message || null
      };
      
      await donationService.createDonation(donationData);
      
      toast({
        title: "Thank You!",
        description: "Your donation has been processed. You will receive a confirmation email shortly.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        cause: "",
        amount: "",
        paymentMethod: "",
        message: ""
      });
    } catch (error) {
      console.error('Donation submission error:', error);
      toast({
        title: "Submission Failed",
        description: "There was an error processing your donation. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAmountSelect = (amount: number) => {
    setFormData({ ...formData, amount: amount.toString() });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="h-8 w-8 text-white" />
          </div>
          <h1 className="font-poppins font-bold text-4xl md:text-6xl text-foreground mb-6">
            Make a Donation
          </h1>
          <p className="font-opensans text-xl text-muted-foreground max-w-3xl mx-auto">
            Your generosity can create lasting change in communities around the world. 
            Every donation, big or small, makes a meaningful difference.
          </p>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Donation Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="font-poppins text-2xl text-foreground">
                    Donation Details
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    </div>

                    {/* Cause Selection */}
                    <div>
                      <Label htmlFor="cause">Select Cause *</Label>
                      <Select value={formData.cause} onValueChange={(value) => setFormData({ ...formData, cause: value })}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Choose a cause to support" />
                        </SelectTrigger>
                        <SelectContent>
                          {causes.map((cause) => (
                            <SelectItem key={cause.value} value={cause.value}>
                              {cause.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Amount Selection */}
                    <div>
                      <Label>Donation Amount *</Label>
                      <div className="grid grid-cols-3 gap-3 mt-2 mb-4">
                        {predefinedAmounts.map((amount) => (
                          <Button
                            key={amount}
                            type="button"
                            variant={formData.amount === amount.toString() ? "default" : "outline"}
                            onClick={() => handleAmountSelect(amount)}
                            className="font-opensans"
                          >
                            ₹{amount}
                          </Button>
                        ))}
                      </div>
                      <Input
                        type="number"
                        value={formData.amount}
                        onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                        placeholder="Enter custom amount"
                        min="1"
                      />
                    </div>

                    <Separator />

                    {/* Payment Method */}
                    <div>
                      <Label>Payment Method *</Label>
                      <RadioGroup
                        value={formData.paymentMethod}
                        onValueChange={(value) => setFormData({ ...formData, paymentMethod: value })}
                        className="mt-3"
                      >
                        <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-muted transition-colors">
                          <RadioGroupItem value="upi" id="upi" />
                          <Smartphone className="h-5 w-5 text-muted-foreground" />
                          <Label htmlFor="upi" className="flex-1 cursor-pointer">
                            UPI Payment
                          </Label>
                        </div>
                        <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-muted transition-colors">
                          <RadioGroupItem value="card" id="card" />
                          <CreditCard className="h-5 w-5 text-muted-foreground" />
                          <Label htmlFor="card" className="flex-1 cursor-pointer">
                            Credit/Debit Card
                          </Label>
                        </div>
                        <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-muted transition-colors">
                          <RadioGroupItem value="bank" id="bank" />
                          <Building className="h-5 w-5 text-muted-foreground" />
                          <Label htmlFor="bank" className="flex-1 cursor-pointer">
                            Bank Transfer
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {/* Optional Message */}
                    <div>
                      <Label htmlFor="message">Message (Optional)</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Share why you're donating or any special instructions"
                        className="mt-1"
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
                        "Donate Now"
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Donation Impact */}
            <div className="space-y-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="font-poppins text-xl text-foreground">
                    Your Impact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-opensans font-semibold text-foreground mb-2">₹25 can provide:</h4>
                    <p className="font-opensans text-sm text-muted-foreground">School supplies for one child for a month</p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-opensans font-semibold text-foreground mb-2">₹50 can provide:</h4>
                    <p className="font-opensans text-sm text-muted-foreground">5 tree saplings and planting materials</p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-opensans font-semibold text-foreground mb-2">₹100 can provide:</h4>
                    <p className="font-opensans text-sm text-muted-foreground">Clean water access for one family</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="font-poppins text-xl text-foreground">
                    Tax Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-opensans text-sm text-muted-foreground">
                    Green Heart Collective is a registered 501(c)(3) nonprofit organization. 
                    Your donation is tax-deductible to the extent allowed by law. 
                    You will receive a tax receipt via email.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-foreground mb-4">
              Other Ways to Help
            </h2>
            <p className="font-opensans text-lg text-muted-foreground">
              Can't donate right now? There are other meaningful ways to support our mission.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="shadow-card">
              <CardContent className="p-6 text-center">
                <h3 className="font-poppins font-semibold text-xl text-foreground mb-3">
                  Volunteer Your Time
                </h3>
                <p className="font-opensans text-muted-foreground mb-4">
                  Join our volunteer community and contribute your skills and time to make a direct impact.
                </p>
                <Button variant="outline">Learn More</Button>
              </CardContent>
            </Card>
            <Card className="shadow-card">
              <CardContent className="p-6 text-center">
                <h3 className="font-poppins font-semibold text-xl text-foreground mb-3">
                  Spread the Word
                </h3>
                <p className="font-opensans text-muted-foreground mb-4">
                  Share our mission with friends and family to help us reach more people who care.
                </p>
                <Button variant="outline">Share Now</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Donate;
