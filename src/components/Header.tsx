
import React from 'react';
import { Instagram, MessageSquare } from 'lucide-react';
import FuriaLogo from './FuriaLogo';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-furia-orange/30">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Mobile menu button - will be implemented later */}
        <div className="md:hidden">
          <button className="text-furia-white hover:text-furia-orange">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
        
        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="menu-item-active">Home</a>
          <a href="#" className="menu-item">Perfil</a>
          <a href="#" className="menu-item">Conexões</a>
          <a href="#" className="menu-item">FAQ</a>
        </nav>
        
        {/* FURIA Logo */}
        <div className="flex items-center justify-center flex-shrink-0">
          <FuriaLogo className="h-12 w-auto" />
        </div>
        
        {/* Social Icons */}
        <div className="flex items-center space-x-4">
          <a href="https://www.instagram.com/furia/" target="_blank" rel="noopener noreferrer" className="furia-social-icon">
            <Instagram size={24} />
          </a>
          <a href="https://api.whatsapp.com/send/?phone=5511993404466&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="furia-social-icon">
            <MessageSquare size={24} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
