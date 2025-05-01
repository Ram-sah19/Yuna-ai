import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { destinations } from '@/data/destinations';
import { MapPin, Calendar, Users, Star, ChevronRight, Search } from 'lucide-react';
import TempleDoorBackground from "@/components/TempleDoorBackground";

// Golden line color
const GOLDEN = "#FFD700";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  // Track hover/focus on hero for doors and text
  const [doorsOpen, setDoorsOpen] = useState(false);

  const featuredDestinations = [
    ...destinations.filter(d => d.name === "Madurai Temple" || d.name === "Meenakshi Amman Temple"),
    destinations.find(d => d.name === "Kanyakumari")  || destinations[2]
  ].slice(0, 3);
  
  const popularDestinations = [...destinations]
    .sort((a, b) => b.recentVisitors - a.recentVisitors)
    .slice(0, 4);

  return <Layout>
          {/* Main container with hover interaction */}
        <div className="relative hero-3d">
          {/* Temple doors container */}
          <div className="temple-doors w-full h-full">
            {/* Left door */}
            <div 
              className="door left-door absolute left-0 w-1/2 h-full bg-cover bg-center transition-all duration-1000 ease-[cubic-bezier(0.65,0,0.35,1)] z-10 shadow-lg border-r-4 border-[#d4af37]"
              style={{
                backgroundImage: "url('/lovable-uploads/f53bd24b-a9ae-42ce-b0f4-e193494df05d.png')",
                transformOrigin: "left center"
              }}
            />
            
            {/* Right door */}
            <div 
              className="door right-door absolute right-0 w-1/2 h-full bg-cover bg-center transition-all duration-1000 ease-[cubic-bezier(0.65,0,0.35,1)] z-10 shadow-lg border-l-4 border-[#d4af37]"
              style={{
                backgroundImage: "url('/lovable-uploads/f53bd24b-a9ae-42ce-b0f4-e193494df05d.png')",
                transformOrigin: "right center"
              }}
            />
            
            {/* Content that appears when doors open */}
            <div className="door-content absolute z-20 text-white text-center p-8 opacity-0 translate-y-5 transition-all duration-800 ease-in-out delay-400 w-full max-w-4xl mx-auto">
              <h2 className="text-4xl mb-8 text-gray-100">Welcome to the Temple</h2>
              <div className="search-container flex w-full max-w-2xl mx-auto">
                <input 
                  type="text" 
                  className="flex-1 py-4 px-6 border-none rounded-l-full text-lg bg-white/90 focus:outline-none focus:ring-4 focus:ring-[#d8b34780]" 
                  placeholder="Enter your search..." 
                />
                <button className="px-8 bg-[#d4af37] text-gray-900 border-none rounded-r-full font-bold text-lg cursor-pointer transition-all duration-300 hover:bg-[#f8d84b]">
                  Search
                </button>
              </div>
            </div>
          </div>
          
          {/* Styling for hover effects */}
          <style jsx>{`
            .hero-3d {
              height: 60vh;
              perspective: 1000px;
              position: center;
              overflow: hidden;
              display: flex;
              align-items: center;
              justify-content: center;
              background: #000;
            }
            .temple-doors {
              position: relative;
              width: 80%;
              height: 80%;
              display: flex;
              overflow: hidden;
            }
            .temple-doors:hover .left-door {
              transform: rotateY(-120deg);
            }
            .temple-doors:hover .right-door {
              transform: rotateY(120deg);
            }
            .temple-doors:hover .door-content {
              opacity: 1;
              transform: translateY(0);
            }
            @media (max-width: 300px) {
              .door-content h2 {
                font-size: 1.8rem;
              }
              .search-container {
                max-width: 90%;
                margin: 0 auto;
                justify-content: center;
              }
                
            }
          `}</style>
        </div>
      
      <section className="py-16 px-4">
        <div className="container">
          <div className="flex flex-wrap justify-between items-center mb-8">
            <h2 className="text-3xl font-bold heading-decorative">Featured Destinations</h2>
            <Link to="/destinations" className="text-tamil-blue hover:text-tamil-terracotta flex items-center">
              View All <ChevronRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredDestinations.map(destination => <Link to={`/destinations/${destination.id}`} key={destination.id} className="destination-card group">
                <div className="aspect-[3/4] w-full">
                  <img src={destination.image} alt={destination.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
                <div className="destination-card-content">
                  <h3 className="text-xl font-bold mb-1">{destination.name}</h3>
                  <div className="flex items-center gap-1 text-sm text-white/80 mb-2">
                    <MapPin size={14} />
                    <span>{destination.location}</span>
                    <div className="ml-auto flex items-center">
                      <Star size={14} className="text-yellow-400" />
                      <span className="ml-1">{destination.rating}</span>
                    </div>
                  </div>
                  <p className="text-sm text-white/90 line-clamp-2">{destination.shortDescription}</p>
                </div>
              </Link>)}
          </div>
        </div>
      </section>
      
      <section className="py-16 px-4 bg-muted relative kolam-overlay">
        <div className="container relative">
          <div className="flex flex-wrap justify-between items-center mb-8">
            <h2 className="text-3xl font-bold heading-decorative">Popular Right Now</h2>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users size={16} />
              <span>Real-time visitor data</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularDestinations.map(destination => <Card key={destination.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative">
                  <img src={destination.image} alt={destination.name} className="w-full h-full object-cover" />
                  <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full flex items-center">
                    <Users size={12} className="mr-1" />
                    {destination.recentVisitors} visiting
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-1">{destination.name}</h3>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
                    <MapPin size={12} />
                    <span>{destination.location}</span>
                    <div className="ml-auto flex items-center">
                      <Star size={12} className="text-yellow-400" />
                      <span className="ml-1">{destination.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
                    <Calendar size={12} />
                    <span>Best time: {destination.bestTimeToVisit}</span>
                  </div>
                  <Link to={`/destinations/${destination.id}`}>
                    <Button variant="outline" className="w-full hover:bg-tamil-terracotta hover:text-white">
                      View Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>
      
      <section className="py-16 px-4">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold heading-decorative mb-6">Meet Yuna, Your AI Guide</h2>
              <p className="mb-4 text-lg">
                Yuna is your personal AI assistant for exploring Tamil Nadu. She can answer questions about destinations, 
                culture, history, and help plan your perfect trip.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-tamil-terracotta text-white flex items-center justify-center shrink-0 mt-1">✓</div>
                  <span>Get real-time information in multiple languages</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-tamil-terracotta text-white flex items-center justify-center shrink-0 mt-1">✓</div>
                  <span>Ask about historical facts, cultural significance, and local customs</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-tamil-terracotta text-white flex items-center justify-center shrink-0 mt-1">✓</div>
                  <span>Receive personalized recommendations based on your interests</span>
                </li>
              </ul>
              <Button className="bg-tamil-terracotta hover:bg-tamil-brown">
                Ask Yuna Now
              </Button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-tamil-cream to-white shadow-xl rounded-xl p-6 md:p-8 relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-full bg-tamil-terracotta text-white flex items-center justify-center font-bold text-xl">Y</div>
                  <div>
                    <h3 className="font-bold text-xl">Yuna AI</h3>
                    <p className="text-sm text-muted-foreground">Your Tamil Nadu Guide</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-muted p-3 rounded-lg rounded-tl-none max-w-xs">
                    Hello! I'm Yuna, your AI travel companion for Tamil Nadu. What would you like to know about?
                  </div>
                  <div className="bg-tamil-blue text-white p-3 rounded-lg rounded-tr-none ml-auto max-w-xs">
                    Tell me about the best time to visit Madurai Temple.
                  </div>
                  <div className="bg-muted p-3 rounded-lg rounded-tl-none max-w-xs">
                    The best time to visit Madurai Meenakshi Temple is from October to March when the weather is pleasant. 
                    Try to visit during the Chithirai Festival (April-May) to witness the grand celebrations!
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 h-40 w-40 bg-tamil-green/10 rounded-full z-0 animate-float"></div>
              <div className="absolute -top-4 -left-4 h-20 w-20 bg-tamil-mustard/10 rounded-full z-0 animate-float"></div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 px-4 bg-gradient-to-r from-tamil-terracotta to-tamil-brown text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore Tamil Nadu?</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Start planning your journey through this land of ancient temples, rich culture, and beautiful landscapes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-white text-tamil-terracotta hover:bg-white/90">
              View Destinations
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white/20">
              Create Itinerary
            </Button>
          </div>
        </div>
      </section>
    </Layout>;
};

export default Index;
