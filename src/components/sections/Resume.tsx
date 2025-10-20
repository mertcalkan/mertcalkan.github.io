import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Code, Layers, Languages } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Resume = () => {
  const { t, ready } = useTranslation();

  if (!ready) {
    return <div className="section-container">Loading...</div>;
  }

  const educationRaw = t('resume.education.items', { returnObjects: true });
  const education = Array.isArray(educationRaw) ? educationRaw : [];

  const technologiesRaw = t('resume.technologies.items', { returnObjects: true });
  const technologies = Array.isArray(technologiesRaw) ? technologiesRaw : [];

  const frameworksRaw = t('resume.frameworks.items', { returnObjects: true });
  const frameworks = Array.isArray(frameworksRaw) ? frameworksRaw : [];

  const languagesRaw = t('resume.languages.items', { returnObjects: true });
  const languages = Array.isArray(languagesRaw) ? languagesRaw : [];

  return (
    <section id="resume" className="section-container bg-muted/30">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-6">{t('resume.title')}</h2>
        <div className="w-20 h-1 bg-accent mx-auto"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {/* Education */}
        <Card className="smooth-transition hover:shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <GraduationCap className="w-5 h-5 text-accent" />
              <span>{t('resume.education.title')}</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {education.map((edu: any, index: number) => (
              <div key={index} className="border-l-2 border-accent pl-4">
                <h4 className="font-semibold">{edu.degree}</h4>
                <p className="text-sm text-muted-foreground">{edu.school}</p>
                <p className="text-sm text-accent font-medium">{edu.year}</p>
                <p className="text-sm mt-1">{edu.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Technologies */}
        <Card className="smooth-transition hover:shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Code className="w-5 h-5 text-accent" />
              <span>{t('resume.technologies.title')}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech: string, index: number) => (
                <Badge key={index} variant="secondary" className="px-3 py-1">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Frameworks */}
        <Card className="smooth-transition hover:shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Layers className="w-5 h-5 text-accent" />
              <span>{t('resume.frameworks.title')}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {frameworks.map((framework: string, index: number) => (
                <Badge key={index} variant="secondary" className="px-3 py-1">
                  {framework}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Languages */}
        <Card className="smooth-transition hover:shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Languages className="w-5 h-5 text-accent" />
              <span>{t('resume.languages.title')}</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {languages.map((lang: any, index: number) => (
              <div key={index} className="flex justify-between items-center">
                <span className="font-medium">{lang.language}</span>
                <Badge variant="outline">{lang.level}</Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Resume;
