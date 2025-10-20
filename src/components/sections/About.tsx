import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="section-container">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">{t('about.title')}</h2>
        <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
        <p className="text-lg text-muted-foreground leading-relaxed">
          {t('about.description')}
        </p>
      </div>
    </section>
  );
};

export default About;
