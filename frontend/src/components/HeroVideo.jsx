import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import "./HeroVideo.css";

const HeroVideo = () => {
  const { t } = useTranslation();
  const phrases = [
    "Dive into Dimensions Beyond Reality.",
    "Unlock Infinite Realms of Possibility.",
    "Experience the Extraordinary in Every Pixel.",
    "Where Imagination Meets Immersive Reality.",
    "Step Beyond Boundaries into Virtual Wonders.",
    "Transforming Dreams into Digital Experiences.",
    "Journey Through Worlds Crafted by Creativity.",
    "Embrace the Future: Live the Virtual Adventure.",
    "Redefine Reality: Explore the Unseen.",
    "Enter a Universe Where Fantasy Feels Real.",
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [showFinalPhrase, setShowFinalPhrase] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    let typingInterval;
    let charIndex = 0;

    const typePhrase = () => {
      const currentPhrase = phrases[currentPhraseIndex];
      if (charIndex < currentPhrase.length) {
        setTypedText((prev) => prev + currentPhrase[charIndex]);
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setTypedText("");
          setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }, 2000);
      }
    };

    typingInterval = setInterval(typePhrase, 30);

    return () => clearInterval(typingInterval);
  }, [currentPhraseIndex]);

  useEffect(() => {
    const finalPhraseTimer = setTimeout(() => {
      setShowFinalPhrase(true);
    }, 170000);

    return () => clearTimeout(finalPhraseTimer);
  }, []);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center text-white overflow-hidden">
      {/* Contêiner do vídeo */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <video
          className="min-w-full min-h-full absolute object-cover"
          src="/video/hero.mp4"
          type="video/mp4"
          autoPlay
          muted
          loop
        ></video>
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent"></div>
        
        {/* Grade cyberpunk */}
        <div className="cyberpunk-grid"></div>
      </div>

      {/* Conteúdo sobreposto */}
      <div className={`space-y-8 z-10 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="glow-text-container mb-8">
          <h1 className="font-bold text-7xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">AviTron</h1>
          <p className="text-2xl mt-4 text-blue-300">Where your imagination meets reality</p>
        </div>
        
        {!showFinalPhrase && (
          <h3 className="font-light text-3xl my-6 min-h-[4rem]">{typedText}</h3>
        )}
        
        <div className="mt-16 flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="cyberpunk-button w-48 h-14 text-lg">
            {t('hero.enterButton', 'Enter')}
          </button>
          <button className="cyberpunk-button-pink w-48 h-14 text-lg">
            {t('hero.learnMoreButton', 'Learn More')}
          </button>
        </div>
      </div>

      {/* Última frase fixa no final, exibida após 2:50 */}
      {showFinalPhrase && (
        <div
          className="absolute w-full text-center text-xl font-light text-gray-300"
          style={{ bottom: "2rem" }}
        >
          Enter a Universe Where Fantasy Feels Real.
        </div>
      )}
      
      {/* Seta de rolagem */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <svg className="w-10 h-10 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroVideo;
