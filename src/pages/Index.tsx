import { useTranslation } from 'react-i18next'; // 1. Hook'u import et
import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Resume from '@/components/sections/Resume';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import Contact from '@/components/sections/Contact';

const Index = () => {
  // 2. Hook'u bileşenin içinde çağır
  const { t, i18n } = useTranslation(); 
  const isTurkish = i18n.language === 'tr';

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Resume />
      <Projects />
      <Experience />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-card border-t py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-muted-foreground">
          {/* 3. Dil kontrolüne göre metni dinamik olarak göster */}
          <p>
            {'© 2025 '}
            <a 
              href="https://mertcalkan.github.io" 
              className="font-medium text-foreground hover:underline"
            >
              Mert Calkan
            </a>
            {isTurkish ? '. Tüm hakları saklıdır.' : '. All Rights Reserved.'}
          </p>
       
        </div>
      </footer>
    </div>
  );
};

export default Index;