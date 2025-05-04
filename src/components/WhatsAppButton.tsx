
import React from 'react';
import { MessageSquare } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a 
      href="https://api.whatsapp.com/send/?phone=5511993404466&text&type=phone_number&app_absent=0"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-furia-orange text-furia-black p-3 rounded-full shadow-lg hover:bg-furia-orange/90 transition-all transform hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <MessageSquare size={28} />
    </a>
  );
};

export default WhatsAppButton;
