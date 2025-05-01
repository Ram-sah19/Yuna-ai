import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { destinations } from '@/data/destinations';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  MapPin, Calendar, Users, Star, Clock, Info, 
  ArrowLeft, Share2, Bookmark, ThumbsUp, Image 
} from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const DestinationDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [destination, setDestination] = useState<typeof destinations[0] | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState('');
  const [visitorCount, setVisitorCount] = useState(0);
  const [showFullGallery, setShowFullGallery] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    
    setTimeout(() => {
      const found = destinations.find(dest => dest.id === id);
      
      if (found) {
        setDestination(found);
        setActiveImage(found.image);
        setVisitorCount(found.recentVisitors);
        
        const interval = setInterval(() => {
          setVisitorCount(prev => {
            const change = Math.floor(Math.random() * 3) - 1;
            return Math.max(prev + change, found.recentVisitors - 10);
          });
        }, 5000);
        
        return () => clearInterval(interval);
      }
      
      setLoading(false);
    }, 800);
  }, [id]);
  
  if (loading && !destination) {
    return (
      <Layout>
        <div className="container py-16 min-h-[70vh] flex items-center justify-center">
          <div className="text-center">
            <div className="h-16 w-16 border-4 border-tamil-terracotta border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading destination...</p>
          </div>
        </div>
      </Layout>
    );
  }
  
  if (!destination) {
    return (
      <Layout>
        <div className="container py-16 min-h-[70vh] flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-4">Destination Not Found</h1>
          <p className="text-muted-foreground mb-6">We couldn't find the destination you're looking for.</p>
          <Link to="/destinations">
            <Button>View All Destinations</Button>
          </Link>
        </div>
      </Layout>
    );
  }
  
  const galleryImages = destination.galleryImages || [
    destination.image,
    `${destination.image}?random=1`,
    `${destination.image}?random=2`,
    `${destination.image}?random=3`,
  ];
  
  return (
    <Layout>
      <section className="bg-muted">
        <div className="container py-6">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-foreground">Home</Link>
            <span className="text-muted-foreground">/</span>
            <Link to="/destinations" className="text-muted-foreground hover:text-foreground">Destinations</Link>
            <span className="text-muted-foreground">/</span>
            <span className="font-medium">{destination.name}</span>
          </div>
        </div>
      </section>
      
      <section className="py-8 px-4">
        <div className="container">
          <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
            <div>
              <Link to="/destinations" className="flex items-center text-muted-foreground mb-3 hover:text-foreground">
                <ArrowLeft size={16} className="mr-1" />
                Back to destinations
              </Link>
              <h1 className="text-3xl font-bold mb-2">{destination.name}</h1>
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="flex items-center">
                  <MapPin size={16} className="mr-1" />
                  <span>{destination.location}</span>
                </div>
                <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
                <div className="flex items-center">
                  <Star size={16} className="text-yellow-400 mr-1" />
                  <span>{destination.rating}</span>
                </div>
                <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
                <div className="flex items-center text-tamil-terracotta">
                  <Users size={16} className="mr-1" />
                  <span>{visitorCount} visiting now</span>
                </div>
              </div>
            </div>
            
            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <Share2 size={18} />
              </Button>
              <Button variant="outline" size="icon">
                <Bookmark size={18} />
              </Button>
              <Button className="bg-tamil-terracotta hover:bg-tamil-brown">
                <ThumbsUp size={18} className="mr-2" />
                Recommend
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-8">
            <div className="lg:col-span-8 rounded-xl overflow-hidden">
              {activeImage && (
                <img 
                  src={activeImage} 
                  alt={destination.name}
                  className="w-full aspect-video object-cover"
                  onError={(e) => {
                    console.error('Image failed to load:', activeImage);
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=800&auto=format&fit=crop';
                  }}
                />
              )}
            </div>
            <div className="lg:col-span-4 grid grid-cols-3 lg:grid-cols-1 gap-4">
              {galleryImages.slice(0, 3).map((img, index) => (
                <div 
                  key={index}
                  className={`rounded-xl overflow-hidden cursor-pointer border-2 ${activeImage === img ? 'border-tamil-terracotta' : 'border-transparent'}`}
                  onClick={() => setActiveImage(img)}
                >
                  <img 
                    src={img} 
                    alt={`${destination.name} ${index + 1}`}
                    className="w-full aspect-video object-cover"
                    onError={(e) => {
                      console.error('Gallery image failed to load:', img);
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=800&auto=format&fit=crop';
                    }}
                  />
                </div>
              ))}
              
              {galleryImages.length > 3 && (
                <Button 
                  variant="outline" 
                  className="w-full flex items-center justify-center gap-2 mt-2"
                  onClick={() => setShowFullGallery(true)}
                >
                  <Image size={16} />
                  <span>View All Photos</span>
                </Button>
              )}
            </div>
          </div>
          
          {showFullGallery && (
            <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setShowFullGallery(false)}>
              <div className="bg-white rounded-xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold">All Photos</h3>
                  <Button variant="ghost" size="sm" onClick={() => setShowFullGallery(false)}>Close</Button>
                </div>
                <Carousel className="w-full">
                  <CarouselContent>
                    {galleryImages.map((img, index) => (
                      <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                          <div className="rounded-xl overflow-hidden">
                            <img 
                              src={img} 
                              alt={`${destination.name} ${index + 1}`}
                              className="w-full aspect-video object-cover"
                              onError={(e) => {
                                console.error('Gallery modal image failed to load:', img);
                                e.currentTarget.src = 'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=800&auto=format&fit=crop';
                              }}
                            />
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
              </div>
            </div>
          )}
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">About {destination.name}</h2>
                  
                  <div className="text-muted-foreground mb-6 space-y-4">
                    {destination.longDescription ? (
                      destination.longDescription.split('\n\n').map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                      ))
                    ) : (
                      <p>{destination.description}</p>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center p-3 bg-muted rounded-lg">
                      <Calendar size={20} className="text-tamil-terracotta mr-3" />
                      <div>
                        <p className="text-sm text-muted-foreground">Best Time to Visit</p>
                        <p className="font-medium">{destination.bestTimeToVisit}</p>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-muted rounded-lg">
                      <Clock size={20} className="text-tamil-terracotta mr-3" />
                      <div>
                        <p className="text-sm text-muted-foreground">Suggested Duration</p>
                        <p className="font-medium">3-4 hours</p>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3">Interesting Facts</h3>
                  <ul className="space-y-3 mb-6">
                    {destination.facts.map((fact, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Info size={18} className="text-tamil-terracotta shrink-0 mt-1" />
                        <span>{fact}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <h3 className="text-xl font-bold mb-3">Nearby Attractions</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {destination.nearbyAttractions.map((attraction, index) => (
                      <div key={index} className="flex items-center p-3 bg-muted rounded-lg">
                        <MapPin size={16} className="text-tamil-terracotta mr-2" />
                        <span>{attraction}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card className="mb-6 sticky top-20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Ask Yuna AI</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Want to know more about {destination.name}? Ask Yuna AI for detailed information.
                  </p>
                  
                  <div className="space-y-3 mb-4">
                    <Button 
                      variant="outline" 
                      className="w-full justify-start text-left h-auto py-2 px-3"
                    >
                      <span className="line-clamp-2">What is the history of {destination.name}?</span>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full justify-start text-left h-auto py-2 px-3"
                    >
                      <span className="line-clamp-2">What's the best way to reach {destination.name}?</span>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full justify-start text-left h-auto py-2 px-3"
                    >
                      <span className="line-clamp-2">Are there any restrictions for visitors?</span>
                    </Button>
                  </div>
                  
                  <Button className="w-full bg-tamil-terracotta hover:bg-tamil-brown">
                    Ask Custom Question
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Visitor Analytics</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm text-muted-foreground">Current Visitors</span>
                        <span className="font-medium">{visitorCount}</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-tamil-terracotta"
                          style={{ width: `${Math.min(visitorCount / 10, 100)}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm text-muted-foreground">Peak Hours</span>
                        <span className="font-medium">10 AM - 2 PM</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-tamil-blue"
                          style={{ width: '75%' }}
                        ></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm text-muted-foreground">Visitor Satisfaction</span>
                        <span className="font-medium">4.8/5</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-tamil-green"
                          style={{ width: '96%' }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 px-4 bg-muted relative kolam-overlay">
        <div className="container">
          <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations
              .filter(d => d.id !== destination.id)
              .slice(0, 4)
              .map(dest => (
                <Link 
                  to={`/destinations/${dest.id}`} 
                  key={dest.id} 
                  className="bg-white rounded-xl overflow-hidden shadow hover:shadow-md transition-shadow group"
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={dest.image} 
                      alt={dest.name} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        console.error('Related destination image failed to load:', dest.image);
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=800&auto=format&fit=crop';
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium mb-1">{dest.name}</h3>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin size={14} className="mr-1" />
                      <span>{dest.location}</span>
                      <div className="ml-auto flex items-center">
                        <Star size={14} className="text-yellow-400 mr-1" />
                        <span>{dest.rating}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            }
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DestinationDetail;
