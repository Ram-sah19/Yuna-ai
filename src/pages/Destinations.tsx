
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { destinations } from '@/data/destinations';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { MapPin, Star, Users, Calendar, Search, ChevronRight } from 'lucide-react';

const Destinations = () => {
  const [filteredDestinations, setFilteredDestinations] = useState(destinations);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('default');
  
  useEffect(() => {
    let filtered = [...destinations];
    
    if (searchTerm) {
      filtered = filtered.filter(
        dest => 
          dest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          dest.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          dest.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(dest => 
        dest.category.some(cat => cat.toLowerCase() === selectedCategory.toLowerCase())
      );
    }
    
    switch (sortBy) {
      case 'popular':
        filtered.sort((a, b) => b.recentVisitors - a.recentVisitors);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }
    
    setFilteredDestinations(filtered);
  }, [searchTerm, selectedCategory, sortBy]);
  
  const allCategories = Array.from(
    new Set(destinations.flatMap(dest => dest.category.map(cat => cat.toLowerCase())))
  );
  
  return (
    <Layout>
      <section className="bg-muted py-16 px-4 relative kolam-overlay">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Explore Tamil Nadu Destinations</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Discover ancient temples, stunning hill stations, pristine beaches, and cultural landmarks across Tamil Nadu.
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-md mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
              <Input 
                type="text" 
                placeholder="Search destinations..." 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9"
              />
            </div>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {allCategories.map(cat => (
                  <SelectItem key={cat} value={cat}>
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Default</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="name">Name (A-Z)</SelectItem>
              </SelectContent>
            </Select>
            
            <Button className="bg-tamil-terracotta hover:bg-tamil-brown">
              Apply Filters
            </Button>
          </div>
        </div>
      </section>
      
      <section className="py-16 px-4">
        <div className="container">
          <div className="mb-8">
            <h2 className="text-2xl font-bold">
              {filteredDestinations.length} Destinations Found
            </h2>
          </div>
          
          {filteredDestinations.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDestinations.map(destination => (
                <Link 
                  to={`/destinations/${destination.id}`} 
                  key={destination.id}
                  className="destination-card group rounded-xl overflow-hidden border border-border bg-card shadow hover:shadow-lg transition-all"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={destination.image} 
                      alt={destination.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        console.error('Destination card image failed to load:', destination.image);
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=800&auto=format&fit=crop';
                      }}
                    />
                    <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded-full flex items-center">
                      <Users size={12} className="mr-1" />
                      {destination.recentVisitors} visiting
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-bold text-lg">{destination.name}</h3>
                      <div className="flex items-center bg-muted px-2 py-1 rounded">
                        <Star size={14} className="text-yellow-400 mr-1" />
                        <span className="text-sm font-medium">{destination.rating}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                      <MapPin size={14} />
                      <span>{destination.location}</span>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {destination.shortDescription}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar size={12} />
                        <span>Best: {destination.bestTimeToVisit}</span>
                      </div>
                      
                      <div className="text-tamil-blue flex items-center text-sm font-medium">
                        View Details <ChevronRight size={14} />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No destinations found</h3>
              <p className="text-muted-foreground mb-4">Try adjusting your search criteria</p>
              <Button onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSortBy('default');
              }}>
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Destinations;
