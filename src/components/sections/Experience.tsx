import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, CheckCircle2 } from 'lucide-react';

interface ExperienceItem {
  position: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}

const Experience = () => {
  const { t, ready } = useTranslation();

  if (!ready) {
    return <div className="section-container">Loading...</div>;
  }

  const experiencesRaw = t('experience.items', { returnObjects: true });
  const experiences = Array.isArray(experiencesRaw) ? experiencesRaw : [];

  return (
    <section id="experience" className="section-container bg-muted/30">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-6">{t('experience.title')}</h2>
        <div className="w-20 h-1 bg-accent mx-auto"></div>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        {experiences.map((exp: ExperienceItem, index: number) => (
          <Card key={index} className="smooth-transition hover:shadow-lg">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{exp.position}</CardTitle>
                    <p className="text-sm text-muted-foreground">{exp.company}</p>
                  </div>
                </div>
                <span className="text-sm font-medium text-accent">{exp.period}</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{exp.description}</p>
              
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Project Experience Section */}
      {t('experience.projectExperience.items', { returnObjects: true }) && (
        <div className="max-w-4xl mx-auto mt-12">
          <h3 className="text-2xl font-bold mb-6 text-center">{t('experience.projectExperience.title')}</h3>
          <div className="space-y-6">
            {(t('experience.projectExperience.items', { returnObjects: true }) as any[]).map((project, index: number) => (
              <Card key={index} className="smooth-transition hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{project.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight: string, idx: number) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;
