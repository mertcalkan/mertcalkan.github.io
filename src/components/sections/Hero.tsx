import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import ProfilePic from "@/assets/me.jpg";

const Hero = () => {
  // 1. 'i18n' nesnesini de alıyoruz. Bu bize mevcut dili verir.
  const { t, i18n } = useTranslation();

  // 2. Mevcut dil 'tr' ise Türkçe CV'yi, değilse İngilizce CV'yi seç.
  const cvPath =
    i18n.language === "tr"
      ? "/Mert Calkan CV-Türkçe.pdf"
      : "/Mert Calkan CV-English.pdf";

  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient pt-16">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center md:justify-start md:ml-[72px] order-1 md:order-1">
            <div className="relative">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-8 border-card shadow-xl">
                <img
                  src={ProfilePic}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="text-center md:text-left order-2 md:order-2">
            <p className="text-muted-foreground font-medium mb-2">
              {t("hero.greeting")}
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">
              {t("hero.name")}
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
              {t("hero.description")}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              {/* 3. Button'u bir <a> etiketi ile sarmalıyoruz */}
              <a 
                href={cvPath} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="group w-full">
                  <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  {t("hero.downloadCV")}
                </Button>
              </a>
              {/* Öneri: İletişim butonunu da link yapabilirsiniz */}
              <a href="#contact">
                 <Button size="lg" variant="outline" className="group w-full">
                    <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    {t("hero.contact")}
                 </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;