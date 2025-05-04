
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FanForm from '@/components/FanForm';
import InstagramFeed from '@/components/InstagramFeed';
import WhatsAppButton from '@/components/WhatsAppButton';
import FuriaLogo from '@/components/FuriaLogo';

const Index = () => {
  return (
    <div className="furia-container bg-black">
      {/* Watermark Background */}
      <div className="furia-bg-watermark">
        <FuriaLogo className="w-[60%] h-auto max-w-[800px] opacity-40" />
      </div>
      
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 mt-4 md:mt-12">
          {/* Form Section */}
          <div className="flex-1">
            <FanForm />
          </div>
          
          {/* Instagram Feed - Hidden on mobile */}
          <div className="lg:w-80 hidden lg:block">
            <div className="sticky top-24">
              <InstagramFeed />
              
              <div className="mt-6 bg-black/60 backdrop-blur-sm p-6 rounded-lg border border-furia-orange/30">
                <h3 className="text-furia-white font-bebas text-2xl mb-4">
                  <span className="text-furia-orange">#</span>GOFURIA
                </h3>
                <p className="text-furia-gray mb-4">
                  Junte-se à comunidade oficial e fique por dentro de todas as novidades da FURIA
                </p>
                <div className="flex space-x-3">
                  <a 
                    href="https://twitter.com/furia" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-furia-gray/20 hover:bg-furia-gray/30 transition-colors p-2 rounded-md"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-furia-gray"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                  </a>
                  <a 
                    href="https://discord.gg/furia" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-furia-gray/20 hover:bg-furia-gray/30 transition-colors p-2 rounded-md"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-furia-gray"><path d="M9 13h6m-3-3v6M15 8h.01M9 8h.01"/><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"/></svg>
                  </a>
                  <a 
                    href="https://youtube.com/furia" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-furia-gray/20 hover:bg-furia-gray/30 transition-colors p-2 rounded-md"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-furia-gray"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
                  </a>
                  <a 
                    href="https://twitch.tv/furia" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-furia-gray/20 hover:bg-furia-gray/30 transition-colors p-2 rounded-md"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-furia-gray"><path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* WhatsApp Button */}
      <WhatsAppButton />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
