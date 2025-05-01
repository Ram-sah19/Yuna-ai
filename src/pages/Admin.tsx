
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Home,
  Map,
  Settings,
  Bell,
  Upload,
  Users,
  FileText,
  Lock,
  ChevronRight,
  Plus,
  Trash2,
  Edit
} from 'lucide-react';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  
  return (
    <Layout>
      <div className="container py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage your Historia platform</p>
          </div>
          <Button className="bg-tamil-terracotta hover:bg-tamil-brown">
            <Plus size={16} className="mr-2" />
            Add New Content
          </Button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <Card className="lg:col-span-1 h-fit">
            <CardContent className="p-0">
              <nav className="flex flex-col">
                <Link to="#" className="flex items-center gap-3 p-3 border-l-2 border-tamil-terracotta bg-muted">
                  <Home size={18} />
                  <span>Dashboard</span>
                </Link>
                <Link to="#" className="flex items-center gap-3 p-3 border-l-2 border-transparent hover:bg-muted">
                  <Map size={18} />
                  <span>Destinations</span>
                </Link>
                <Link to="#" className="flex items-center gap-3 p-3 border-l-2 border-transparent hover:bg-muted">
                  <Bell size={18} />
                  <span>Notifications</span>
                </Link>
                <Link to="#" className="flex items-center gap-3 p-3 border-l-2 border-transparent hover:bg-muted">
                  <Upload size={18} />
                  <span>Media</span>
                </Link>
                <Link to="#" className="flex items-center gap-3 p-3 border-l-2 border-transparent hover:bg-muted">
                  <Users size={18} />
                  <span>Users</span>
                </Link>
                <Link to="#" className="flex items-center gap-3 p-3 border-l-2 border-transparent hover:bg-muted">
                  <FileText size={18} />
                  <span>Content</span>
                </Link>
                <Link to="#" className="flex items-center gap-3 p-3 border-l-2 border-transparent hover:bg-muted">
                  <Settings size={18} />
                  <span>Settings</span>
                </Link>
                <Link to="#" className="flex items-center gap-3 p-3 border-l-2 border-transparent text-destructive hover:bg-destructive/10">
                  <Lock size={18} />
                  <span>Logout</span>
                </Link>
              </nav>
            </CardContent>
          </Card>
          
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Analytics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-muted-foreground">Total Destinations</h3>
                    <Map className="text-tamil-terracotta" size={20} />
                  </div>
                  <p className="text-3xl font-bold">24</p>
                  <p className="text-xs text-muted-foreground">+2 added this month</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-muted-foreground">Active Users</h3>
                    <Users className="text-tamil-blue" size={20} />
                  </div>
                  <p className="text-3xl font-bold">1,284</p>
                  <p className="text-xs text-muted-foreground">+18% from last week</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-muted-foreground">Yuna AI Interactions</h3>
                    <FileText className="text-tamil-green" size={20} />
                  </div>
                  <p className="text-3xl font-bold">5,492</p>
                  <p className="text-xs text-muted-foreground">+32% from last week</p>
                </CardContent>
              </Card>
            </div>
            
            {/* Admin Tabs */}
            <Card>
              <CardHeader>
                <CardTitle>Content Management</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="notifications" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="notifications">Notifications</TabsTrigger>
                    <TabsTrigger value="destinations">Destinations</TabsTrigger>
                    <TabsTrigger value="media">Media</TabsTrigger>
                  </TabsList>
                  
                  {/* Notifications Tab */}
                  <TabsContent value="notifications" className="space-y-4">
                    <div className="flex justify-between items-center pt-4">
                      <h3 className="font-medium">Recent Notifications</h3>
                      <Button variant="outline" size="sm">
                        Add New Notice
                      </Button>
                    </div>
                    
                    <div className="space-y-3">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="flex items-start justify-between p-3 border rounded-lg">
                          <div>
                            <h4 className="font-medium">Important Notice #{i}</h4>
                            <p className="text-sm text-muted-foreground">
                              Temple visiting hours updated for the summer season
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">
                              Posted 2 days ago · Visible to all users
                            </p>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="ghost" size="icon">
                              <Edit size={16} />
                            </Button>
                            <Button variant="ghost" size="icon" className="text-destructive">
                              <Trash2 size={16} />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  
                  {/* Destinations Tab */}
                  <TabsContent value="destinations">
                    <div className="flex justify-between items-center pt-4 mb-4">
                      <h3 className="font-medium">Manage Destinations</h3>
                      <Button variant="outline" size="sm">
                        Add New Destination
                      </Button>
                    </div>
                    
                    <div className="space-y-2">
                      {['Madurai Meenakshi Temple', 'Mahabalipuram Shore Temple', 'Brihadeeswarar Temple'].map(name => (
                        <div key={name} className="flex items-center justify-between p-3 border rounded-lg">
                          <span>{name}</span>
                          <div className="flex gap-2">
                            <Button variant="ghost" size="icon">
                              <Edit size={16} />
                            </Button>
                            <Button variant="ghost" size="icon" className="text-destructive">
                              <Trash2 size={16} />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  
                  {/* Media Tab */}
                  <TabsContent value="media">
                    <div className="flex justify-between items-center pt-4 mb-4">
                      <h3 className="font-medium">Media Library</h3>
                      <Button variant="outline" size="sm">
                        Upload Media
                      </Button>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                        <div key={i} className="aspect-square rounded-md overflow-hidden border relative group">
                          <img 
                            src={`https://images.unsplash.com/photo-1516410529446-2c777cb7366d?w=300&h=300&fit=crop&auto=format&q=80&random=${i}`}
                            alt={`Media item ${i}`}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                            <Button variant="ghost" size="icon" className="text-white">
                              <Edit size={16} />
                            </Button>
                            <Button variant="ghost" size="icon" className="text-white">
                              <Trash2 size={16} />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
            
            {/* Yuna AI Config */}
            <Card>
              <CardHeader>
                <CardTitle>Yuna AI Configuration</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg flex items-start justify-between">
                    <div>
                      <h3 className="font-medium">Language Settings</h3>
                      <p className="text-sm text-muted-foreground">
                        Configure available languages for Yuna AI assistant
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      Configure <ChevronRight size={14} className="ml-1" />
                    </Button>
                  </div>
                  
                  <div className="p-4 border rounded-lg flex items-start justify-between">
                    <div>
                      <h3 className="font-medium">Knowledge Base</h3>
                      <p className="text-sm text-muted-foreground">
                        Update Yuna's knowledge about destinations and culture
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      Manage <ChevronRight size={14} className="ml-1" />
                    </Button>
                  </div>
                  
                  <div className="p-4 border rounded-lg flex items-start justify-between">
                    <div>
                      <h3 className="font-medium">Voice Settings</h3>
                      <p className="text-sm text-muted-foreground">
                        Configure voice interaction settings for Yuna AI
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      Customize <ChevronRight size={14} className="ml-1" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Admin;
