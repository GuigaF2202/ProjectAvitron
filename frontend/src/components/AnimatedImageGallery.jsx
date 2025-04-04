import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const AnimatedImageGallery = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);

  // Dados da galeria (normalmente viriam de uma API)
  const galleryItems = [
    {
      id: 1,
      title: 'Cidade Neon',
      description: 'Explore a vibrante cidade cyberpunk com luzes de neon e arranha-céus futuristas.',
      image: '/images/gallery/image1.jpg',
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 2,
      title: 'Jardins Virtuais',
      description: 'Espaços naturais gerados proceduralmente com flora e fauna alienígenas.',
      image: '/images/gallery/image2.jpg',
      color: 'from-green-500 to-teal-600'
    },
    {
      id: 3,
      title: 'Arena Digital',
      description: 'Participe de competições e batalhas épicas em arenas personalizáveis.',
      image: '/images/gallery/image3.jpg',
      color: 'from-red-500 to-orange-600'
    },
    {
      id: 4,
      title: 'Estação Orbital',
      description: 'Vista panorâmica do espaço em uma estação orbital de última geração.',
      image: '/images/gallery/image4.jpg',
      color: 'from-indigo-500 to-blue-700'
    },
    {
      id: 5,
      title: 'Santuário Aquático',
      description: 'Mergulhe em oceanos virtuais repletos de vida marinha e tesouros escondidos.',
      image: '/images/gallery/image5.jpg',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      id: 6,
      title: 'Templo Ancestral',
      description: 'Enigmas e mistérios aguardam em templos antigos perdidos no tempo.',
      image: '/images/gallery/image6.jpg',
      color: 'from-amber-500 to-yellow-600'
    },
  ];

  // Auto-rotação
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % galleryItems.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [galleryItems.length]);

  return (
    <div className="mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {galleryItems.map((item, index) => (
          <div 
            key={item.id}
            className={`overflow-hidden rounded-lg transition-all duration-500 shadow-lg bg-zinc-800 fade-in ${
              index === activeIndex ? 'scale-105 shadow-xl shadow-blue-500/20 z-10' : 'scale-100'
            }`}
            onMouseEnter={() => setActiveIndex(index)}
          >
            <div className="aspect-video relative">
              {/* Quando não temos imagens reais, usamos um placeholder */}
              <div className={`w-full h-full bg-gradient-to-r ${item.color} animate-pulse`}></div>
              
              {/* Quando temos a imagem real, descomente isto e remova o div acima 
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
              />
              */}
              
              <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm text-xs font-semibold px-2 py-1 rounded-full">
                {item.id < 10 ? `0${item.id}` : item.id}
              </div>
            </div>
            
            <div className="p-5">
              <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.description}</p>
              
              <button className="mt-4 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors flex items-center">
                {t('gallery.exploreButton', 'Explorar')}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedImageGallery;
