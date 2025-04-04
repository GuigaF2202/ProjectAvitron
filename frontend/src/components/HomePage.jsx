import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import HeroVideo from './HeroVideo';
import AnimatedImageGallery from './AnimatedImageGallery';
import Newsletter from './Newsletter';
import FeatureSection from './FeatureSection';
import ParticlesBackground from './ParticlesBackground';
import '../index.css';

const HomePage = () => {
  const { t } = useTranslation();
  
  useEffect(() => {
    // Animação de aparecer gradualmente nos elementos
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <ParticlesBackground />
      
      {/* Seção Hero */}
      <section className="w-full h-screen relative overflow-hidden">
        <HeroVideo />
      </section>
      
      {/* Seção Recursos */}
      <section className="w-full py-24 bg-zinc-900/90 relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-4 text-white fade-in">
            {t('homePage.featuresTitle', 'Descobra o Metaverso')}
          </h2>
          <p className="text-xl text-center text-blue-300 mb-16 max-w-3xl mx-auto fade-in">
            {t('homePage.featuresSubtitle', 'Uma plataforma com infinitas possibilidades para criar, explorar e conectar')}
          </p>
          
          <FeatureSection />
        </div>
      </section>
      
      {/* Seção Galeria */}
      <section className="w-full py-24 bg-black/95 relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-4 text-white fade-in">
            {t('homePage.galleryTitle', 'Galeria de Imagens')}
          </h2>
          <p className="text-xl text-center text-purple-300 mb-16 max-w-3xl mx-auto fade-in">
            {t('homePage.gallerySubtitle', 'Veja alguns dos ambientes deslumbrantes que você pode explorar')}
          </p>
          
          <AnimatedImageGallery />
        </div>
      </section>
      
      {/* Seção Newsletter */}
      <section className="w-full py-24 bg-gradient-to-b from-zinc-900 to-black relative z-10">
        <div className="container mx-auto px-4">
          <Newsletter />
        </div>
      </section>
      
      {/* CTA Final */}
      <section className="w-full py-16 bg-blue-900/30 backdrop-blur-md relative z-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white fade-in">
            {t('homePage.ctaTitle', 'Pronto para começar sua jornada?')}
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="cyberpunk-button text-xl px-10 py-4">
              {t('homePage.ctaButton1', 'Explorar Agora')}
            </button>
            <button className="cyberpunk-button-pink text-xl px-10 py-4">
              {t('homePage.ctaButton2', 'Criar Conta')}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
