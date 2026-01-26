import { ExternalLink, Presentation, Smartphone } from "lucide-react";
// Megjegyzés: A "React.ElementType"-hoz lehet, kelleni fog a "import React from 'react'" a fájl elejére, ha hibát dob.
import React from 'react';

interface PortfolioProject {
  title: string;
  category: string;
  description: string;
  link?: string;
  image?: string; 
  tags: string[];
  icon: React.ElementType;
}

const projects: PortfolioProject[] = [
  {
    title: "Prezentációk, egyéb projektek",
    category: "Marketing, Kereskedelem, Beszerzés",
    description: "Deciem piaci elemzés és Unicum kereskedelmi stratégia, költségcsökkentés és döntéselőkészítés Excel modellezéssel, Figyelemfelkeltő 'One-pager' Opel Corsa értékesítési anyag.",
    image: "/prezi-borito-1.jpg", 
    link: "https://drive.google.com/drive/folders/1oFEzPhNzDHii4ORk8MagDpI5PfUuAVN2?usp=drive_link", 
    tags: ["Marketing","Piackutatás", "PowerPoint", "Kereskedelem", "Beszerzés", "Excel", "Canva"],
    icon: Presentation
  },
  {
    title: "CherryOnTop Webalkalmazás",
    category: "UI/UX design, Webfejlesztés",
    description: "Mikrotanulás applikáció koncepció. Interaktív prototípus és landing page terv.",
    image: "/app-mockup.jpg", 
    link: "https://cherryontopthestudyapp.vercel.app/", 
    tags: ["UI/UX Design", "App Concept"],
    icon: Smartphone
  },
];

const PortfolioSection = () => {
  return (
    // FŐ KERET
    <section className="rounded-2xl p-6 shadow-md transition-colors duration-300
      bg-white border border-gray-100
      dark:bg-zinc-900 dark:border-zinc-800"
    >
      <h2 className="text-xl font-semibold mb-6 flex items-center gap-2
        text-gray-900 dark:text-white"
      >
        <div className="w-1 h-6 bg-primary rounded-full" />
        Portfólió
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div 
            key={index} 
            // PROJEKT KÁRTYA STÍLUS
            className="flex flex-col rounded-xl overflow-hidden transition-all duration-300 group
              bg-white border border-gray-200 hover:shadow-lg hover:border-primary/30
              dark:bg-zinc-800 dark:border-zinc-700"
          >
            {/* KÉP HELYE */}
            <div className="h-48 w-full bg-gray-100 dark:bg-zinc-900 relative overflow-hidden group-hover:opacity-90 transition-opacity">
              {project.image ? (
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-top"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <project.icon className="w-16 h-16" />
                </div>
              )}
              
              {/* Kategória címke */}
              <div className="absolute top-3 left-3 px-2 py-1 rounded text-xs font-medium shadow-sm backdrop-blur-sm
                bg-white/90 text-gray-900
                dark:bg-black/80 dark:text-white"
              >
                {project.category}
              </div>
            </div>

            {/* TARTALOM */}
            <div className="p-5 flex flex-col flex-1">
              <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors
                text-gray-900 dark:text-white"
              >
                {project.title}
              </h3>
              
              <p className="text-sm mb-4 flex-1
                text-gray-600 dark:text-gray-300"
              >
                {project.description}
              </p>
              
              {/* Címkék */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs px-2 py-1 rounded-md font-medium
                    bg-primary/10 text-primary
                    dark:bg-primary/20 dark:text-primary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Gomb */}
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto w-full flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-semibold transition-colors
                    bg-primary/10 text-primary hover:bg-primary hover:text-white
                    dark:bg-primary/20 dark:text-white dark:hover:bg-primary"
                >
                  Megtekintés <ExternalLink className="w-4 h-4" />
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