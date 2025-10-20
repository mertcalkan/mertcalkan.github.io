import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ExternalLink } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  image: string;
}

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, ready } = useTranslation();

  if (!ready) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div>Loading...</div>
      </div>
    );
  }

  const projectsRaw = t('projects.items', { returnObjects: true });
  const projects = Array.isArray(projectsRaw) ? projectsRaw : [];
  const project = projects.find((p: any) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Button onClick={() => navigate('/')}>
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <Button variant="ghost" onClick={() => navigate('/')} className="mb-4">
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Portfolio
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="space-y-8">
          {/* Project Header */}
          <div>
            <h1 className="text-5xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl text-muted-foreground">{project.shortDescription}</p>
          </div>

          {/* Project Image */}
          <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg flex items-center justify-center">
            <ExternalLink className="w-24 h-24 text-accent" />
          </div>

          {/* Technologies */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies && Array.isArray(project.technologies) && project.technologies.map((tech: string, index: number) => (
                <Badge key={index} variant="secondary" className="px-4 py-2 text-base">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Full Description */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">About This Project</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Project Features */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-accent rounded-full mt-2"></span>
                <span className="text-muted-foreground">Modern and responsive user interface</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-accent rounded-full mt-2"></span>
                <span className="text-muted-foreground">Optimized performance and fast loading times</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-accent rounded-full mt-2"></span>
                <span className="text-muted-foreground">Clean, maintainable code architecture</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="pt-8">
            <Button size="lg" className="group">
              {t('projects.viewProject')}
              <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
