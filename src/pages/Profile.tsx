
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import FuriaLogo from '@/components/FuriaLogo';

const Profile = () => {
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
              <span className="text-furia-orange">#</span>PERFIL DE FÃ
            </h2>
            
            <p className="text-furia-white text-lg mb-4">
              Esta página está em desenvolvimento.
            </p>
            <p className="text-furia-gray mb-6">
              Em breve você poderá gerenciar seu perfil completo de fã da FURIA aqui!
            </p>
            
            <div className="bg-furia-black/60 p-6 rounded-lg border border-furia-orange/30 mb-6">
              <h3 className="text-xl text-furia-white mb-4">O que você poderá fazer em breve:</h3>
              <ul className="text-furia-gray space-y-2">
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-furia-orange mt-1">
                    <polyline points="9 11 12 14 22 4"></polyline>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                  <span>Atualizar suas informações pessoais</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-furia-orange mt-1">
                    <polyline points="9 11 12 14 22 4"></polyline>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                  <span>Visualizar seu histórico de eventos</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-furia-orange mt-1">
                    <polyline points="9 11 12 14 22 4"></polyline>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                  <span>Gerenciar suas preferências de comunicação</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-furia-orange mt-1">
                    <polyline points="9 11 12 14 22 4"></polyline>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                  <span>Acessar benefícios exclusivos de fã</span>
                </li>
              </ul>
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

export default Profile;
