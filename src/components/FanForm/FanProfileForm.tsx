
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

interface FanProfileFormProps {
  onNext: () => void;
  onPrev: () => void;
}

const FanProfileForm: React.FC<FanProfileFormProps> = ({ onNext, onPrev }) => {
  const [selectedGames, setSelectedGames] = useState<string[]>([]);
  const [engagementLevel, setEngagementLevel] = useState<string[]>([]);
  const [attendedEvents, setAttendedEvents] = useState<string[]>([]);

  const games = [
    { id: 'cs2', title: 'Counter-Strike 2' },
    { id: 'valorant', title: 'Valorant' },
    { id: 'lol', title: 'League of Legends' },
    { id: 'dota2', title: 'Dota 2' },
    { id: 'apex', title: 'Apex Legends' },
    { id: 'r6', title: 'Rainbow Six Siege' },
  ];

  const engagementOptions = [
    { id: 'watch_all', title: 'Assisto todos os jogos' },
    { id: 'watch_some', title: 'Assisto alguns jogos' },
    { id: 'buy_products', title: 'Compro produtos da FURIA' },
    { id: 'social_follow', title: 'Sigo nas redes sociais' },
    { id: 'events', title: 'Vou a eventos' },
  ];

  const events = [
    { id: 'major_rio', title: 'Major Rio 2022' },
    { id: 'blast_sp', title: 'BLAST São Paulo' },
    { id: 'iem_sp', title: 'IEM São Paulo' },
    { id: 'esl_one', title: 'ESL One' },
    { id: 'furia_house', title: 'FURIA House' },
  ];

  const toggleGame = (gameId: string) => {
    setSelectedGames(prev => 
      prev.includes(gameId) 
        ? prev.filter(id => id !== gameId) 
        : [...prev, gameId]
    );
  };

  const toggleEngagement = (engagementId: string) => {
    setEngagementLevel(prev => 
      prev.includes(engagementId) 
        ? prev.filter(id => id !== engagementId) 
        : [...prev, engagementId]
    );
  };

  const toggleEvent = (eventId: string) => {
    setAttendedEvents(prev => 
      prev.includes(eventId) 
        ? prev.filter(id => id !== eventId) 
        : [...prev, eventId]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate form fields - at least one game should be selected
    if (selectedGames.length === 0) {
      alert("Por favor, selecione pelo menos um jogo que você acompanha");
      return;
    }
    
    // In a real app, we would store this data or send it to an API
    // For now, just move to the next step
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="animate-slide-in">
      <h3 className="text-2xl md:text-3xl text-furia-orange mb-6">Perfil de Fã</h3>
      
      <div className="space-y-8">
        {/* Games Section */}
        <div>
          <h4 className="text-xl text-furia-white mb-4">Quais jogos você acompanha?</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {games.map((game) => (
              <div key={game.id} className="flex items-start space-x-2">
                <Checkbox 
                  id={`game-${game.id}`} 
                  checked={selectedGames.includes(game.id)}
                  onCheckedChange={() => toggleGame(game.id)}
                  className="data-[state=checked]:bg-furia-orange data-[state=checked]:border-furia-orange border-furia-gray mt-1"
                />
                <label 
                  htmlFor={`game-${game.id}`}
                  className="text-furia-white cursor-pointer"
                >
                  {game.title}
                </label>
              </div>
            ))}
          </div>
        </div>
        
        {/* Engagement Level Section */}
        <div>
          <h4 className="text-xl text-furia-white mb-4">Nível de Engajamento</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {engagementOptions.map((option) => (
              <div key={option.id} className="flex items-start space-x-2">
                <Checkbox 
                  id={`engagement-${option.id}`} 
                  checked={engagementLevel.includes(option.id)}
                  onCheckedChange={() => toggleEngagement(option.id)}
                  className="data-[state=checked]:bg-furia-orange data-[state=checked]:border-furia-orange border-furia-gray mt-1"
                />
                <label 
                  htmlFor={`engagement-${option.id}`}
                  className="text-furia-white cursor-pointer"
                >
                  {option.title}
                </label>
              </div>
            ))}
          </div>
        </div>
        
        {/* Events Section */}
        <div>
          <h4 className="text-xl text-furia-white mb-4">Eventos que você já participou</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {events.map((event) => (
              <div key={event.id} className="flex items-start space-x-2">
                <Checkbox 
                  id={`event-${event.id}`} 
                  checked={attendedEvents.includes(event.id)}
                  onCheckedChange={() => toggleEvent(event.id)}
                  className="data-[state=checked]:bg-furia-orange data-[state=checked]:border-furia-orange border-furia-gray mt-1"
                />
                <label 
                  htmlFor={`event-${event.id}`}
                  className="text-furia-white cursor-pointer"
                >
                  {event.title}
                </label>
              </div>
            ))}
          </div>
        </div>
        
        <div className="pt-6 flex flex-col-reverse md:flex-row gap-4">
          <Button 
            type="button" 
            onClick={onPrev} 
            className="furia-btn-outline w-full md:w-1/2"
          >
            Voltar
          </Button>
          <Button 
            type="submit" 
            className="furia-btn w-full md:w-1/2"
          >
            Próximo Passo
          </Button>
        </div>
      </div>
    </form>
  );
};

export default FanProfileForm;
