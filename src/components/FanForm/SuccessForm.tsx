
import React from 'react';
import { Button } from '@/components/ui/button';

interface SuccessFormProps {
  onReset: () => void;
}

const FanLevelAnalysis = () => {
  // This would be calculated based on form data in a real app
  // For now, we'll use a random level for demonstration
  const levels = [
    { 
      name: "Fã Casual", 
      class: "casual",
      description: "Você está começando sua jornada com a FURIA! Acompanha alguns jogos e está conhecendo melhor o time de CS:GO.",
      nextSteps: "Assista mais partidas e siga a FURIA nas redes sociais para se manter atualizado."
    },
    { 
      name: "Fã Dedicado", 
      class: "dedicated",
      description: "Você já acompanha a FURIA com frequência e conhece bem os jogadores principais do time de CS:GO!",
      nextSteps: "Participe de eventos presenciais e interaja mais nas redes sociais oficiais."
    },
    { 
      name: "Fã Hardcore", 
      class: "hardcore",
      description: "Você é um verdadeiro FURIOSO! Raramente perde uma partida e conhece estatísticas e histórico do time de CS:GO.",
      nextSteps: "Continue apoiando e considere adquirir produtos oficiais da FURIA."
    },
    { 
      name: "Fã Lendário", 
      class: "legendary",
      description: "Você respira FURIA! Conhece cada detalhe do time de CS:GO, acompanha todas as partidas e participa ativamente da comunidade.",
      nextSteps: "Continue sendo esse torcedor incrível e ajude a expandir a comunidade FURIA!"
    },
  ];
  
  // For demonstration, we'll randomly select a fan level
  const randomLevel = levels[Math.floor(Math.random() * levels.length)];

  return (
    <div className="bg-furia-black/80 border border-furia-orange/30 rounded-lg p-6 mt-6">
      <h3 className="text-2xl text-furia-white font-bebas mb-4">
        <span className="text-furia-orange">#</span>ANÁLISE DE TORCEDOR
      </h3>
      
      <div className="mb-6 flex flex-col items-center">
        <span className={`fan-level-badge ${randomLevel.class} mb-4`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
          {randomLevel.name}
        </span>
        
        <div className="w-full bg-furia-gray/20 h-2 rounded-full overflow-hidden mb-2">
          <div 
            className="bg-furia-orange h-full"
            style={{ width: `${(levels.findIndex(l => l.class === randomLevel.class) + 1) * 25}%` }}
          ></div>
        </div>
        
        <div className="flex justify-between w-full text-xs text-furia-gray">
          <span>Casual</span>
          <span>Lendário</span>
        </div>
      </div>
      
      <p className="text-furia-white mb-4">
        {randomLevel.description}
      </p>
      
      <div className="bg-furia-gray/10 p-4 rounded-md border border-furia-orange/20">
        <h4 className="text-furia-orange font-bebas text-lg mb-2">PRÓXIMOS PASSOS:</h4>
        <p className="text-furia-gray">
          {randomLevel.nextSteps}
        </p>
      </div>
      
      <div className="mt-6 pt-4 border-t border-furia-gray/20">
        <h4 className="text-furia-white font-bebas text-lg mb-2">ESTATÍSTICAS DE FÃ:</h4>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-furia-gray text-sm">Conhecimento do time:</p>
            <div className="w-full bg-furia-gray/20 h-1.5 rounded-full overflow-hidden">
              <div className="bg-furia-orange h-full" style={{ width: `${Math.random() * 100}%` }}></div>
            </div>
          </div>
          <div>
            <p className="text-furia-gray text-sm">Engajamento:</p>
            <div className="w-full bg-furia-gray/20 h-1.5 rounded-full overflow-hidden">
              <div className="bg-furia-orange h-full" style={{ width: `${Math.random() * 100}%` }}></div>
            </div>
          </div>
          <div>
            <p className="text-furia-gray text-sm">Presença em eventos:</p>
            <div className="w-full bg-furia-gray/20 h-1.5 rounded-full overflow-hidden">
              <div className="bg-furia-orange h-full" style={{ width: `${Math.random() * 100}%` }}></div>
            </div>
          </div>
          <div>
            <p className="text-furia-gray text-sm">Colecionador:</p>
            <div className="w-full bg-furia-gray/20 h-1.5 rounded-full overflow-hidden">
              <div className="bg-furia-orange h-full" style={{ width: `${Math.random() * 100}%` }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SuccessForm: React.FC<SuccessFormProps> = ({ onReset }) => {
  return (
    <div className="animate-slide-in">
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
          Seus dados foram recebidos com sucesso. Confira sua análise de torcedor abaixo:
        </p>
      </div>
      
      <FanLevelAnalysis />
      
      <div className="space-y-4 mt-8 pt-6 border-t border-furia-gray/20">
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
