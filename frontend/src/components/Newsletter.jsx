import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Newsletter = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setLoading(true);
      
      // Simulando uma chamada de API
      setTimeout(() => {
        setLoading(false);
        setSubscribed(true);
        setEmail('');
        setName('');
      }, 1500);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative p-8 md:p-12 rounded-2xl overflow-hidden">
        {/* Background com efeito de gradiente */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-purple-900/40 backdrop-blur-md border border-blue-500/20 rounded-2xl"></div>
        
        {/* Grade cyberpunk sutil */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50">
          <div className="w-full h-full opacity-20 bg-[radial-gradient(rgba(120,119,198,0.3)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>
        
        {/* Conteúdo do newsletter */}
        <div className="relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('newsletter.title', 'Fique por dentro')}
            </h2>
            <p className="text-lg md:text-xl text-blue-200 max-w-2xl mx-auto">
              {t('newsletter.subtitle', 'Inscreva-se para receber novidades, atualizações e acesso antecipado às novas funcionalidades.')}
            </p>
          </div>

          {subscribed ? (
            <div className="bg-blue-900/30 border border-blue-500/50 rounded-lg p-8 text-center max-w-md mx-auto fade-in appear">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-2xl font-bold text-blue-300 mb-2">
                {t('newsletter.successTitle', 'Inscrição Confirmada!')}
              </h3>
              <p className="text-blue-100">
                {t('newsletter.successMessage', 'Você agora receberá novidades e atualizações do AviTron Metaverse. Prepare-se para uma experiência única!')}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-blue-200 mb-2">
                    {t('newsletter.nameLabel', 'Seu nome')}
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t('newsletter.namePlaceholder', 'Digite seu nome')}
                    className="w-full px-4 py-3 rounded-lg bg-black/30 border border-blue-500/30 text-white placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-blue-200 mb-2">
                    {t('newsletter.emailLabel', 'Seu e-mail')}
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t('newsletter.emailPlaceholder', 'seuemail@exemplo.com')}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-black/30 border border-blue-500/30 text-white placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  />
                </div>
              </div>
              
              <button
                type="submit"
                disabled={loading}
                className={`w-full mt-6 py-3 px-6 rounded-lg transition-all duration-300 relative overflow-hidden group ${
                  loading 
                    ? 'bg-blue-800 cursor-wait' 
                    : 'bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400'
                }`}
              >
                <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                <span className="relative text-white font-semibold">
                  {loading 
                    ? t('newsletter.loading', 'Processando...') 
                    : t('newsletter.subscribeButton', 'Inscrever-se')}
                </span>
              </button>
              
              <p className="text-xs text-blue-300/70 text-center mt-4">
                {t('newsletter.privacyNotice', 'Ao se inscrever, você concorda com a nossa Política de Privacidade e termos de uso.')}
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
