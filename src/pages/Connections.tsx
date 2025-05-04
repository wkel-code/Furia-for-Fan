
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import FuriaLogo from '@/components/FuriaLogo';

const Connections = () => {
  return (
    <div className="furia-container bg-furia-black">
      {/* Watermark Background */}
      <div className="furia-bg-watermark">
        <FuriaLogo className="w-[80%] h-auto max-w-[1000px] opacity-20" />
      </div>
      
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-3xl mx-auto">
          <div className="furia-card p-6 md:p-8">
            <h2 className="text-3xl md:text-4xl text-furia-white mb-8">
              <span className="text-furia-orange">#</span>CONEXÕES
            </h2>
            
            <p className="text-furia-white text-lg mb-4">
              Esta página está em desenvolvimento.
            </p>
            <p className="text-furia-gray mb-6">
              Em breve você poderá conectar todas as suas redes sociais e plataformas de games à sua conta FURIA!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-furia-black/60 p-6 rounded-lg border border-furia-orange/30 flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-furia-orange mb-4">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
                <h3 className="text-furia-white text-xl mb-2">Instagram</h3>
                <p className="text-furia-gray text-center">Conecte sua conta do Instagram para compartilhar sua paixão pela FURIA.</p>
              </div>
              
              <div className="bg-furia-black/60 p-6 rounded-lg border border-furia-orange/30 flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-furia-orange mb-4">
                  <path d="M15 11v4.83L18.24 16C20.77 16 22 14.77 22 13V5c0-1.76-1.24-3-3.76-3H5.77C3.23 2 2 3.24 2 5v8c0 1.77 1.23 3 3.76 3H10v5l4.79-5H16"/>
                </svg>
                <h3 className="text-furia-white text-xl mb-2">Discord</h3>
                <p className="text-furia-gray text-center">Entre no servidor oficial da FURIA e conecte sua conta.</p>
              </div>
              
              <div className="bg-furia-black/60 p-6 rounded-lg border border-furia-orange/30 flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-furia-orange mb-4">
                  <path d="M21 8v13H3V8"/>
                  <path d="M1 3h22v5H1z"/>
                  <path d="M10 12h4"/>
                </svg>
                <h3 className="text-furia-white text-xl mb-2">Steam</h3>
                <p className="text-furia-gray text-center">Conecte sua conta Steam para acessar benefícios exclusivos no CS:GO.</p>
              </div>
              
              <div className="bg-furia-black/60 p-6 rounded-lg border border-furia-orange/30 flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-furia-orange mb-4">
                  <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"/>
                </svg>
                <h3 className="text-furia-white text-xl mb-2">Twitch</h3>
                <p className="text-furia-gray text-center">Conecte-se para receber notificações quando a FURIA estiver ao vivo.</p>
              </div>
            </div>
            
            <a href="/" className="furia-btn inline-block">Voltar para Home</a>
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

export default Connections;
