
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Search, User, LogOut, Map, Coffee, BookOpen, Home } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    // Check if user is logged in
    const user = localStorage.getItem('user');
    setIsLoggedIn(!!user);
    
    // Add scroll listener
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    navigate('/');
  };
  
  const handleLogin = () => {
    navigate('/login');
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2 hover-lift">
            <span className="h-9 w-9 rounded-full bg-gradient-to-r from-tamil-terracotta to-tamil-coral text-white flex items-center justify-center font-bold shadow-md">Y</span>
            <span className="font-serif text-xl font-bold gradient-text">Yuna</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className={`nav-link text-sm font-medium flex items-center gap-1.5 ${isActive('/') ? 'text-tamil-terracotta' : ''}`}>
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Link>
          <Link to="/destinations" className={`nav-link text-sm font-medium flex items-center gap-1.5 ${isActive('/destinations') ? 'text-tamil-terracotta' : ''}`}>
            <Map className="w-4 h-4" />
            <span>Destinations</span>
          </Link>
          <Link to="/itineraries" className={`nav-link text-sm font-medium flex items-center gap-1.5 ${isActive('/itineraries') ? 'text-tamil-terracotta' : ''}`}>
            <Coffee className="w-4 h-4" />
            <span>Itineraries</span>
          </Link>
          <Link to="/culture" className={`nav-link text-sm font-medium flex items-center gap-1.5 ${isActive('/culture') ? 'text-tamil-terracotta' : ''}`}>
            <BookOpen className="w-4 h-4" />
            <span>Culture</span>
          </Link>
          <Link to="/about" className={`nav-link text-sm font-medium flex items-center gap-1.5 ${isActive('/about') ? 'text-tamil-terracotta' : ''}`}>
            <User className="w-4 h-4" />
            <span>About</span>
          </Link>
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-tamil-cream hover:text-tamil-terracotta">
            <Search className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-tamil-cream hover:text-tamil-terracotta">
            <Globe className="h-4 w-4" />
          </Button>
          {isLoggedIn ? (
            <Button variant="outline" className="rounded-full border-tamil-terracotta text-tamil-terracotta hover:bg-tamil-terracotta hover:text-white" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          ) : (
            <Button className="rounded-full bg-gradient-to-r from-tamil-terracotta to-tamil-coral hover:from-tamil-coral hover:to-tamil-terracotta text-white shadow-md" onClick={handleLogin}>
              Login
            </Button>
          )}
        </div>
        
        {/* Mobile Menu Toggle */}
        <Button variant="ghost" size="icon" onClick={toggleMenu} className="md:hidden hover:bg-tamil-cream hover:text-tamil-terracotta rounded-full">
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-white/95 backdrop-blur-md border-b border-border shadow-md z-50 animate-fade-in">
          <nav className="flex flex-col p-4 gap-3">
            <Link to="/" className={`py-2.5 px-3 rounded-lg font-medium flex items-center gap-2 ${isActive('/') ? 'bg-tamil-cream text-tamil-terracotta' : 'hover:bg-muted'}`} onClick={toggleMenu}>
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
            <Link to="/destinations" className={`py-2.5 px-3 rounded-lg font-medium flex items-center gap-2 ${isActive('/destinations') ? 'bg-tamil-cream text-tamil-terracotta' : 'hover:bg-muted'}`} onClick={toggleMenu}>
              <Map className="h-4 w-4" />
              <span>Destinations</span>
            </Link>
            <Link to="/itineraries" className={`py-2.5 px-3 rounded-lg font-medium flex items-center gap-2 ${isActive('/itineraries') ? 'bg-tamil-cream text-tamil-terracotta' : 'hover:bg-muted'}`} onClick={toggleMenu}>
              <Coffee className="h-4 w-4" />
              <span>Itineraries</span>
            </Link>
            <Link to="/culture" className={`py-2.5 px-3 rounded-lg font-medium flex items-center gap-2 ${isActive('/culture') ? 'bg-tamil-cream text-tamil-terracotta' : 'hover:bg-muted'}`} onClick={toggleMenu}>
              <BookOpen className="h-4 w-4" />
              <span>Culture</span>
            </Link>
            <Link to="/about" className={`py-2.5 px-3 rounded-lg font-medium flex items-center gap-2 ${isActive('/about') ? 'bg-tamil-cream text-tamil-terracotta' : 'hover:bg-muted'}`} onClick={toggleMenu}>
              <User className="h-4 w-4" />
              <span>About</span>
            </Link>
            <div className="flex items-center gap-4 pt-2 border-t mt-2">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-tamil-cream hover:text-tamil-terracotta">
                <Search className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-tamil-cream hover:text-tamil-terracotta">
                <Globe className="h-4 w-4" />
              </Button>
              {isLoggedIn ? (
                <Button variant="outline" className="rounded-full border-tamil-terracotta text-tamil-terracotta hover:bg-tamil-terracotta hover:text-white flex-1" onClick={handleLogout}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              ) : (
                <Button className="rounded-full bg-gradient-to-r from-tamil-terracotta to-tamil-coral hover:from-tamil-coral hover:to-tamil-terracotta text-white shadow-md flex-1" onClick={handleLogin}>
                  Login
                </Button>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
