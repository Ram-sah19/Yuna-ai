import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, MapPin, Heart, Share2, Bookmark, Users } from 'lucide-react';

const Itineraries = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const itineraries = [
    {
      id: 1,
      title: "Essential Tamil Nadu",
      days: 7,
      category: "popular",
      locations: ["Chennai", "Mahabalipuram", "Pondicherry", "Thanjavur", "Madurai"],
      description: "A perfect introduction to Tamil Nadu covering the essential historical and cultural highlights.",
      image: "/lovable-uploads/98f96024-f390-4f7a-a58d-668a5b863a83.png",
      authorName: "Priya Sharma",
      authorImage: "https://randomuser.me/api/portraits/women/62.jpg",
      likes: 234,
      saves: 182
    },
    {
      id: 2,
      title: "Spiritual Journey",
      days: 10,
      category: "spiritual",
      locations: ["Chennai", "Kanchipuram", "Tiruvannamalai", "Rameshwaram", "Madurai"],
      description: "Explore the sacred temples and spiritual sites across Tamil Nadu.",
      image: "/lovable-uploads/8469330b-a927-46e1-8ada-5d5f3494fde3.png",
      authorName: "Rahul Mehta",
      authorImage: "https://randomuser.me/api/portraits/men/75.jpg",
      likes: 186,
      saves: 143
    },
    {
      id: 3,
      title: "Hill Station Retreat",
      days: 5,
      category: "nature",
      locations: ["Ooty", "Coonoor", "Kotagiri", "Kodaikanal"],
      description: "Escape to the cool hill stations of the Nilgiris and experience tranquil natural beauty.",
      image: "/lovable-uploads/a4cc51f8-bd0b-4158-8725-e645ac7059c5.png",
      authorName: "Anjali Patel",
      authorImage: "https://randomuser.me/api/portraits/women/47.jpg",
      likes: 158,
      saves: 120
    },
    {
      id: 4,
      title: "Coastal Tamil Nadu",
      days: 6,
      category: "beach",
      locations: ["Chennai", "Mahabalipuram", "Pondicherry", "Tranquebar", "Kanyakumari"],
      description: "Journey along the scenic coastline of Tamil Nadu from Chennai to Kanyakumari.",
      image: "/lovable-uploads/0be94e98-fd32-4f0d-82cd-d8369741be3f.png",
      authorName: "Vikram Singh",
      authorImage: "https://randomuser.me/api/portraits/men/32.jpg",
      likes: 142,
      saves: 98
    },
    {
      id: 5,
      title: "Heritage Trail",
      days: 8,
      category: "heritage",
      locations: ["Thanjavur", "Kumbakonam", "Gangaikonda Cholapuram", "Darasuram", "Chidambaram"],
      description: "Discover the magnificent heritage of the Chola dynasty through their architectural marvels.",
      image: "/lovable-uploads/0c593c0f-b833-481b-90c1-6f1d17b44242.png",
      authorName: "Deepak Kumar",
      authorImage: "https://randomuser.me/api/portraits/men/22.jpg",
      likes: 178,
      saves: 145
    },
    {
      id: 6,
      title: "Chettinad Cuisine Tour",
      days: 4,
      category: "food",
      locations: ["Madurai", "Karaikudi", "Kanadukathan", "Pudukkottai"],
      description: "A gastronomic journey through the spicy and flavorful Chettinad region of Tamil Nadu.",
      image: "/lovable-uploads/b92274e8-ee1d-4cbf-bbab-583737ac329e.png",
      authorName: "Kavita Krishnan",
      authorImage: "https://randomuser.me/api/portraits/women/28.jpg",
      likes: 132,
      saves: 110
    }
  ];
  
  const filteredItineraries = activeFilter === 'all' 
    ? itineraries 
    : itineraries.filter(item => item.category === activeFilter);
  
  const filters = [
    { id: 'all', label: 'All Itineraries' },
    { id: 'popular', label: 'Popular' },
    { id: 'heritage', label: 'Heritage' },
    { id: 'spiritual', label: 'Spiritual' },
    { id: 'nature', label: 'Nature' },
    { id: 'beach', label: 'Coastal' },
    { id: 'food', label: 'Food' }
  ];

  return (
    <Layout>
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10"></div>
        <div className="absolute inset-0 bg-cover bg-center" style={{
          backgroundImage: "url('/lovable-uploads/56060a17-5dfa-4503-aa86-18b03713ecd6.png')"
        }}></div>
        
        <div className="container relative z-20 px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Curated Itineraries</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Expert-crafted travel plans to help you discover the best of Tamil Nadu
          </p>
          
          <div className="flex flex-wrap justify-center gap-2">
            <Button className="bg-white text-tamil-terracotta hover:bg-white/90">
              Create Custom Itinerary
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white/20">
              Get Personalized Recommendations
            </Button>
          </div>
        </div>
      </section>
      
      <section className="py-12 px-4">
        <div className="container">
          <div className="mb-8 overflow-x-auto scrollbar-hide">
            <div className="flex gap-2 min-w-max p-1">
              {filters.map(filter => (
                <Button
                  key={filter.id}
                  variant={activeFilter === filter.id ? "default" : "outline"}
                  className={activeFilter === filter.id ? "bg-tamil-terracotta hover:bg-tamil-brown" : ""}
                  onClick={() => setActiveFilter(filter.id)}
                >
                  {filter.label}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItineraries.map(itinerary => (
              <Card key={itinerary.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[3/2] overflow-hidden">
                  <img 
                    src={itinerary.image} 
                    alt={itinerary.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{itinerary.title}</CardTitle>
                    <div className="flex items-center gap-1 text-sm bg-tamil-terracotta/10 text-tamil-terracotta px-2 py-1 rounded-full">
                      <Calendar size={14} />
                      <span>{itinerary.days} Days</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-2">
                    {itinerary.locations.slice(0, 3).map((location, idx) => (
                      <span key={idx} className="inline-flex items-center text-xs bg-muted px-2 py-1 rounded-full">
                        <MapPin size={10} className="mr-1" />
                        {location}
                      </span>
                    ))}
                    {itinerary.locations.length > 3 && (
                      <span className="inline-flex items-center text-xs bg-muted px-2 py-1 rounded-full">
                        +{itinerary.locations.length - 3} more
                      </span>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{itinerary.description}</p>
                  
                  <div className="flex items-center gap-3">
                    <img 
                      src={itinerary.authorImage} 
                      alt={itinerary.authorName} 
                      className="h-8 w-8 rounded-full object-cover"
                    />
                    <div>
                      <div className="text-sm font-medium">{itinerary.authorName}</div>
                      <div className="text-xs text-muted-foreground">Travel Expert</div>
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="border-t flex justify-between pt-4">
                  <div className="flex items-center gap-3">
                    <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-tamil-terracotta">
                      <Heart size={16} />
                      <span>{itinerary.likes}</span>
                    </button>
                    <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-tamil-terracotta">
                      <Bookmark size={16} />
                      <span>{itinerary.saves}</span>
                    </button>
                    <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-tamil-terracotta">
                      <Share2 size={16} />
                    </button>
                  </div>
                  
                  <Button variant="ghost" className="text-tamil-blue hover:text-tamil-terracotta">
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          {filteredItineraries.length === 0 && (
            <div className="text-center py-12">
              <div className="text-muted-foreground mb-4">No itineraries found for this category.</div>
              <Button 
                variant="outline" 
                onClick={() => setActiveFilter('all')}
                className="border-tamil-terracotta text-tamil-terracotta hover:bg-tamil-terracotta/10"
              >
                View All Itineraries
              </Button>
            </div>
          )}
        </div>
      </section>
      
      <section className="py-12 px-4 bg-muted relative kolam-overlay">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold heading-decorative mb-4 inline-block">Plan with Yuna AI</h2>
            <p className="text-lg max-w-2xl mx-auto">
              Let our AI assistant help you create a personalized itinerary based on your preferences,
              travel style, and interests.
            </p>
          </div>
          
          <div className="max-w-lg mx-auto bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-12 w-12 rounded-full bg-tamil-terracotta text-white flex items-center justify-center font-bold text-xl">Y</div>
              <div>
                <h3 className="font-bold">Yuna AI Travel Planner</h3>
                <p className="text-sm text-muted-foreground">Personalized itineraries in seconds</p>
              </div>
            </div>
            
            <div className="space-y-4 mb-4">
              <div className="bg-muted p-3 rounded-lg rounded-tl-none max-w-[80%]">
                Hello! I can help you plan your trip to Tamil Nadu. How many days will you be traveling?
              </div>
              <div className="bg-tamil-blue text-white p-3 rounded-lg rounded-tr-none ml-auto max-w-[80%]">
                I'll be visiting for 5 days and I'm interested in temples and nature.
              </div>
              <div className="bg-muted p-3 rounded-lg rounded-tl-none max-w-[80%]">
                Great! I recommend splitting your time between Madurai (for the magnificent Meenakshi Temple) and Kodaikanal (for scenic natural beauty). Would you like a detailed day-by-day plan?
              </div>
            </div>
            
            <Button className="w-full bg-tamil-terracotta hover:bg-tamil-brown">
              Start Planning with Yuna
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Itineraries;
