import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/shared/BackToTop";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Home, Users, Heart, Wrench } from "lucide-react";
import slumDevelopmentHero from "@/assets/slum-development-hero.jpg";

const CauseSlumDevelopment = () => {
  const impactStats = [
    { icon: Home, number: "50+", label: "Families Helped" },
    { icon: Users, number: "200+", label: "Lives Improved" },
    { icon: Wrench, number: "15", label: "Projects Completed" },
    { icon: Heart, number: "5", label: "Communities Served" }
  ];

  const programs = [
    {
      title: "Housing Improvement",
      description: "Upgrading existing structures with better materials, improved ventilation, and basic amenities."
    },
    {
      title: "Sanitation Infrastructure",
      description: "Installing clean water systems, waste management facilities, and proper drainage solutions."
    },
    {
      title: "Healthcare Access",
      description: "Establishing community health centers and organizing regular medical check-up camps."
    },
    {
      title: "Economic Empowerment",
      description: "Providing skill training and microfinance opportunities to help families achieve financial stability."
    }
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <img
          src={slumDevelopmentHero}
          alt="Slum Development"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="font-poppins font-bold text-4xl md:text-6xl mb-6">
              Slum Development
            </h1>
            <p className="font-opensans text-xl md:text-2xl">
              Transforming communities through sustainable infrastructure and empowerment
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-foreground mb-8">
              Our Community Development Mission
            </h2>
            <p className="font-opensans text-lg text-muted-foreground leading-relaxed mb-8">
              Millions of people around the world live in underserved urban communities without 
              access to basic infrastructure, clean water, or sanitation facilities. Our slum 
              development program focuses on improving living conditions through sustainable 
              infrastructure projects and community empowerment initiatives.
            </p>
            <p className="font-opensans text-lg text-muted-foreground leading-relaxed">
              We believe that everyone deserves to live with dignity and have access to basic 
              necessities. Our comprehensive approach addresses immediate needs while building 
              long-term capacity within communities, ensuring sustainable improvements that 
              last for generations.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-foreground mb-4">
              Community Impact
            </h2>
            <p className="font-opensans text-lg text-muted-foreground">
              Real changes in the lives of families and communities we serve.
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
              Our Development Programs
            </h2>
            <p className="font-opensans text-lg text-muted-foreground">
              Comprehensive solutions addressing the most critical needs in underserved communities.
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
              Transformation Stories
            </h2>
            <p className="font-opensans text-lg text-muted-foreground">
              Before and after views of our community development projects.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative group cursor-pointer overflow-hidden rounded-lg shadow-card hover:shadow-hero transition-shadow">
                <img
                  src={image}
                  alt={`Development project ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-foreground mb-4">
              Our Approach
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-poppins font-semibold text-xl text-foreground mb-3">
                Community-Driven
              </h3>
              <p className="font-opensans text-muted-foreground">
                We work directly with community members to identify priorities and develop solutions that meet their specific needs.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-poppins font-semibold text-xl text-foreground mb-3">
                Sustainable Solutions
              </h3>
              <p className="font-opensans text-muted-foreground">
                Our projects are designed for long-term sustainability, using local materials and training community members for maintenance.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-poppins font-semibold text-xl text-foreground mb-3">
                Holistic Development
              </h3>
              <p className="font-opensans text-muted-foreground">
                We address multiple aspects of community development including infrastructure, health, education, and economic opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-nature text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6">
            Help Us Transform Communities
          </h2>
          <p className="font-opensans text-xl mb-8 max-w-2xl mx-auto">
            Your support can help provide clean water, improved housing, and better 
            living conditions for families in underserved communities. Together, we 
            can create lasting change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/donate">Support Development</Link>
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

export default CauseSlumDevelopment;