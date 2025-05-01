
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import YunaAIAssistant from './YunaAIAssistant';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <YunaAIAssistant />
      <Footer />
    </div>
  );
};

export default Layout;
