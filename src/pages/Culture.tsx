
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Music, Users, Utensils } from 'lucide-react';

const Culture = () => {
  const upcomingEvents = [
    {
      id: 1,
      name: "Pongal Festival",
      date: "January 14-17, 2025",
      location: "Throughout Tamil Nadu",
      description: "Tamil harvest festival celebrated with traditional cooking, cultural events, and decorative kolam patterns."
    },
    {
      id: 2,
      name: "Tamil New Year",
      date: "April 14, 2025",
      location: "Throughout Tamil Nadu",
      description: "The first day of the Tamil calendar, celebrated with special prayers, feasts, and cultural performances."
    },
    {
      id: 3,
      name: "Madurai Chithirai Festival",
      date: "April-May 2025",
      location: "Madurai",
      description: "A grand 15-day festival at Meenakshi Temple celebrating the celestial wedding of Goddess Meenakshi to Lord Sundareswarar."
    },
    {
      id: 4,
      name: "Dance Festival Mamallapuram",
      date: "December 20-25, 2024",
      location: "Mahabalipuram",
      description: "Annual dance festival showcasing classical dance forms against the backdrop of ancient monuments."
    },
    {
      id: 5,
      name: "Aadi Perukku",
      date: "August 3, 2025",
      location: "Rivers across Tamil Nadu",
      description: "Festival honoring water bodies, especially the Cauvery River, with rituals and offerings."
    }
  ];

  const culturalSections = [
    {
      title: "Classical Arts",
      icon: <Music className="h-10 w-10 text-tamil-terracotta" />,
      content: "Tamil Nadu is the birthplace of Bharatanatyam, one of India's oldest classical dance forms. The state also boasts rich musical traditions including Carnatic music, characterized by ragas and talas. Traditional instruments like the veena, mridangam, and nagaswaram are integral to Tamil cultural expression.",
      image: "/lovable-uploads/8aab5c4f-5c7d-4982-90d2-cc3f50237a81.png"
    },
    {
      title: "Cuisine & Culinary Traditions",
      icon: <Utensils className="h-10 w-10 text-tamil-terracotta" />,
      content: "Tamil cuisine is renowned for its use of rice, lentils, and spices. Meals are traditionally served on banana leaves, with popular dishes including idli, dosa, sambar, and filter coffee. The cuisine varies across regions, with coastal areas featuring seafood specialties and the Chettinad region known for its fiery spices.",
      image: "/lovable-uploads/b92274e8-ee1d-4cbf-bbab-583737ac329e.png"
    },
    {
      title: "Festivals & Celebrations",
      icon: <Calendar className="h-10 w-10 text-tamil-terracotta" />,
      content: "Tamil Nadu celebrates numerous festivals throughout the year, including Pongal (harvest festival), Thai Poosam (dedicated to Lord Murugan), and Tamil New Year. Each festival has unique rituals, customs, and symbolic significance, often involving temple ceremonies, special foods, and community gatherings.",
      image: "/lovable-uploads/86daf1cc-71bf-4c43-a8a7-360996396a46.png"
    },
    {
      title: "Arts & Crafts",
      icon: <Users className="h-10 w-10 text-tamil-terracotta" />,
      content: "The state's artistic traditions include Tanjore paintings (characterized by gold foil overlays), bronze casting from the Chola period, stone carving, and traditional handloom textiles like Kanchipuram silk sarees. These craft forms have been passed down through generations, preserving ancient techniques and motifs.",
      image: "/lovable-uploads/17519250-d9ec-4951-813a-a5bc01a78fc6.png"
    }
  ];

  return (
    <Layout>
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10"></div>
        <div className="absolute inset-0 bg-cover bg-center" style={{
          backgroundImage: "url('/lovable-uploads/75c7044e-4fcf-4a0c-b8c5-f0cb83362992.png')"
        }}></div>
        
        <div className="container relative z-20 px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Tamil Culture & Heritage</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Explore the rich cultural traditions, arts, and festivals of Tamil Nadu
          </p>
        </div>
      </section>
      
      <section className="py-16 px-4">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="text-3xl font-bold heading-decorative mb-6">Ancient Living Culture</h2>
            <p className="text-lg">
              Tamil culture is one of the world's oldest and richest continuous civilizations, 
              with a history spanning over 2,000 years. From classical arts to vibrant festivals, 
              Tamil Nadu preserves its heritage while embracing modernity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {culturalSections.map((section, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'md:mt-12' : ''}`}>
                <div className="aspect-video overflow-hidden rounded-t-xl">
                  <img 
                    src={section.image} 
                    alt={section.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <Card className="border-t-0 rounded-t-none">
                  <CardHeader className="flex flex-row items-center gap-4">
                    {section.icon}
                    <CardTitle>{section.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{section.content}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 px-4 bg-muted relative kolam-overlay">
        <div className="container">
          <h2 className="text-3xl font-bold heading-decorative mb-8 text-center">Upcoming Cultural Events</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map(event => (
              <Card key={event.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <CardHeader className="bg-tamil-terracotta/10 border-b">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl font-serif">{event.name}</CardTitle>
                    <div className="bg-tamil-terracotta text-white text-xs px-2 py-1 rounded-full">
                      <Calendar className="inline-block mr-1 h-3 w-3" />
                      {event.date}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{event.location}</p>
                </CardHeader>
                <CardContent className="pt-4">
                  <p>{event.description}</p>
                  
                  <button className="mt-3 text-sm text-tamil-blue hover:text-tamil-terracotta flex items-center">
                    View details
                    <svg className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Culture;
