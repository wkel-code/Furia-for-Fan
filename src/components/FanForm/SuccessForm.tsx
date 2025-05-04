
import React from 'react';
import { Button } from '@/components/ui/button';

interface SuccessFormProps {
  onReset: () => void;
}

const SuccessForm: React.FC<SuccessFormProps> = ({ onReset }) => {
  return (
    <div className="text-center py-8 animate-slide-in">
      <div className="mb-8 flex justify-center">
        <div className="rounded-full bg-green-500/20 p-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
            <polyline points="22 4 12 14.01 9 11.01"/>
          </svg>
        </div>
      </div>
      
      <h2 className="text-3xl md:text-4xl text-furia-orange mb-4">Cadastro Concluído!</h2>
      
      <div className="space-y-4 mb-8">
        <p className="text-furia-white text-lg">
          Obrigado por se juntar à Torcida Furiosa.
        </p>
        <p className="text-furia-gray">
          Seus dados foram recebidos com sucesso. Em breve entraremos em contato com mais informações.
        </p>
      </div>
      
      <div className="mb-8">
        <div className="inline-block bg-furia-gray/20 rounded-lg p-6 border border-furia-orange/30">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-furia-orange">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 8v4l3 3"/>
              </svg>
            </div>
          </div>
          <h3 className="text-xl text-furia-white mb-2">Espere por mais!</h3>
          <p className="text-furia-gray">
            Fique ligado em nossos canais oficiais para não perder nenhuma novidade.
          </p>
        </div>
      </div>
      
      <div className="space-y-4">
        <Button 
          onClick={onReset} 
          className="furia-btn-outline"
        >
          Voltar ao início
        </Button>
        <div className="pt-2">
          <a 
            href="https://furia.gg" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-furia-orange hover:text-furia-orange/80 underline"
          >
            Visite nosso site oficial
          </a>
        </div>
      </div>
    </div>
  );
};

export default SuccessForm;
