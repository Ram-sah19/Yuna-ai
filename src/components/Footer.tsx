
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-background to-muted text-foreground pt-16 pb-8 relative bg-texture">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-5 hover-lift inline-block">
              <span className="h-10 w-10 rounded-full bg-gradient-to-r from-tamil-terracotta to-tamil-coral text-white flex items-center justify-center font-bold shadow-md">Y</span>
              <span className="font-serif text-xl font-bold gradient-text">Yuna Tamil Trails</span>
            </Link>
            <p className="text-sm mb-6 text-muted-foreground">
              Discover the rich heritage, stunning landscapes, and vibrant culture of Tamil Nadu with your virtual guide, Yuna.
            </p>
            <div className="flex gap-4">
              <a href="#" className="h-9 w-9 rounded-full bg-white shadow-soft flex items-center justify-center text-tamil-terracotta hover:bg-tamil-cream transition-colors hover-lift">
                <Facebook size={18} />
              </a>
              <a href="#" className="h-9 w-9 rounded-full bg-white shadow-soft flex items-center justify-center text-tamil-terracotta hover:bg-tamil-cream transition-colors hover-lift">
                <Twitter size={18} />
              </a>
              <a href="#" className="h-9 w-9 rounded-full bg-white shadow-soft flex items-center justify-center text-tamil-terracotta hover:bg-tamil-cream transition-colors hover-lift">
                <Instagram size={18} />
              </a>
              <a href="#" className="h-9 w-9 rounded-full bg-white shadow-soft flex items-center justify-center text-tamil-terracotta hover:bg-tamil-cream transition-colors hover-lift">
                <Youtube size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-5 heading-decorative">Explore</h3>
            <ul className="space-y-3">
              <li><Link to="/destinations" className="text-sm hover:text-tamil-terracotta transition-colors hover:translate-x-1 inline-block">Destinations</Link></li>
              <li><Link to="/itineraries" className="text-sm hover:text-tamil-terracotta transition-colors hover:translate-x-1 inline-block">Itineraries</Link></li>
              <li><Link to="/culture" className="text-sm hover:text-tamil-terracotta transition-colors hover:translate-x-1 inline-block">Culture & Heritage</Link></li>
              <li><Link to="/cuisine" className="text-sm hover:text-tamil-terracotta transition-colors hover:translate-x-1 inline-block">Cuisine</Link></li>
              <li><Link to="/events" className="text-sm hover:text-tamil-terracotta transition-colors hover:translate-x-1 inline-block">Festivals & Events</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-5 heading-decorative">Information</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm hover:text-tamil-terracotta transition-colors hover:translate-x-1 inline-block">About Us</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-tamil-terracotta transition-colors hover:translate-x-1 inline-block">Contact</Link></li>
              <li><Link to="/faq" className="text-sm hover:text-tamil-terracotta transition-colors hover:translate-x-1 inline-block">FAQs</Link></li>
              <li><Link to="/privacy" className="text-sm hover:text-tamil-terracotta transition-colors hover:translate-x-1 inline-block">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm hover:text-tamil-terracotta transition-colors hover:translate-x-1 inline-block">Terms of Service</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-5 heading-decorative">Contact Us</h3>
            <p className="text-sm mb-5 text-muted-foreground">Have questions? Reach out to us directly or use Yuna AI assistant for instant help.</p>
            <div className="space-y-3">
              <a href="mailto:info@yunatamiltrails.com" className="flex items-center gap-2 text-sm hover:text-tamil-terracotta transition-colors group">
                <div className="h-8 w-8 rounded-full bg-white shadow-soft flex items-center justify-center text-tamil-terracotta group-hover:bg-tamil-cream">
                  <Mail size={14} />
                </div>
                <span>info@yunatamiltrails.com</span>
              </a>
              <div className="flex items-center gap-2 text-sm">
                <div className="h-8 w-8 rounded-full bg-white shadow-soft flex items-center justify-center text-tamil-terracotta">
                  <MapPin size={14} />
                </div>
                <span>42 Cathedral Road, Chennai</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="h-8 w-8 rounded-full bg-white shadow-soft flex items-center justify-center text-tamil-terracotta">
                  <Phone size={14} />
                </div>
                <span>+91 44 2812 5678</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-muted mt-10 pt-6 text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center">© {new Date().getFullYear()} Yuna Tamil Trails. Made with <Heart className="h-3 w-3 mx-1 text-tamil-coral" /> in Tamil Nadu</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
