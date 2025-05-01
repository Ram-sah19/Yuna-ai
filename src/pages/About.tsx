
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Github, Linkedin, Mail, MapPin, Twitter, Users, Bot, Coffee, Bookmark, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Replace with a high-quality image of Tamil Nadu cultural landmark */}
          <img
            src="/lovable-uploads/place.jpeg"
            alt="Tamil Nadu temple architecture"
            className="w-full h-full object-cover object-center"
          />
          {/* Enhanced gradient overlay with texture */}
          <div className="absolute inset-0 bg-gradient-to-br from-tamil-terracotta/80 via-tamil-brown/70 to-tamil-blue/60 opacity-80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-kolam-pattern opacity-10"></div>
        </div>
        <div className="container relative z-10 px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center"
          >
            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-xl">
              About Tamil Trails
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-8 glass px-8 py-4 rounded-2xl shadow-lg border border-white/30">
              Your AI-powered guide to exploring the wonders of Tamil Nadu
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#mission" className="px-6 py-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-all hover:shadow-lg border border-white/40 flex items-center gap-2">
                <Bookmark className="h-4 w-4" />
                <span>Our Mission</span>
              </a>
              <a href="#yuna" className="px-6 py-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-all hover:shadow-lg border border-white/40 flex items-center gap-2">
                <Bot className="h-4 w-4" />
                <span>Meet Yuna</span>
              </a>
              <a href="#team" className="px-6 py-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-all hover:shadow-lg border border-white/40 flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>Our Team</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Main Content Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-tamil-cream/30 via-white to-tamil-blue/5 relative bg-texture">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
            {/* Left: Mission, Yuna AI, Team */}
            <div className="md:col-span-3 space-y-20">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                id="mission"
                className="scroll-mt-20"
              >
                <h2 className="text-3xl md:text-4xl font-playfair font-bold heading-decorative mb-8 gradient-text">
                  Our Mission
                </h2>
                <div className="glass p-8 rounded-2xl">
                  <p className="text-lg md:text-xl mb-4 text-tamil-brown font-serif leading-relaxed">
                    Tamil Trails was founded with a simple yet powerful mission: to make the rich cultural heritage and breathtaking destinations of Tamil Nadu accessible to travelers from around the world.
                  </p>
                  <p className="mb-4 text-foreground/80 leading-relaxed">
                    We believe travel is about more than just visiting places—it's about understanding the history, connecting with the culture, and creating meaningful experiences. Our AI-powered platform is designed to break down language barriers and provide personalized guidance for every traveler.
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    Whether you're planning your first trip to Tamil Nadu or you're a seasoned explorer, Tamil Trails is your companion every step of the way.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                id="yuna"
                className="scroll-mt-20"
              >
                <h2 className="text-3xl md:text-4xl font-playfair font-bold heading-decorative mb-8 gradient-text">
                  Meet Yuna AI
                </h2>
                <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center mb-8">
                  <div className="h-28 w-28 rounded-full bg-gradient-to-br from-tamil-mustard via-tamil-terracotta to-tamil-coral shadow-lg flex items-center justify-center font-playfair text-white font-bold text-4xl shrink-0 border-4 border-white animate-pulse-slow">
                    Y
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 font-playfair gradient-text">Your Personal Travel Assistant</h3>
                    <p className="text-foreground/80 leading-relaxed">
                      Yuna is more than just an AI assistant—she's your knowledgeable local friend who speaks multiple languages and has centuries of cultural wisdom at her fingertips.
                    </p>
                  </div>
                </div>
                <div className="glass p-8 rounded-2xl">
                  <p className="mb-4 text-foreground/80 leading-relaxed">
                    Trained on Tamil Nadu's history, architecture, cuisine, and traditions, Yuna can answer your questions, suggest itineraries, translate local phrases, and help you navigate like a local.
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    Yuna is constantly learning and improving, with regular updates to ensure the most accurate and current information for all travelers.
                  </p>
                  <div className="mt-6 p-4 bg-tamil-cream/50 rounded-xl border border-tamil-brown/10 flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center">
                      <Coffee className="h-6 w-6 text-tamil-terracotta" />
                    </div>
                    <p className="text-sm italic text-tamil-brown">
                      "My goal is to help you experience Tamil Nadu like a local, finding those hidden gems and magical moments that make travel truly special."
                    </p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                id="team"
                className="scroll-mt-20"
              >
                <h2 className="text-3xl md:text-4xl font-playfair font-bold heading-decorative mb-8 gradient-text">
                  Our Team
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="glass p-6 hover-lift">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="h-12 w-12 rounded-full bg-gradient-to-r from-tamil-teal to-tamil-blue text-white flex items-center justify-center font-bold text-xl">T</div>
                      <div>
                        <h4 className="text-xl font-bold text-tamil-blue">Tanushree</h4>
                        <p className="text-sm text-muted-foreground">Frontend Engineer</p>
                      </div>
                    </div>
                    <p className="text-foreground/80">Key in developing the elegant user interface and experience of our platform.</p>
                  </div>
                  <div className="glass p-6 hover-lift">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="h-12 w-12 rounded-full bg-gradient-to-r from-tamil-green to-tamil-teal text-white flex items-center justify-center font-bold text-xl">V</div>
                      <div>
                        <h4 className="text-xl font-bold text-tamil-blue">Varshitha</h4>
                        <p className="text-sm text-muted-foreground">Backend Engineer</p>
                      </div>
                    </div>
                    <p className="text-foreground/80">Specialized in server-side logic and real-time data integration.</p>
                  </div>
                  <div className="glass p-6 hover-lift">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="h-12 w-12 rounded-full bg-gradient-to-r from-tamil-blue to-tamil-deepblue text-white flex items-center justify-center font-bold text-xl">V</div>
                      <div>
                        <h4 className="text-xl font-bold text-tamil-blue">Vaishnavi</h4>
                        <p className="text-sm text-muted-foreground">Backend Engineer</p>
                      </div>
                    </div>
                    <p className="text-foreground/80">Focused on API development and system optimization for a seamless experience.</p>
                  </div>
                  
                </div>
              </motion.div>
            </div>
            
            {/* Right: Founder/Contact Card */}
            <div className="md:col-span-2">
              <div className="sticky top-24">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  <Card className="overflow-hidden glass border-tamil-terracotta/20 shadow-lg">
                    <div className="h-56 bg-gradient-to-br from-tamil-terracotta via-tamil-coral to-tamil-blue relative">
                      <div className="absolute inset-0 bg-kolam-pattern opacity-20"></div>
                      <div className="absolute -bottom-16 left-1/2 -translate-x-1/2">
                        <div className="h-32 w-32 rounded-full border-4 border-white glass bg-gradient-to-tr from-tamil-terracotta via-tamil-brown to-tamil-mustard flex items-center justify-center font-playfair text-white font-bold text-5xl shadow-lg">
                          R
                        </div>
                      </div>
                    </div>
                    
                    <CardContent className="pt-20 pb-6 text-center">
                      <h3 className="text-2xl font-playfair font-bold mb-1 gradient-text">Rambilas Sah</h3>
                      <p className="text-muted-foreground mb-6">Founder & Lead Developer</p>
                      
                      <p className="mb-6 px-6 text-foreground/80 font-serif leading-relaxed">
                      A passionate software engineer and cultural enthusiast, Rambilas Sah founded YUNA to merge state-of-the-art AI with a deep appreciation for Tamil Nadu’s heritage. Through innovative technology and thoughtful design, he aims to make the region’s rich history and culture accessible to travelers worldwide.
                      </p>

                      
                      
                      <div className="flex items-center justify-center gap-3">
                        <a href="#" className="h-10 w-10 rounded-full bg-white shadow-soft flex items-center justify-center text-tamil-blue hover:bg-tamil-cream hover:text-tamil-terracotta transition-colors hover-lift">
                          <Twitter size={18} />
                        </a>
                        <a href="#" className="h-10 w-10 rounded-full bg-white shadow-soft flex items-center justify-center text-tamil-blue hover:bg-tamil-cream hover:text-tamil-terracotta transition-colors hover-lift">
                          <Linkedin size={18} />
                        </a>
                        <a href="#" className="h-10 w-10 rounded-full bg-white shadow-soft flex items-center justify-center text-tamil-blue hover:bg-tamil-cream hover:text-tamil-terracotta transition-colors hover-lift">
                          <Github size={18} />
                        </a>
                        <a href="#" className="h-10 w-10 rounded-full bg-white shadow-soft flex items-center justify-center text-tamil-blue hover:bg-tamil-cream hover:text-tamil-terracotta transition-colors hover-lift">
                          <Mail size={18} />
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                  className="mt-8 glass p-6 rounded-2xl"
                >
                  <h3 className="font-bold text-lg mb-4 flex items-center text-tamil-terracotta">
                    <MapPin className="h-5 w-5 mr-2 text-tamil-coral" />
                    Our Headquarters
                  </h3>
                  <p className="mb-1">Yuna Technologies</p>
                  <p className="mb-1">Nepal</p>
                  <p className="mb-1">STUDENT OF SONA</p>
                  <p className="mb-4">India</p>
                  <div className="p-3 bg-tamil-cream/40 rounded-lg border border-tamil-brown/10">
                    <p className="text-sm text-tamil-brown flex flex-col gap-2">
                      <span className="flex items-center gap-2">
                        <Mail className="h-4 w-4" /> contact@yuna.com
                      </span>
                      <span className="flex items-center gap-2">
                        <Phone className="h-4 w-4" /> +91 7050869079
                      </span>
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
