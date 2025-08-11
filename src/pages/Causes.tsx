import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/shared/BackToTop";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GraduationCap, Trees, Home } from "lucide-react";
import educationHero from "@/assets/education-hero.jpg";
import plantationHero from "@/assets/plantation-hero.jpg";
import slumDevelopmentHero from "@/assets/slum-development-hero.jpg";

const Causes = () => {
  const causes = [
    {
      id: "education",
      title: "Education for All",
      description: "Providing quality education and learning resources to underprivileged children in urban and rural communities. We believe education is the foundation of sustainable development.",
      image: educationHero,
      icon: GraduationCap,
      link: "/causes/education",
      stats: "500+ Children Educated"
    },
    {
      id: "plantation",
      title: "Green Plantation",
      description: "Restoring our environment through community tree planting initiatives. We work with local communities to plant native species and create sustainable green spaces.",
      image: plantationHero,
      icon: Trees,
      link: "/causes/plantation",
      stats: "10,000+ Trees Planted"
    },
    {
      id: "slum-development",
      title: "Slum Development",
      description: "Improving living conditions in underserved urban communities through infrastructure development, healthcare access, and economic empowerment programs.",
      image: slumDevelopmentHero,
      icon: Home,
      link: "/causes/slum-development",
      stats: "50+ Families Helped"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-poppins font-bold text-4xl md:text-6xl text-foreground mb-6">
            Our Causes
          </h1>
          <p className="font-opensans text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            We focus on three key areas where we can create lasting impact: 
            education, environmental conservation, and community development.
          </p>
        </div>
      </section>

      {/* Causes Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {causes.map((cause) => (
              <Card key={cause.id} className="shadow-card hover:shadow-hero transition-all duration-300 group overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={cause.image}
                    alt={cause.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-hero opacity-60"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <cause.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-poppins font-semibold text-xl text-foreground">
                        {cause.title}
                      </h3>
                      <span className="font-opensans text-sm text-primary font-medium">
                        {cause.stats}
                      </span>
                    </div>
                    <p className="font-opensans text-muted-foreground leading-relaxed">
                      {cause.description}
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <Button asChild className="flex-1">
                      <Link to={cause.link}>Learn More</Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link to="/donate">Donate</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-nature text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="font-opensans text-xl mb-8 max-w-2xl mx-auto">
            Join our mission to create sustainable change in communities worldwide. 
            Every contribution, big or small, makes a lasting impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/volunteer">Become a Volunteer</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary" asChild>
              <Link to="/donate">Support Our Cause</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Causes;