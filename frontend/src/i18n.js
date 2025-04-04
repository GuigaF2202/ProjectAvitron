import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  'en-US': {
    translation: {
      hero: {
        enterButton: 'Enter',
        learnMoreButton: 'Learn More'
      },
      homePage: {
        featuresTitle: 'Discover the Metaverse',
        featuresSubtitle: 'A platform with endless possibilities to create, explore and connect',
        galleryTitle: 'Image Gallery',
        gallerySubtitle: 'See some of the stunning environments you can explore',
        ctaTitle: 'Ready to start your journey?',
        ctaButton1: 'Explore Now',
        ctaButton2: 'Create Account'
      },
      features: {
        learnMore: 'Learn more'
      },
      gallery: {
        exploreButton: 'Explore'
      },
      newsletter: {
        title: 'Stay Updated',
        subtitle: 'Subscribe to our newsletter for the latest news and updates',
        nameLabel: 'Your name',
        namePlaceholder: 'Enter your name',
        emailLabel: 'Your email',
        emailPlaceholder: 'youremail@example.com',
        subscribeButton: 'Subscribe',
        loading: 'Processing...',
        privacyNotice: 'By subscribing, you agree to our Privacy Policy and terms of use.',
        successTitle: 'Subscription Confirmed!',
        successMessage: 'You will now receive updates from AviTron Metaverse. Get ready for a unique experience!'
      }
    },
  },
  'pt-BR': {
    translation: {
      hero: {
        enterButton: 'Entrar',
        learnMoreButton: 'Saiba Mais'
      },
      homePage: {
        featuresTitle: 'Descobra o Metaverso',
        featuresSubtitle: 'Uma plataforma com infinitas possibilidades para criar, explorar e conectar',
        galleryTitle: 'Galeria de Imagens',
        gallerySubtitle: 'Veja alguns dos ambientes deslumbrantes que você pode explorar',
        ctaTitle: 'Pronto para começar sua jornada?',
        ctaButton1: 'Explorar Agora',
        ctaButton2: 'Criar Conta'
      },
      features: {
        learnMore: 'Saiba mais'
      },
      gallery: {
        exploreButton: 'Explorar'
      },
      newsletter: {
        title: 'Fique Atualizado',
        subtitle: 'Inscreva-se na nossa newsletter para receber as últimas novidades e atualizações',
        nameLabel: 'Seu nome',
        namePlaceholder: 'Digite seu nome',
        emailLabel: 'Seu e-mail',
        emailPlaceholder: 'seuemail@exemplo.com',
        subscribeButton: 'Inscrever-se',
        loading: 'Processando...',
        privacyNotice: 'Ao se inscrever, você concorda com a nossa Política de Privacidade e termos de uso.',
        successTitle: 'Inscrição Confirmada!',
        successMessage: 'Você agora receberá novidades e atualizações do AviTron Metaverse. Prepare-se para uma experiência única!'
      }
    },
  },
  'es': {
    translation: {
      hero: {
        enterButton: 'Entrar',
        learnMoreButton: 'Más Información'
      },
      homePage: {
        featuresTitle: 'Descubre el Metaverso',
        featuresSubtitle: 'Una plataforma con infinitas posibilidades para crear, explorar y conectar',
        galleryTitle: 'Galería de Imágenes',
        gallerySubtitle: 'Mira algunos de los impresionantes entornos que puedes explorar',
        ctaTitle: '¿Listo para comenzar tu viaje?',
        ctaButton1: 'Explorar Ahora',
        ctaButton2: 'Crear Cuenta'
      },
      features: {
        learnMore: 'Más información'
      },
      gallery: {
        exploreButton: 'Explorar'
      },
      newsletter: {
        title: 'Mantente Actualizado',
        subtitle: 'Suscríbete a nuestro boletín para recibir las últimas noticias y actualizaciones',
        nameLabel: 'Tu nombre',
        namePlaceholder: 'Ingresa tu nombre',
        emailLabel: 'Tu correo electrónico',
        emailPlaceholder: 'tucorreo@ejemplo.com',
        subscribeButton: 'Suscribir',
        loading: 'Procesando...',
        privacyNotice: 'Al suscribirte, aceptas nuestra Política de Privacidad y términos de uso.',
        successTitle: '¡Suscripción Confirmada!',
        successMessage: 'Ahora recibirás actualizaciones de AviTron Metaverse. ¡Prepárate para una experiencia única!'
      }
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'pt-BR',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
