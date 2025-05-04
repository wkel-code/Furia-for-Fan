
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FanForm from '@/components/FanForm';
import WhatsAppButton from '@/components/WhatsAppButton';
import FuriaLogo from '@/components/FuriaLogo';

const Index = () => {
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
        <div className="mt-4 md:mt-12">
          {/* Form Section - Now full width */}
          <div className="max-w-3xl mx-auto">
            <FanForm />
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
