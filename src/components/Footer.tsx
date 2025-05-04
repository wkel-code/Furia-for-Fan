
import React from 'react';
import FuriaLogo from './FuriaLogo';

const Footer = () => {
  return (
    <footer className="relative bg-black border-t border-furia-orange/30 py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <FuriaLogo className="h-16 w-auto mb-4" />
            <p className="text-furia-gray text-sm">
              #GOFURIA - Tribo mundial de atletas de elite
            </p>
          </div>

          {/* Links Section */}
          <div className="flex flex-col items-center text-center md:text-left">
            <h3 className="text-furia-white text-xl mb-4">Links Rápidos</h3>
            <div className="space-y-2">
              <a href="#" className="text-furia-gray hover:text-furia-orange transition-colors">
                Termos de Uso
              </a>
              <div className="h-0.5"></div>
              <a href="#" className="text-furia-gray hover:text-furia-orange transition-colors">
                Política de Dados
              </a>
              <div className="h-0.5"></div>
              <a href="#" className="text-furia-gray hover:text-furia-orange transition-colors">
                FAQ
              </a>
            </div>
          </div>

          {/* Social Section */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-furia-white text-xl mb-4">Conecte-se</h3>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/furia/" target="_blank" rel="noopener noreferrer" className="furia-social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="https://api.whatsapp.com/send/?phone=5511993404466&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="furia-social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-4 border-t border-furia-gray/20 text-center">
          <p className="text-furia-gray text-sm">
            &copy; {new Date().getFullYear()} FURIA Esports. Made by Torcida Furiosa
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
