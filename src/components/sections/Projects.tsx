import { useTranslation } from 'react-i18next';
import { useTheme } from "next-themes"; // Tema hook'u
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  shortDescription: string;
  image: string;
  url: string;
}

const Projects = () => {
  const { t, ready } = useTranslation();
  const { theme } = useTheme(); // Mevcut temayı al (dark, light, system)

  if (!ready) {
    return <div className="section-container">Loading...</div>;
  }

  const projectsRaw = t('projects.items', { returnObjects: true });
  const projects = Array.isArray(projectsRaw) ? projectsRaw : [];

  return (
    <section id="projects" className="section-container">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-6">{t('projects.title')}</h2>
        <div className="w-20 h-1 bg-accent mx-auto"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project: Project) => (
          // Karttaki 'group' sınıfını kaldırabiliriz veya buton için bırakabiliriz. Şimdilik bırakalım.
          <Card
            key={project.id}
            className="overflow-hidden smooth-transition hover:shadow-xl flex flex-col"
          >
            {/* Resim Alanı */}
            <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 relative">
              {project.image && project.image !== '/' && project.image !== 'placeholder' && (
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            
            {/* İçerik Alanı - Artık hover efekti yok */}
            <CardContent className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 flex-grow">{project.shortDescription}</p>
              
              {/* Güncellenmiş Buton */}
              <Button
                onClick={() => window.open(project.url, '_blank')}
                // Dark mode'da 'outline', light mode'da 'secondary' variantını kullan
                variant={theme === 'dark' ? 'outline' : 'secondary'}
                size="sm" // 'lg' yerine 'sm' daha estetik durabilir, isteğe bağlı
                className="group w-full mt-auto" // Butona özel 'group'
              >
                {t('projects.viewProject')} 
                <ExternalLink 
                  // Butonun group-hover'ına göre animasyon
                  className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform" 
                />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;