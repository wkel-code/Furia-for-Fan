
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface ConnectionsFormProps {
  onNext: () => void;
  onPrev: () => void;
}

const ConnectionsForm: React.FC<ConnectionsFormProps> = ({ onNext, onPrev }) => {
  const [socialLinks, setSocialLinks] = useState({
    instagram: '',
    twitter: '',
    steam: '',
  });

  const [esportsLinks, setEsportsLinks] = useState({
    hltv: '',
    liquipedia: '',
    faceit: '',
  });

  const handleSocialChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSocialLinks(prev => ({ ...prev, [name]: value }));
  };

  const handleEsportsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEsportsLinks(prev => ({ ...prev, [name]: value }));
  };

  const handleSocialLogin = (platform: string) => {
    // In a real app, this would initiate OAuth flow
    alert(`Login com ${platform} seria iniciado aqui`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would validate and store this data
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="animate-slide-in">
      <h3 className="text-2xl md:text-3xl text-furia-orange mb-6">Conexões</h3>
      
      <div className="space-y-8">
        {/* Social Login Section */}
        <div>
          <h4 className="text-xl text-furia-white mb-4">Login Social</h4>
          <div className="flex flex-wrap gap-4">
            <Button 
              type="button" 
              onClick={() => handleSocialLogin('Instagram')}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium py-2 px-6 rounded-md hover:opacity-90 transition-all flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              Instagram
            </Button>
            
            <Button 
              type="button" 
              onClick={() => handleSocialLogin('Twitter')}
              className="bg-[#1DA1F2] text-white font-medium py-2 px-6 rounded-md hover:bg-[#1a91da] transition-all flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              Twitter
            </Button>
            
            <Button 
              type="button" 
              onClick={() => handleSocialLogin('Steam')}
              className="bg-[#171a21] text-white font-medium py-2 px-6 rounded-md hover:bg-[#2a3445] transition-all flex items-center"
            >
              <svg width="20" height="20" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="mr-2"><path d="M8 0a8 8 0 00-8 7.47c.07.1.13.21.18.32l4.15 1.67a2.2 2.2 0 011.31-.36l1.97-2.8v-.04c0-1.65 1.37-3 3.05-3a3.03 3.03 0 013.05 3 3.03 3.03 0 01-3.15 3l-2.82 2.01c0 .08-.03.17-.03.26a2.17 2.17 0 01-4.23.6L.29 10.7A8.02 8.02 0 008 16a8 8 0 000-16zm4.58 6.25a1.85 1.85 0 00-3.69.04 1.82 1.82 0 001.04 1.7l.95.38a1.28 1.28 0 01.58 1.77 1.3 1.3 0 01-1.8.56l-.89-.35a1.33 1.33 0 01-2.27-.86c0-.08.02-.15.04-.22L4.27 7.79a3.3 3.3 0 01-.82-2.17c0-1.85 1.5-3.34 3.34-3.34 1.82 0 3.3 1.45 3.33 3.27l.91-1.3a1.83 1.83 0 011.7 1.85zm-7.58 7.65a.82.82 0 00.82-1.24l.07-.02 1.78-.7.01.02c.14.04.3.05.45.05.94 0 1.71-.77 1.71-1.71 0-.94-.77-1.7-1.7-1.7-.94 0-1.71.76-1.71 1.7v.02L4.7 10.97l-.07.02a.83.83 0 00-1.5.46.82.82 0 001.45.45z"/></svg>
              Steam
            </Button>
          </div>
        </div>
        
        {/* Social Links Section */}
        <div>
          <h4 className="text-xl text-furia-white mb-4">Links de Redes Sociais</h4>
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="instagram" className="block text-furia-white">Instagram</label>
              <div className="flex">
                <span className="inline-flex items-center px-3 bg-furia-gray/20 border border-r-0 border-furia-orange/50 rounded-l-md text-furia-gray">
                  instagram.com/
                </span>
                <Input
                  id="instagram"
                  name="instagram"
                  value={socialLinks.instagram}
                  onChange={handleSocialChange}
                  placeholder="seu_usuario"
                  className="furia-input rounded-l-none"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="twitter" className="block text-furia-white">Twitter</label>
              <div className="flex">
                <span className="inline-flex items-center px-3 bg-furia-gray/20 border border-r-0 border-furia-orange/50 rounded-l-md text-furia-gray">
                  twitter.com/
                </span>
                <Input
                  id="twitter"
                  name="twitter"
                  value={socialLinks.twitter}
                  onChange={handleSocialChange}
                  placeholder="seu_usuario"
                  className="furia-input rounded-l-none"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="steam" className="block text-furia-white">Steam</label>
              <div className="flex">
                <span className="inline-flex items-center px-3 bg-furia-gray/20 border border-r-0 border-furia-orange/50 rounded-l-md text-furia-gray">
                  steamcommunity.com/id/
                </span>
                <Input
                  id="steam"
                  name="steam"
                  value={socialLinks.steam}
                  onChange={handleSocialChange}
                  placeholder="seu_id"
                  className="furia-input rounded-l-none"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Esports Links Section */}
        <div>
          <h4 className="text-xl text-furia-white mb-4">Plataformas de Esports</h4>
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="hltv" className="block text-furia-white">HLTV</label>
              <div className="flex">
                <span className="inline-flex items-center px-3 bg-furia-gray/20 border border-r-0 border-furia-orange/50 rounded-l-md text-furia-gray">
                  hltv.org/profile/
                </span>
                <Input
                  id="hltv"
                  name="hltv"
                  value={esportsLinks.hltv}
                  onChange={handleEsportsChange}
                  placeholder="id"
                  className="furia-input rounded-l-none"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="liquipedia" className="block text-furia-white">Liquipedia</label>
              <div className="flex">
                <span className="inline-flex items-center px-3 bg-furia-gray/20 border border-r-0 border-furia-orange/50 rounded-l-md text-furia-gray">
                  liquipedia.net/counterstrike/
                </span>
                <Input
                  id="liquipedia"
                  name="liquipedia"
                  value={esportsLinks.liquipedia}
                  onChange={handleEsportsChange}
                  placeholder="seu_perfil"
                  className="furia-input rounded-l-none"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="faceit" className="block text-furia-white">FACEIT</label>
              <div className="flex">
                <span className="inline-flex items-center px-3 bg-furia-gray/20 border border-r-0 border-furia-orange/50 rounded-l-md text-furia-gray">
                  faceit.com/en/players/
                </span>
                <Input
                  id="faceit"
                  name="faceit"
                  value={esportsLinks.faceit}
                  onChange={handleEsportsChange}
                  placeholder="nickname"
                  className="furia-input rounded-l-none"
                />
              </div>
            </div>
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
            Finalizar
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ConnectionsForm;
