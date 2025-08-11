import { Link } from "react-router-dom";
import { Heart, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-nature text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <span className="font-poppins font-bold text-xl">
                Green Heart Collective
              </span>
            </div>
            <p className="font-opensans text-white/90 mb-6 max-w-md">
              Empowering communities through education, environmental conservation, 
              and sustainable development. Together, we can create a better tomorrow.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 font-opensans">
              <li><Link to="/about" className="text-white/90 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/causes" className="text-white/90 hover:text-white transition-colors">Our Causes</Link></li>
              <li><Link to="/volunteer" className="text-white/90 hover:text-white transition-colors">Volunteer</Link></li>
              <li><Link to="/donate" className="text-white/90 hover:text-white transition-colors">Donate</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3 font-opensans">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-white/70" />
                <span className="text-white/90">123 Green Street, Eco City, EC 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-white/70" />
                <span className="text-white/90">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-white/70" />
                <span className="text-white/90">info@greenheartcollective.org</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-opensans text-white/70 text-sm">
              © 2024 Green Heart Collective. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="font-opensans text-white/70 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="font-opensans text-white/70 hover:text-white text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;