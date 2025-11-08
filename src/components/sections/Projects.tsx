import { useTranslation } from 'react-i18next';
import { useTheme } from "next-themes";
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

// Değişiklik 1: Resimleri doğrudan import ediyoruz.
import Artorithm from "@/assets/artorithm.png";
import ArtorithmEdu from "@/assets/artorithmEdu.png";
import ArtorithmLang from "@/assets/artorithmLang.png";
// Diğer projelerin resimleri varsa onları da buraya ekleyebilirsin.
// import ArtorithmBlocks from "@/assets/artorithmblocks.png";

interface Project {
  id: string;
  title: string;
  shortDescription: string;
  image: string; // Bu JSON'dan gelen bilgiyi fallback olarak kullanabiliriz.
  url: string;
}

const Projects = () => {
  const { t, ready } = useTranslation();
  const { theme } = useTheme();

  if (!ready) {
    return <div className="section-container">Loading...</div>;
  }

  // Değişiklik 2: Proje ID'lerini import edilen resimlerle eşleştiren bir nesne oluşturuyoruz.
  const projectImages = {
    'project-1': Artorithm,
    'project-2': ArtorithmEdu,
    'project-3': ArtorithmLang, // Eğer üçüncü resim de varsa
  };

  const projectsRaw = t('projects.items', { returnObjects: true });
  const projects = Array.isArray(projectsRaw) ? projectsRaw : [];

  return (
    <section id="projects" className="section-container">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-6">{t('projects.title')}</h2>
        <div className="w-20 h-1 bg-accent mx-auto"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project: Project) => {
          // Değişiklik 3: Her proje için doğru resim kaynağını belirliyoruz.
          // Eşleşme varsa import edilen resmi, yoksa JSON'daki veriyi kullan.
          const imageSrc = projectImages[project.id] || project.image;

          return (
            <Card
              key={project.id}
              className="overflow-hidden smooth-transition hover:shadow-xl flex flex-col"
            >
              {/* Resim Alanı */}
              <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 relative">
                {imageSrc && imageSrc !== '/' && imageSrc !== 'placeholder' && (
                  <img 
                    src={imageSrc} // Artık dinamik olarak belirlenen kaynağı kullanıyoruz.
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              
              {/* İçerik Alanı */}
              <CardContent className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 flex-grow">{project.shortDescription}</p>
                
                {/* Buton */}
                <Button
                  onClick={() => window.open(project.url, '_blank')}
                  variant={theme === 'dark' ? 'outline' : 'secondary'}
                  size="sm"
                  className="group w-full mt-auto"
                >
                  {t('projects.viewProject')} 
                  <ExternalLink 
                    className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform" 
                  />
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;