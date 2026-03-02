import { ExternalLink, Presentation, Smartphone, Layout, FileText } from "lucide-react";
import React from 'react';
import { useLanguage } from "../LanguageContext";

interface PortfolioProject {
  title: string;
  category: string;
  description: string;
  link?: string;
  image?: string;
  tags: string[];
  icon: React.ElementType;
}

const PortfolioSection = () => {
  const { t } = useLanguage();

  const projects: PortfolioProject[] = [
    {
      title: t("Cheq – HR Platform Rebranding (Koncepció)", "Cheq – HR Platform Rebranding (Concept)"),
      category: t("UI/UX Redesign, B2B SaaS", "UI/UX Redesign, B2B SaaS"),
      description: t(
        "HR platform rebrandingje azzal a céllal, hogy kitörjön a hagyományos SaaS dizájnok tengeréből. Merész, emberközpontú vizuális világ és konverzióoptimalizált landing page egyben.",
        "Rebranding an HR platform to break out from the sea of conventional SaaS designs. A bold, human-centric visual identity combined with a conversion-optimized landing page."
      ),
      image: "/cheqproject.png",
      link: "https://cheq-design.vercel.app/",
      tags: ["UI/UX Design", "Rebranding", "Landing Page", "AI tools", "B2B", "SaaS Concept", "Desktop only"],
      icon: Layout
    },
    {
      title: t("PastPay – B2B Eseménymarketing (Koncepció)", "PastPay – B2B Event Marketing (Concept)"),
      category: t("Marketing, Print Design, Fintech", "Marketing, Print Design, Fintech"),
      description: t(
        "Proaktív vizuális koncepcióterv egy B2B BNPL szolgáltató offline megjelenéséhez. A fókuszban az edukációs anyagok (pl. komplex folyamatok vizuális lefordítása) és az azonnali konverziót, helyszíni regisztrációt ösztönző nyomtatott anyagok tervezése állt.",
        "Proactive visual concept design for the offline presence of a B2B BNPL provider. The focus was on designing educational materials (e.g., translating complex processes visually) and print assets that drive immediate conversion and on-site registration."
      ),
      image: "/pastpay-borito.png",
      link: "/pastpay_eventmarketing_designs.pdf",
      tags: ["Print Design", "Event Marketing", "B2B", "Fintech", "Concept", "Photoshop"
      ],
      icon: FileText
    },
    {
      title: t("Prezentációk, egyéb projektek", "Presentations & Other Projects"),
      category: t("Marketing, Kereskedelem, Beszerzés", "Marketing, Commerce, Procurement"),
      description: t(
        "Deciem piaci elemzés és Unicum kereskedelmi stratégia, költségcsökkentés és döntéselőkészítés Excel modellezéssel, Figyelemfelkeltő 'One-pager' Opel Corsa értékesítési anyag.",
        "Deciem market analysis and Unicum trade strategy, cost reduction and decision support with Excel modeling, engaging 'One-pager' sales material for Opel Corsa."
      ),
      image: "/prezi-borito-1.jpg",
      link: "https://drive.google.com/drive/folders/1oFEzPhNzDHii4ORk8MagDpI5PfUuAVN2?usp=drive_link",
      tags: ["Marketing", t("Piackutatás", "Market Research"), "PowerPoint", t("Kereskedelem", "Commerce"), t("Beszerzés", "Procurement"), "Excel", "Canva"],
      icon: Presentation
    },
    {
      title: t("CherryOnTop Webalkalmazás", "CherryOnTop Web Application"),
      category: "UI/UX design, Web Development",
      description: t(
        "Tanulást segítő applikáció koncepció. Interaktív prototípus és landing page terv.",
        "Study aid application concept. Interactive prototype and landing page design."
      ),
      image: "/app-mockup.jpg",
      link: "https://cherryontopthestudyapp.vercel.app/",
      tags: ["UI/UX Design", "App Concept"],
      icon: Smartphone
    },
  ];

  return (
    <section className="rounded-2xl p-6 shadow-md transition-colors duration-300 bg-white border border-gray-100 dark:bg-zinc-900 dark:border-zinc-800">
      <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 text-gray-900 dark:text-white">
        <div className="w-1 h-6 bg-primary rounded-full" />
        {t("Portfólió", "Portfolio")}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col rounded-xl overflow-hidden transition-all duration-300 group bg-white border border-gray-200 hover:shadow-lg hover:border-primary/30 dark:bg-zinc-800 dark:border-zinc-700">
            <div className="h-48 w-full bg-gray-100 dark:bg-zinc-900 relative overflow-hidden group-hover:opacity-90 transition-opacity">
              {project.image ? (
                <img src={project.image} alt={project.title} className="w-full h-full object-contain p-4" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <project.icon className="w-16 h-16" />
                </div>
              )}
              <div className="absolute top-3 left-3 px-2 py-1 rounded text-xs font-medium shadow-sm backdrop-blur-sm bg-white/90 text-gray-900 dark:bg-black/80 dark:text-white">
                {project.category}
              </div>
            </div>

            <div className="p-5 flex flex-col flex-1">
              <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-sm mb-4 flex-1 text-gray-600 dark:text-gray-300">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs px-2 py-1 rounded-md font-medium bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground">
                    {tag}
                  </span>
                ))}
              </div>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-auto w-full flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-semibold transition-colors bg-primary/10 text-primary hover:bg-primary hover:text-white dark:bg-primary/20 dark:text-white dark:hover:bg-primary">
                  {t("Megtekintés", "View Project")} <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PortfolioSection;