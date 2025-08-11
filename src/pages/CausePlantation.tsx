import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/shared/BackToTop";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Trees, Leaf, Globe, Droplets } from "lucide-react";
import plantationHero from "@/assets/plantation-hero.jpg";

const CausePlantation = () => {
  const impactStats = [
    { icon: Trees, number: "10,000+", label: "Trees Planted" },
    { icon: Globe, number: "50", label: "Hectares Restored" },
    { icon: Leaf, number: "25", label: "Native Species" },
    { icon: Droplets, number: "30%", label: "Carbon Reduction" }
  ];

  const programs = [
    {
      title: "Community Tree Planting",
      description: "Organizing regular tree planting drives with local communities to restore degraded landscapes."
    },
    {
      title: "Native Species Conservation",
      description: "Focus on planting indigenous tree species to maintain local ecosystem balance."
    },
    {
      title: "School Green Programs",
      description: "Teaching children about environmental conservation through hands-on tree planting activities."
    },
    {
      title: "Urban Forest Creation",
      description: "Developing green spaces in urban areas to improve air quality and community wellbeing."
    }
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1574263867128-a3d5c1b1deac?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1586063757157-36de20ff2b8c?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1605979399858-5c35a4d5660b?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1569163129394-de4e5f43e4e3?w=400&h=300&fit=crop"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <img
          src={plantationHero}
          alt="Green Plantation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="font-poppins font-bold text-4xl md:text-6xl mb-6">
              Green Plantation
            </h1>
            <p className="font-opensans text-xl md:text-2xl">
              Restoring our planet through community-driven reforestation initiatives
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-foreground mb-8">
              Our Environmental Mission
            </h2>
            <p className="font-opensans text-lg text-muted-foreground leading-relaxed mb-8">
              Climate change and deforestation are among the most pressing challenges of our time. 
              Our green plantation initiative focuses on restoring degraded landscapes, improving 
              air quality, and creating sustainable ecosystems that benefit both people and wildlife.
            </p>
            <p className="font-opensans text-lg text-muted-foreground leading-relaxed">
              We work closely with local communities to identify areas that need restoration, 
              select appropriate native species, and ensure long-term care of planted trees. 
              Our approach goes beyond just planting – we create lasting environmental impact 
              through education, community involvement, and sustainable practices.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-foreground mb-4">
              Environmental Impact
            </h2>
            <p className="font-opensans text-lg text-muted-foreground">
              Measurable results from our reforestation and conservation efforts.
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
              Our Green Initiatives
            </h2>
            <p className="font-opensans text-lg text-muted-foreground">
              Comprehensive programs designed to restore and protect our environment.
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
              Reforestation in Action
            </h2>
            <p className="font-opensans text-lg text-muted-foreground">
              See our tree planting and conservation efforts across different regions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative group cursor-pointer overflow-hidden rounded-lg shadow-card hover:shadow-hero transition-shadow">
                <img
                  src={image}
                  alt={`Plantation project ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Benefits */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-foreground mb-4">
              Why Trees Matter
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-poppins font-semibold text-xl text-foreground mb-3">
                Carbon Absorption
              </h3>
              <p className="font-opensans text-muted-foreground">
                Trees absorb CO2 from the atmosphere, helping to combat climate change and reduce greenhouse gases.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-poppins font-semibold text-xl text-foreground mb-3">
                Biodiversity Protection
              </h3>
              <p className="font-opensans text-muted-foreground">
                Forests provide habitat for countless species and help maintain ecological balance in our ecosystems.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-poppins font-semibold text-xl text-foreground mb-3">
                Air Quality Improvement
              </h3>
              <p className="font-opensans text-muted-foreground">
                Trees filter pollutants from the air, producing oxygen and creating healthier environments for communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-nature text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6">
            Plant a Tree, Plant Hope
          </h2>
          <p className="font-opensans text-xl mb-8 max-w-2xl mx-auto">
            Join our reforestation mission and help us create a greener, more sustainable 
            future for generations to come. Every tree planted is a step toward healing our planet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/donate">Sponsor a Tree</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary" asChild>
              <Link to="/volunteer">Join Planting Events</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default CausePlantation;