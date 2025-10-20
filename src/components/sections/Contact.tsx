import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const { t } = useTranslation();

  const contactLinks = [
    {
      icon: Mail,
      label: t('contact.email'),
      href: 'mailto:mertcalkan2001@gmail.com',
      color: 'text-red-500',
    },
    {
      icon: Linkedin,
      label: t('contact.linkedin'),
      href: 'https://linkedin.com/in/mertcalkan',
      color: 'text-blue-500',
    },
    {
      icon: Github,
      label: t('contact.github'),
      href: 'https://github.com/mertcalkan',
      color: 'text-gray-700',
    },
  ];

  return (
    <section id="contact" className="section-container">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-6">{t('contact.title')}</h2>
        <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {t('contact.description')}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {contactLinks.map((link, index) => {
          const Icon = link.icon;
          return (
            <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
              <Card className="smooth-transition hover:shadow-lg hover:-translate-y-1 cursor-pointer group">
                <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                  <div className={`w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${link.color}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-lg">{link.label}</h3>
                </CardContent>
              </Card>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Contact;
