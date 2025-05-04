
import React from 'react';

const InstagramFeed = () => {
  // Mock Instagram posts - in a real app, these would come from Instagram API
  const posts = [
    {
      id: 'post1',
      imageUrl: 'https://picsum.photos/300/300?random=1',
      likes: 1254,
      comments: 45,
      caption: 'Preparados para o próximo campeonato! #GOFURIA',
      date: '2 dias atrás'
    },
    {
      id: 'post2',
      imageUrl: 'https://picsum.photos/300/300?random=2',
      likes: 2187,
      comments: 78,
      caption: 'Anunciando nossa nova line-up de Valorant! 🎮',
      date: '5 dias atrás'
    },
    {
      id: 'post3',
      imageUrl: 'https://picsum.photos/300/300?random=3',
      likes: 3421,
      comments: 125,
      caption: 'FURIA Shop: Novos produtos disponíveis agora! 🛍️',
      date: '1 semana atrás'
    },
  ];

  return (
    <aside className="bg-black/60 backdrop-blur-sm p-6 rounded-lg border border-furia-orange/30">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 p-0.5 rounded-full">
            <div className="bg-black p-0.5 rounded-full">
              <img
                src="https://picsum.photos/100/100?random=5"
                alt="FURIA"
                className="w-10 h-10 rounded-full"
              />
            </div>
          </div>
          <div className="ml-3">
            <h3 className="text-white font-semibold">furia</h3>
            <p className="text-furia-gray text-xs">FURIA Esports</p>
          </div>
        </div>
        <a 
          href="https://instagram.com/furia"
          target="_blank"
          rel="noopener noreferrer"
          className="text-furia-orange hover:text-furia-orange/80 text-sm"
        >
          Seguir
        </a>
      </div>
      
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="border-t border-furia-gray/20 pt-4">
            <div className="aspect-square mb-2 overflow-hidden rounded-md">
              <img
                src={post.imageUrl}
                alt="Instagram post"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex space-x-3">
                <button className="text-furia-white hover:text-furia-orange">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                </button>
                <button className="text-furia-white hover:text-furia-orange">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>
                </button>
              </div>
              <button className="text-furia-white hover:text-furia-orange">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>
              </button>
            </div>
            <p className="text-white text-sm"><span className="font-semibold">{post.likes} curtidas</span></p>
            <p className="text-sm mt-1">
              <span className="text-white font-semibold">furia</span>{' '}
              <span className="text-furia-gray">{post.caption}</span>
            </p>
            <p className="text-furia-gray text-xs mt-1">
              Ver todos os {post.comments} comentários
            </p>
            <p className="text-furia-gray text-xs mt-1.5">
              {post.date}
            </p>
          </div>
        ))}
      </div>
      
      <a 
        href="https://instagram.com/furia" 
        target="_blank"
        rel="noopener noreferrer"
        className="block text-center text-furia-orange hover:underline mt-6 pt-4 border-t border-furia-gray/20"
      >
        Ver mais no Instagram
      </a>
    </aside>
  );
};

export default InstagramFeed;
