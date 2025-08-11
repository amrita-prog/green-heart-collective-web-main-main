import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/shared/BackToTop";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Target, Globe } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Executive Director",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      role: "Program Coordinator",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      role: "Community Outreach Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "David Park",
      role: "Environmental Specialist",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    }
  ];

  const achievements = [
    { year: "2020", milestone: "Founded Green Heart Collective" },
    { year: "2021", milestone: "Planted first 1,000 trees" },
    { year: "2022", milestone: "Launched education program, reached 100+ children" },
    { year: "2023", milestone: "Completed 5 slum development projects" },
    { year: "2024", milestone: "Expanded to 3 cities, 10,000+ trees planted" }
  ];

  const stats = [
    { icon: Users, number: "500+", label: "Lives Impacted" },
    { icon: Globe, number: "10,000+", label: "Trees Planted" },
    { icon: Award, number: "50+", label: "Projects Completed" },
    { icon: Target, number: "3", label: "Cities Reached" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-poppins font-bold text-4xl md:text-6xl text-foreground mb-6">
            About Our Mission
          </h1>
          <p className="font-opensans text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a nonprofit organization dedicated to creating sustainable change 
            through community empowerment, environmental conservation, and education.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
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

      {/* Story Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-foreground mb-8">
              Our Story
            </h2>
            <div className="font-opensans text-lg text-muted-foreground space-y-6">
              <p>
                Green Heart Collective was born from a simple belief: that every community 
                deserves access to quality education, a clean environment, and sustainable 
                opportunities for growth. Founded in 2020 by a group of passionate activists 
                and environmental scientists, we started with a small tree-planting initiative 
                in our local neighborhood.
              </p>
              <p>
                What began as weekend volunteering sessions quickly grew into something much 
                larger. We realized that environmental conservation couldn't be separated from 
                social justice and community development. Today, we work across three 
                interconnected areas: education for underprivileged children, environmental 
                restoration through tree planting, and sustainable development in underserved communities.
              </p>
              <p>
                Our approach is collaborative and community-driven. We don't just implement 
                programs – we work alongside local communities to identify needs, develop 
                solutions, and build lasting capacity for change. Every project we undertake 
                is designed to create ripple effects that extend far beyond our direct involvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="font-opensans text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate individuals working together to create sustainable impact in communities worldwide.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="shadow-card hover:shadow-hero transition-shadow">
                <CardContent className="p-6 text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-poppins font-semibold text-lg text-foreground mb-2">
                    {member.name}
                  </h3>
                  <p className="font-opensans text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-foreground mb-4">
              Our Journey
            </h2>
            <p className="font-opensans text-lg text-muted-foreground">
              Key milestones in our mission to create positive change.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center mb-8 last:mb-0">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white font-poppins font-bold text-lg mr-6 flex-shrink-0">
                  {achievement.year}
                </div>
                <div className="bg-background p-6 rounded-lg shadow-soft flex-1">
                  <p className="font-opensans text-lg text-foreground">{achievement.milestone}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default About;