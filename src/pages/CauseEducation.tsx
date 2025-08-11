import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/shared/BackToTop";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { BookOpen, Users, Award, Target } from "lucide-react";
import educationHero from "@/assets/education-hero.jpg";

const CauseEducation = () => {
  const impactStats = [
    { icon: Users, number: "500+", label: "Children Educated" },
    { icon: BookOpen, number: "15", label: "Learning Centers" },
    { icon: Award, number: "20", label: "Scholarships Awarded" },
    { icon: Target, number: "3", label: "Cities Reached" }
  ];

  const programs = [
    {
      title: "Primary Education Support",
      description: "Basic literacy and numeracy programs for children aged 6-12 in underserved communities."
    },
    {
      title: "Digital Literacy",
      description: "Computer skills and internet safety training to prepare children for the digital age."
    },
    {
      title: "Scholarship Program",
      description: "Financial assistance for exceptional students to continue their secondary education."
    },
    {
      title: "Teacher Training",
      description: "Professional development workshops for local teachers to improve education quality."
    }
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <img
          src={educationHero}
          alt="Education for All"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="font-poppins font-bold text-4xl md:text-6xl mb-6">
              Education for All
            </h1>
            <p className="font-opensans text-xl md:text-2xl">
              Empowering children through quality education and learning opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-foreground mb-8">
              Our Education Mission
            </h2>
            <p className="font-opensans text-lg text-muted-foreground leading-relaxed mb-8">
              Education is the most powerful tool we can use to change the world. Our education 
              program focuses on providing quality learning opportunities to children in 
              underserved communities, ensuring they have the foundation they need to build 
              brighter futures for themselves and their families.
            </p>
            <p className="font-opensans text-lg text-muted-foreground leading-relaxed">
              We believe that every child deserves access to quality education, regardless of 
              their socioeconomic background. Through our comprehensive education initiatives, 
              we're not just teaching children to read and write – we're giving them the tools 
              to break the cycle of poverty and become leaders in their communities.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-foreground mb-4">
              Our Impact
            </h2>
            <p className="font-opensans text-lg text-muted-foreground">
              Real numbers showing the difference we're making in children's lives.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-poppins font-bold text-3xl text-foreground mb-2">
                  {stat.number}
                </h3>
                <p className="font-opensans text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-foreground mb-4">
              How We Help
            </h2>
            <p className="font-opensans text-lg text-muted-foreground">
              Our comprehensive approach to education includes multiple programs and initiatives.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="shadow-card">
                <CardContent className="p-6">
                  <h3 className="font-poppins font-semibold text-xl text-foreground mb-3">
                    {program.title}
                  </h3>
                  <p className="font-opensans text-muted-foreground">
                    {program.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-foreground mb-4">
              Our Education Centers
            </h2>
            <p className="font-opensans text-lg text-muted-foreground">
              See our education programs in action across different communities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative group cursor-pointer overflow-hidden rounded-lg shadow-card hover:shadow-hero transition-shadow">
                <img
                  src={image}
                  alt={`Education program ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-nature text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6">
            Help Us Educate More Children
          </h2>
          <p className="font-opensans text-xl mb-8 max-w-2xl mx-auto">
            Your donation can provide a child with books, school supplies, and 
            access to quality education. Together, we can break the cycle of poverty 
            through education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/donate">Donate Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary" asChild>
              <Link to="/volunteer">Volunteer with Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default CauseEducation;